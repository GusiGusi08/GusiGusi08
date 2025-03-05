window.addEventListener("resize", function() {
    if (window.innerWidth < 301) {
        document.body.style.zoom = window.innerWidth / 300 + "";
    } else if (window.innerWidth < 351) {
        document.body.style.zoom = window.innerWidth / 350 + "";
    }
});
