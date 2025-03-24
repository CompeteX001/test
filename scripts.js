function toggleMenu() {
    var menu = document.getElementById("menuContent");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function goHome() {
    window.location.href = "index.html";
}

function slideLeft() {
    document.getElementById('classes').scrollLeft -= 200;
}

function slideRight() {
    document.getElementById('classes').scrollLeft += 200;
}