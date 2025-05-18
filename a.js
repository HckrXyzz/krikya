function processBalanceTable(tableBodyId, lowBalanceThreshold) {
  const tableBody = document.getElementById(tableBodyId);
  if (!tableBody) {
    console.error(`Table body with ID '${tableBodyId}' not found.`);
    return;
  }

  const rows = Array.from(tableBody.querySelectorAll('tr'));

  function getBalance(row) {
    const balanceCell = row.querySelector('td:nth-child(BALANCE)');
    if (balanceCell) {
      const balanceText = balanceCell.textContent.trim();
      // Remove any non-numeric characters except the decimal point
      const numericBalance = balanceText.replace(/[^\d.]/g, '');
      return parseFloat(numericBalance);
    }
    return NaN; // Indicate an invalid balance
  }

  // Function to update the balance format
  function updateBalanceFormat(row) {
    const balanceCell = row.querySelector('td:nth-child(BALANCE)');
    if (balanceCell) {
      const balanceValue = getBalance(row);
      if (!isNaN(balanceValue)) {
        balanceCell.textContent = balanceValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      }
    }
  }

  // Filter out rows with low balance
  const filteredRows = rows.filter(row => {
    const balance = getBalance(row);
    return isNaN(balance) || balance >= lowBalanceThreshold;
  });

  // Sort the remaining rows by balance in ascending order
  filteredRows.sort((rowA, rowB) => {
    const balanceA = getBalance(rowA);
    const balanceB = getBalance(rowB);
    if (isNaN(balanceA)) return 1; // Put rows with invalid balance at the end
    if (isNaN(balanceB)) return -1;
    return balanceA - balanceB;
  });

  // Clear the table body
  tableBody.innerHTML = '';

  // Append the filtered and sorted rows back to the table body
  filteredRows.forEach(row => {
    updateBalanceFormat(row); // Update the balance format before appending
    tableBody.appendChild(row);
  });
}

// Example usage:
const tableBodyId = 'tableBody'; // Replace with the actual ID of your table body
const lowBalanceThreshold = 1; // Set your low balance threshold
processBalanceTable(tableBodyId, lowBalanceThreshold);
	document.querySelectorAll("table tr").forEach(function(row) {
  let shouldRemove = false;

  row.querySelectorAll("td").forEach(function(cell) {
    let value = cell.textContent.trim();
    let intPart = parseFloat(value.split('.')[0]);

    if (!isNaN(intPart) && intPart < 10) {
      shouldRemove = true;
    }
  });

  if (shouldRemove) {
    row.querySelectorAll("td").forEach(function(cell) {
      cell.remove();
    });
  }
});
