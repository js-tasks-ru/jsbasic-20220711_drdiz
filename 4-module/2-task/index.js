function makeDiagonalRed(table) {
    let tableRows = table.querySelectorAll('tr');
    row = 0;
    tableRows.forEach(tableRow => {
        tableRow.children[row].style.background = 'red';
        row++;        
        });      
}
