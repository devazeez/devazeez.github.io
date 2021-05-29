document.getElementById("nav-toggle").addEventListener("click", function() {

    const nav = document.getElementById('nav-links')
    if (nav) {
        console.log("azeez is working")
            // We add the show-menu class to the div tag with the nav__menu class
        nav.classList.toggle('show-menu')
    }
});