var flag = true;
function myFunction() {
       var x = document.getElementById("empty"); 
       if (flag) {
           x.innerHTML = "Heads Up! This service includes basic lashes, eyeshadow, highlight, blush, and lipgloss or lipstick!";
       }
      else {
           x.innerHTML = '';
       }
       flag = !flag
} 

var flag = true;
function function2() {
    var x = document.getElementById("empty2");
    if (flag) {
        x.innerHTML = "Heads Up! This service includes dramatic lashes, eyeshadow with or without glitter, highlight, blush, and lipgloss or lipstick."
    }
    else {
        x.innerHTML = '';
    }
    flag = !flag
}

var flag = true;
function function3() {
    var x = document.getElementById("empty3");
    if (flag) {
        x.innerHTML = "Heads Up! If you come with your own makeup materials then the price will remain $30. If you would like me to provide the makeup materials, then the price will be $40. More information regarding makeup classes is available under the Guidelines section."
    }
    else {
        x.innerHTML = '';
    }
    flag = !flag
}
/* function myFunction2() {
    document.getElementById("empty2").innerHTML = "Heads Up! This service includes dramatic lashes, eyeshadow with or without glitter, highlight, blush, and lipgloss or lipstick."
}

function myFunction3() {
    document.getElementById("empty3").innerHTML = "Heads Up! If you come with your own makeup materials then the price will remain $30. If you would like me to provide the makeup materials, then the price will be $40. More information regarding makeup classes is available under the Guidelines section."
} */