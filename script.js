window.addEventListener("resize", function() {
    if (window.innerWidth < 601) {
        document.body.style.zoom = window.innerWidth / 600 + "";
    } else {
        document.body.style.zoom = "";
    }
});
