window.addEventListener("resize", function() {
    if (window.innerWidth < 601) {
        document.body.style.zoom = window.innerWidth / 600 + "";
    } else {
        document.body.style.zoom = "";
    }
  })
  window.addEventListener("load", function() {
    if (window.innerWidth < 600) {
        document.body.style.zoom = window.innerWidth / 599 + "";
    } else {
        document.body.style.zoom = "";
    }
  })

