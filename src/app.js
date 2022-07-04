
/**
 * Main app entry point app, and handler for all logic
 * Imports and formats data then renders Grid.js table
 * 
 * GitHub: https://github.com/Lissy93/email-comparison
 * Live App: https://lissy93.github.io/email-comparison
 * 
 * Licensed MIT, © Alicia Sykes <aliciasykes.com> 2022
 */

import { Grid, html } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';
import { mailProviders } from './data.yml';

// Map data identifiers to textual column names
const columnMap = new Map([
  ['jurisdiction', 'Jurisdiction'],
  ['encryption', 'Encryption'],
  ['openSource', 'Open Source'],
  ['onionSite', 'Onion Site'],
  ['pricing', 'Pricing'],
  ['domainSupport', 'Custom Domain'],
  ['aliases', 'Aliases'],
  ['webClientAccess', 'External Access'],
  ['securityAudit', 'Security Audited'],
  ['acceptsCrypto', 'Accepts Crypto'],
  ['mobileApp', 'Mobile App'],
  ['personalInfoRequired', 'Required Info'],
]);

// Get list of column IDs from above map
const dataKeys = Array.from(columnMap.keys());

// Get key from column name
const getKey = (searchValue) => {
  return [...columnMap.entries()]
    .filter(({ 1: v }) => v === searchValue)
    .map(([k]) => k);
}

// Add custom data attribute to given cell, indicating it's score
const customDataAttributes = (cell, row, column) => {
  if (!cell || !row || !column) return null;
  const rowTitle = row?._cells[0]?.data;
  const rowObj = mailProviders.find((provider) => provider.name === rowTitle );
  const category = getKey(column.name);
  if (!rowObj || !rowObj[category]) return null;
  const { level, notes } = rowObj[category];
  return { 'data-score': level, title: notes };
}

// Format the first cell (provider name) with HTML, so it can be a hyperlink
const makeTitleCell = (cell) => {
  const link = mailProviders.find((provider) => provider.name === cell )?.link || '#';
  return html(
    `<a title="${cell} (${link})" href="${link}" target="_blank">${cell}</a>`
  );
}

// Make list of column names
const columnsNames = [
  { // First cell
    name: 'Name',
    formatter: makeTitleCell,
  },
  ...dataKeys.map( // All other cells
    (key) => ({
      name: columnMap.get(key),
      attributes: customDataAttributes,
    }),
  )];

// Format data into a 2-dimensional array for table data
const formatData = () => {
  const tableData = [];
  mailProviders.forEach((provider) => {
    const row = [ provider.name ];
    dataKeys.forEach((key) => {
      row.push(provider[key]?.text || '?');
    });
    tableData.push(row);
  });
  return tableData;
};

// Configure the data table
const emailTable = new Grid({
  columns: columnsNames,
  data: formatData(),
  search: { enabled: true },
  sort: true,
  resizable: true,
  fixedHeader: true,
  pagination: { limit: 15 },
  style: { 
    table: { 
      'white-space': 'pre'
    }
  },
});

// Select target DOM element to render table in
const tableElement = document.getElementById('email-comparison-table');

// Render table!
emailTable.render(tableElement);
