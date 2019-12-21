
// competences hover

var html_comp = document.querySelectorAll(".item")

percent_array = ["70%", "80%", "90%", "90%", "75%", "85%", "70%", "50%", "40%"];
color_array = ["#2aabde", "#f0662b", "#f0bd26", "#007ab3", "#e82a30", "#4eb5ab", "#f24e29", "#3cde82", "#3cde82"];

html_comp.forEach((competence, index) => {

    competence.addEventListener("mouseover", function() {
        var images = competence.querySelectorAll('img');
        images[0].style.display = "none";
        images[1].style.display = "inline";
        let line = competence.querySelector('.line');
        line.style.width = percent_array[index];
        line.style.backgroundColor = color_array[index];
    });

    competence.addEventListener("mouseout", function() {
        var images = competence.querySelectorAll('img');
        images[1].style.display = "none";
        images[0].style.display = "inline";
    });
})

// for (let competence of html_comp) {
    
//     competence.addEventListener("mouseover", function() {
//         var images = competence.querySelectorAll('img');
//         images[0].style.display = "none";
//         images[1].style.display = "inline";
//         let line = document.querySelectorAll('.line')[0];
//         line.style.transition = "all 5s";
//         line.style.width = "10%";
//         line.style.backgroundColor = "red";
//     });

//     competence.addEventListener("mouseout", function() {
//         var images = competence.querySelectorAll('img');
//         images[1].style.display = "none";
//         images[0].style.display = "inline";
//     });

// }