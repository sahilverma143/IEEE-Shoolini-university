// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    document.getElementById("placeholder").style.display = "block"; // Show the placeholder
} else {
    header.classList.remove("sticky");
    document.getElementById("placeholder").style.display = "none"; // Hide the placeholder
}
}

// When the user scrolls the page, execute stickyNav
window.onscroll = function() { stickyNav(); };
