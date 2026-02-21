import { LitElement, html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { ATTRIBUTE_KEYS_TITLES, type MailProvider, type TextAndLevel } from '../types/MailServices';
import './Icon.ts';

@customElement('email-comparison-table')
export class EmailComparisonTable extends LitElement {

  @property({ attribute: false, type: Array }) mailProviders: MailProvider[] = [];
  @state() private sortedColumn: string | null = null;
  @state() private sortAscending: boolean = true;

  static dataPoints = Object.keys(ATTRIBUTE_KEYS_TITLES) as (keyof typeof ATTRIBUTE_KEYS_TITLES)[];
  static tableHeadings = ATTRIBUTE_KEYS_TITLES;

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
    vertical-align: top;
    a {
      color: var(--foreground-head);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  th {
    text-overflow: ellipsis;
    white-space: nowrap;
    position: sticky;
    top: 0;
    background: var(--foreground-lighter);
    border-top: none;
    z-index: 2;
    border-right: 1px solid var(--foreground-light);
    button {
      all: unset;
      cursor: pointer;
      display: inline;
      font: inherit;
      color: inherit;
      &:hover { color: var(--primary); }
      &:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
    }
    .desc icon-component { display: inline-block; transform: scaleY(-1); }
  }

  .cell-text {
    display: block;
    white-space: break-spaces;
    max-height: 1.5em;
    overflow: hidden;
    transition: max-height 0.25s ease-out;
  }

  tr:hover td:not(:first-child) .cell-text,
  tr:focus-within td:not(:first-child) .cell-text {
    max-height: 12em;
  }

  tbody tr td:first-child {
    position: sticky;
    left: 0;
    background-color: var(--background);
    z-index: 1;
    color: var(--foreground-head);
  }

  tbody tr td:first-child a {
    color: var(--foreground-head);
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
  .has-info {
    background-color: var(--blue);
  }

`;

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
    return html`<td class=${levelClass}><span class="cell-text">${data.text}</span></td>`;
  }

  private sortButton(column: string, label: string) {
    const isSorted = this.sortedColumn === column;
    const icon = isSorted ? 'sorted' : 'sort';
    const btnClass = isSorted && !this.sortAscending ? 'desc' : '';
    return html`<button class=${btnClass} @click=${() => this.toggleSort(column)}>
      ${label} <icon-component .iconName=${icon} aria-hidden="true"></icon-component>
    </button>`;
  }

  private sortAttr(column: string) {
    if (this.sortedColumn !== column) return 'none';
    return this.sortAscending ? 'ascending' : 'descending';
  }

  renderHeaders() {
    return html`
      <tr>
        <th scope="col" aria-sort=${this.sortAttr('name')}>${this.sortButton('name', 'Provider')}</th>
        ${EmailComparisonTable.dataPoints.map(point => html`
          <th scope="col" aria-sort=${this.sortAttr(point)}>${this.sortButton(point, EmailComparisonTable.tableHeadings[point])}</th>`
        )}
        <th scope="col">Privacy Report</th>
      </tr>
    `;
  }


  renderProviderRow(provider: MailProvider) {
    return html`
      <tr>
        <td>
          <img width="16" height="16" loading="lazy" src=${provider.icon} alt="" />
          <a href=${provider.link}>${provider.name}</a>
        </td>
        ${EmailComparisonTable.dataPoints.map(point => this.renderCell(provider[point]))}
        ${provider.privacyReport
          ? html`<td class="has-info"><a href=${provider.privacyReport} target="_blank" rel="nofollow">View Report ↗</a></td>`
          : html`<td>—</td>`}
      </tr>
    `;
  }


  renderTable() {
    return html`
    <table aria-labelledby="table-heading">
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
      <h2 id="table-heading">Summary</h2>
      <p class="intro">Scroll horizontally to view further columns, hover over a row to read, click a heading to sort.</p>
        <div class="table-container">
          ${this.renderTable()}
        </div>
      </section>
    `;
  }
}

