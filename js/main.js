function validateTextBox() {
    var box = document.getElementById("name");
    var box2 = document.getElementById("email");
    var box3 = document.getElementById("sub");
    var box4 = document.getElementById("question");

    if (box.value == "" || box2.value == "" || box3.value == "" || box4.value == "") {
        alert("box is empty");
        if (box.value == "") {
            box.focus();
            box.style.border = "solid 2px red";
        } else {
            box.focus();
            box.style = "";
        }
        if (box2.value == "") {
            box2.focus();
            box2.style.border = "solid 2px red";
        } else {
            box2.focus();
            box2.style = "";
        }
        if (box3.value == "") {
            box3.focus();
            box3.style.border = "solid 2px red";
        } else {
            box3.focus();
            box3.style = "";
        }
        if (box4.value == "") {
            box4.focus();
            box4.style.border = "solid 2px red";
        } else {
            box4.focus();
            box4.style = "";
        }
        return false;
    } else if (box.value.length < 5 || box2.value.length < 7 || box3.value.length < 8 || box4.value.length < 9) {

        alert("fill minimum character");
        if (box.value.length < 5) {
            box.focus();
            box.style.border = "solid 2px red";
        } else {
            box.focus();
            box.style = "";
        }
        if (box2.value.length < 7) {
            box2.focus();
            box2.style.border = "solid 2px red";
        } else {
            box2.focus();
            box2.style = "";
        }
        if (box3.value.length < 8) {
            box3.focus();
            box3.style.border = "solid 2px red";
        } else {
            box3.focus();
            box3.style = "";
        }
        if (box4.value.length < 9) {
            box4.focus();
            box4.style.border = "solid 2px red";
        } else {
            box4.focus();
            box4.style = "";
        }
        return false;


    }
}