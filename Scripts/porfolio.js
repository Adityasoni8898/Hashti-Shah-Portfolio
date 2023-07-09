document.getElementById("type1").addEventListener("click", function() {
    var targetElement = document.getElementById("type_2");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_3");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_4");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_1");
    targetElement.style.display = "flex";


    document.getElementById("type1").style.textDecoration = "underline";
    document.getElementById("type2").style.textDecoration = "none";
    document.getElementById("type4").style.textDecoration = "none";
    document.getElementById("type3").style.textDecoration = "none";

});


document.getElementById("type2").addEventListener("click", function() {
    var targetElement = document.getElementById("type_1");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_3");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_4");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_2");
    targetElement.style.display = "flex";


    document.getElementById("type1").style.textDecoration = "none";
    document.getElementById("type2").style.textDecoration = "underline";
    document.getElementById("type4").style.textDecoration = "none";
    document.getElementById("type3").style.textDecoration = "none";

});

document.getElementById("type3").addEventListener("click", function() {
    var targetElement = document.getElementById("type_1");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_2");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_4");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_3");
    targetElement.style.display = "flex";

    document.getElementById("type1").style.textDecoration = "none";
    document.getElementById("type2").style.textDecoration = "none";
    document.getElementById("type4").style.textDecoration = "none";
    document.getElementById("type3").style.textDecoration = "underline";
});

document.getElementById("type4").addEventListener("click", function() {
    var targetElement = document.getElementById("type_1");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_2");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_3");
    targetElement.style.display = "none";

    targetElement = document.getElementById("type_4");
    targetElement.style.display = "flex";


    document.getElementById("type1").style.textDecoration = "none";
    document.getElementById("type2").style.textDecoration = "none";
    document.getElementById("type4").style.textDecoration = "underline";
    document.getElementById("type3").style.textDecoration = "none";

});