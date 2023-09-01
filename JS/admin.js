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
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

  // Funcion de barra de busqueda
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    var items = document.querySelectorAll(".search-item");
    
    items.forEach(function (item) {
      var text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
