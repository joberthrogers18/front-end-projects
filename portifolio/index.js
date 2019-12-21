
// competences hover

var html_comp = document.querySelectorAll(".item")

percent_array = ["70%", "80%", "90%", "90%", "75%", "85%", "70%", "50%", "55%", "40%", "50%", "70%"];
color_array = ["#2aabde", "#f0662b", "#f0bd26", "#007ab3", "#e82a30", "#4eb5ab", "#f24e29", "#3cde82", "#3cde82", "#007ab3", "#b21f66", "#589636"];

html_comp.forEach((competence, index) => {

    competence.addEventListener("mouseover", function() {
        var images = competence.querySelectorAll('i');
        images[0].style.display = "none";
        images[1].style.display = "inline";
        let line = competence.querySelector('.line');
        line.style.width = percent_array[index];
        line.style.backgroundColor = color_array[index];
    });

    competence.addEventListener("mouseout", function() {
        var images = competence.querySelectorAll('i');
        images[1].style.display = "none";
        images[0].style.display = "inline";
    });
})
