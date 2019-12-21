
// competences hover

var html_comp = document.querySelectorAll(".item")

for (let competence of html_comp) {
    
    competence.addEventListener("mouseover", function() {
        var images = competence.querySelectorAll('img');
        images[0].style.display = "none";
        images[1].style.display = "inline";
    });

    competence.addEventListener("mouseout", function() {
        var images = competence.querySelectorAll('img');
        images[1].style.display = "none";
        images[0].style.display = "inline";
    });

}