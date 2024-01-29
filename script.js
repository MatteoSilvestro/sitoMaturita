document.addEventListener('DOMContentLoaded', function () {
    var McButton = document.querySelector("[data=hamburger-menu]");

    McButton.addEventListener('click', function () {
        McButton.classList.toggle("active");
        
    });
});
