window.addEventListener("resize", function() {
    if (window.innerWidth < 589) {
        document.body.style.zoom = window.innerWidth / 590 + "";
    } else {
        document.body.style.zoom = "";
    }
});
