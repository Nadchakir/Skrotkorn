document.addEventListener('DOMContentLoaded', () => {
    // Menu items array
    const menuItems = [
        { name: "Kontakta oss", link: "/kontaktaoss.html" },
        { name: "Media", link: "/media.html" },
        { name: "Produkter", link: "/produkter.html" },
        { name: "Startsida", link: "/index.html" }
    ];

    // Create menu list
    const menu = document.createElement("ul");
    menu.className = "menu";

    // Append menu items to the menu list
    menuItems.forEach(item => {
        const menuItem = document.createElement("li");
        const menuLink = document.createElement("a");
        menuLink.href = item.link;
        menuLink.textContent = item.name;
        menuItem.appendChild(menuLink);
        menu.appendChild(menuItem);
    });

    // Add the menu to the .top-nav element
    const topNav = document.querySelector(".top-nav");
    if (topNav) {
        topNav.appendChild(menu);
    }

    // Create the search form
    const searchForm = document.createElement('form');
    searchForm.className = 'search-form';

    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Sök...');

    const searchButton = document.createElement('button');
    searchButton.setAttribute('type', 'submit');
    searchButton.textContent = 'Sök';

    // Append the search input and button to the search form
    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);

    // Append the search form to the .top-nav element
    if (topNav) {
        topNav.appendChild(searchForm);
    }
});
