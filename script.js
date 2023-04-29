var currentPage = 1;
      var itemsPerPage = 1;
      var items = document.querySelectorAll('#content > div');
      var totalPages = Math.ceil(items.length / itemsPerPage);
      var paginationElement = document.getElementById('pagination');

      function generatePagination() {
        var paginationHTML = '';

        // Add previous button if not on the first page
        if (currentPage > 1) {
          paginationHTML += '<a href="#" class="page-link" onclick="goToPage(' + (currentPage - 1) + ')">Previous</a>';
        }

        // Add page links
        for (var i = 1; i <= totalPages; i++) {
          if (i == currentPage) {
            paginationHTML += '<a href="#" class="page-link active">' + i + '</a>';
          } else {
            paginationHTML += '<a href="#" class="page-link" onclick="goToPage(' + i + ')">' + i + '</a>';
          }
        }

        // Add next button if not on the last page
        if (currentPage < totalPages) {
          paginationHTML += '<a href="#" class="page-link" onclick="goToPage(' + (currentPage + 1) + ')">Next</a>';
        }

        paginationElement.innerHTML = paginationHTML;
      }

      function generateContent() {
        // Hide all items
        items.forEach(function(item) {
          item.style.display = 'none';
        });

        // Get the items to display on the current page
  var startIndex = (currentPage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  var pageItems = Array.from(items).slice(startIndex, endIndex);

  // Show the items on the current page
  pageItems.forEach(function(item) {
    item.style.display = 'block';
  });
}

function goToPage(page) {
  currentPage = page;
  generatePagination();
  generateContent();
}

// Generate initial pagination and content
generatePagination();
generateContent();