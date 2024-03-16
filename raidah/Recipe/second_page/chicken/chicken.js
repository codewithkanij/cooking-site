document.addEventListener('DOMContentLoaded', function() {
    const search = document.getElementById('search'),
          searchBtn = document.getElementById('search-btn'),
          searchClose = document.getElementById('search-close');
  
    /* Search show */
    searchBtn.addEventListener('click', () => {
        search.classList.add('show-search');
    });
  
    /* Search hidden */
    searchClose.addEventListener('click', () => {
        search.classList.remove('show-search');
    });
});

// Assuming you're using JavaScript to handle the hover effect
document.querySelectorAll('.recipe-menu').forEach(function(menu) {
    menu.addEventListener('mouseenter', function() {
        this.querySelector('.drop-down').classList.add('show');
    });

    menu.addEventListener('mouseleave', function() {
        this.querySelector('.drop-down').classList.remove('show');
    });
});


