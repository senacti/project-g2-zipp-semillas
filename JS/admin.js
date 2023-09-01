$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

function showTable(category) {
            const allTables = document.querySelectorAll('.table-responsive');
            allTables.forEach(table => {
                table.style.display = 'none';
            });

            const selectedTable = document.getElementById(`${category}Table`);
            selectedTable.style.display = 'block';
        }
