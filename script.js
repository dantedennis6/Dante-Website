document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Example of JavaScript interaction
    const header = document.querySelector('header h1');
    header.addEventListener('click', function() {
        alert('Welcome to My Website!');
    });
});
