var check_var =  document.querySelectorAll("li");

check_var.forEach(elem => {
    elem.addEventListener("mouseover", () => {
        var check = elem.querySelectorAll(".check");
        var icon = document.createElement("i");
        icon.className += "fa fa-check";
        check[0].appendChild(icon);
    });
    elem.addEventListener("mouseout", () => {
        var check = elem.querySelectorAll(".check");
        var icons = elem.querySelectorAll("i");
        check[0].removeChild(icons[0]);
    });
});
