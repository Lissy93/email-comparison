

import { LitElement, html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';;
import yaml from 'js-yaml';

import type { MailServices, MailProvider, TextAndLevel } from '../types/MailServices';
import  './Icon.ts'


@customElement('email-comparison-table')
export class EmailComparisonTable extends LitElement {

  @state() private isLoading: boolean = true;
  @property({ attribute: false, type: Array }) mailProviders: MailProvider[] = [];
  @state() private sortedColumn: string | null = null;
  @state() private sortAscending: boolean = true;

  static dataPoints = [
    'jurisdiction',
    'encryption',
    'openSource',
    'onionSite',
    'pricing',
    'customDomain',
    'aliases',
    'webClientAccess',
    'securityAudit',
    'acceptsCrypto',
    'personalInfoRequired',
    'mobileApp',
    'activeDevelopment'
  ] as const;

  static tableHeadings: Record<typeof EmailComparisonTable.dataPoints[number], string> = {
    jurisdiction: 'Jurisdiction',
    encryption: 'Encryption',
    openSource: 'Open Source',
    onionSite: 'Onion Site',
    pricing: 'Pricing',
    customDomain: 'Custom Domain',
    aliases: 'Aliases',
    webClientAccess: 'Web Client Access',
    securityAudit: 'Security Audit',
    acceptsCrypto: 'Accepts Crypto',
    personalInfoRequired: 'Personal Info Required',
    mobileApp: 'Mobile App',
    activeDevelopment: 'Active Development'
  };

  static styles = css`
  section {
    max-width: 1000px;
    margin: 0 auto;
    width: 80vw;
    padding: 1.8rem;
  }

  h2 {
    color: var(--foreground-head);
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  .intro {
    margin: 0 0 0.5rem 0;
    font-size: 0.8rem;
  }

  .table-container {
    overflow-x: auto;
    border-radius: 3px;
    border: 1px solid var(--foreground-light);
    &::-webkit-scrollbar {
      height: 10px;
      background-color: var(--background);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track  {
      background-color: var(--background);
    }
  }

  table {
    min-width: max-content;
    border-collapse: collapse;
    background-color: var(--background);
    color: var(--foreground-body);
  }

  th, td {
    border: 1px solid var(--foreground-light);
    padding: 0.5rem;
    text-align: left;
    max-width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    transition: all 0.2s ease-in-out;
    a {
      color: var(--foreground);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  th {
    position: sticky;
    top: 0;
    background: var(--foreground-lighter);
    border-top: none;
    z-index: 2;
    border-right: 1px solid var(--foreground-light);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: var(--primary);
    }
  }

  tbody tr td:first-child {
    position: sticky;
    left: 0;
    background-color: var(--background);
    z-index: 1;
    color: var(--foreground);
  }

  tbody tr td:first-child a {
    color: var(--foreground);
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }

  th:first-child {
    left: 0;
    z-index: 3;
    background: var(--background);
  }

  .level-1 {
    background-color: var(--green);
  }
  .level-2 {
    background-color: var(--amber);
  }
  .level-3 {
    background-color: var(--red);
  }
  .level-0, .level-other {
    background-color: var(--grey);
  }

  tr:hover td:not(:first-child) {
    white-space: break-spaces;
  }
`;

  firstUpdated() {
    if (this.mailProviders.length === 0) {
      this.fetchData();
    }
  }

  async fetchData() {
    try {      
      const response = await fetch('https://raw.githubusercontent.com/Lissy93/email-comparison/master/src/data.yml');
      const text = await response.text();
      const data = yaml.load(text);
      this.mailProviders = (data as MailServices).mailProviders;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.isLoading = false;
    }
  }

  toggleSort(column: string) {
    if (this.sortedColumn === column) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortedColumn = column;
      this.sortAscending = true;
    }
    this.sortData();
  }

  sortData() {
    this.mailProviders = [...this.mailProviders].sort((a, b) => {
      let aValue = this.getValue(a, this.sortedColumn);
      let bValue = this.getValue(b, this.sortedColumn);

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return this.sortAscending ? aValue - bValue : bValue - aValue;
      }

      aValue = aValue.toString().toLowerCase();
      bValue = bValue.toString().toLowerCase();

      if (aValue < bValue) {
        return this.sortAscending ? -1 : 1;
      }
      if (aValue > bValue) {
        return this.sortAscending ? 1 : -1;
      }
      return 0;
    });
  }

  getValue(provider: MailProvider, column: string | null): string | number {
    if (column === 'name') {
      return provider.name;
    }
    const data = provider[column as keyof MailProvider] as TextAndLevel;
    return data.level || data.text;
  }

  renderCell(data: TextAndLevel) {
    const levelClass = `level-${data.level || 'other'}`;
    return html`<td class=${levelClass}>${data.text}</td>`;
  }

  renderHeaders() {
    return html`
      <tr>
        <th @click=${() => this.toggleSort('name')}>
          Provider
          <icon-component .iconName=${this.sortedColumn === 'name' ? 'sorted' : 'sort'}></icon-component>
        </th>
        ${EmailComparisonTable.dataPoints.map(point => html`
          <th @click=${() => this.toggleSort(point)}>
            ${EmailComparisonTable.tableHeadings[point]}
            <icon-component .iconName=${this.sortedColumn === point ? 'sorted' : 'sort'}></icon-component>
          </th>`
        )}
      </tr>
    `;
  }
  

  renderProviderRow(provider: MailProvider) {
    return html`
      <tr>
        <td>
          <img width="16" src=${provider.icon} alt="icon" />
          <a href=${provider.link}>${provider.name}</a>
        </td>
        ${EmailComparisonTable.dataPoints.map(point => this.renderCell(provider[point]))}
      </tr>
    `;
  }
  

  renderTable() {
    if (this.isLoading && this.mailProviders.length === 0) {
      return html`<p>Loading...</p>`;
    }

    return html`
    <table>
      <thead>
        ${this.renderHeaders()}
      </thead>
      <tbody>
        ${this.mailProviders.map(provider => this.renderProviderRow(provider))}
      </tbody>
    </table>
    `;
  }

  render() {
    return html`
      <section>
      <h2>Summary</h2>
      <p class="intro">Scroll horizontally to view further columns, hover over a row to read, click a heading to sort.</p>
        <div class="table-container">
          ${this.renderTable()}
        </div>
      </section>
    `;
  }
}

