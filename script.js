document.addEventListener("DOMContentLoaded", () => {

// change theme and set local storage
    const optionOne = document.getElementById("option-1");
    const optionTwo = document.getElementById("option-2");
    const optionThree = document.getElementById("option-3");
    const body = document.getElementById("body");
    const circleOne = document.getElementById("circle-1");
    const circleTwo = document.getElementById("circle-2");
    const circleThree = document.getElementById("circle-3");

    function themeOne() {
        body.classList.remove("theme-2");
        body.classList.remove("theme-3");

        circleOne.style.background = "#D03F2F";
        circleTwo.style.background = "#242D44";
        circleThree.style.background = "#242D44";

        localStorage.setItem("theme", "theme-1");

        // function mOverOne() {
        //     circleOne.style.background = "#F96B5B";
        //     circleOne.style.cursor = "pointer";
        //     circleTwo.style.background = "#242D44";
        //     circleThree.style.background = "#242D44";
        // }
    
        // function mOutOne() {
        //     circleOne.style.background = "#D03F2F";
        //     circleTwo.style.background = "#242D44";
        //     circleThree.style.background = "#242D44";
        // }

        // circleOne.addEventListener("mouseover", mOverOne, false);
        // circleOne.addEventListener("mouseout", mOutOne, false);
    }

    function themeTwo() {
        body.classList.add("theme-2");
        body.classList.remove("theme-1");
        body.classList.remove("theme-3");

        circleTwo.style.background = "#C85402";
        circleOne.style.background = "#D2CDCD"
        circleThree.style.background = "#D2CDCD";

        localStorage.setItem("theme", "theme-2");
    }

    function themeThree() {
        body.classList.add("theme-3");
        body.classList.remove("theme-1");
        body.classList.remove("theme-2");

        circleThree.style.background = "#00DED0";
        circleOne.style.background = "#1E0936";
        circleTwo.style.background = "#1E0936";
        
        localStorage.setItem("theme", "theme-3");
    }

    optionOne.addEventListener("click", themeOne);
    optionTwo.addEventListener("click", themeTwo);
    optionThree.addEventListener("click", themeThree);
    circleOne.addEventListener("click", themeOne);
    circleTwo.addEventListener("click", themeTwo);
    circleThree.addEventListener("click", themeThree);


// check local storage theme
    function checkTheme() {
        const localStorageTheme = localStorage.getItem("theme");

        if (localStorageTheme === "theme-2") {
            themeTwo();
        }

        else if (localStorageTheme === "theme-3") {
            themeThree();
        }

        else themeOne();
    }

    window.onload = checkTheme();


// calculator
    const input = document.getElementById("input");
    const prev = document.getElementById("previous-operand");
    const curr = document.getElementById("current-operand");
    

    // reset input
    const reset = document.getElementById("reset");

    function resetFunction() {
        curr.innerHTML = "";
        prev.innerHTML = "";
    }
    
    reset.addEventListener("click", resetFunction);


    // delete last character
    const del = document.getElementById("delete");

    function deleteLastChar() {
        // let str = input.value;
        // str = str.substring(0, str.length-1);
        // input.value = str;
        if (curr.innerHTML != "") {
            let str = curr.innerHTML;
            str = str.substring(0, str.length-1);
            curr.innerHTML = str;
        }
        else {
            let str = prev.innerHTML;
            str = str.substring(0, str.length-1);
            prev.innerHTML = str;
        }
    }

    del.addEventListener("click", deleteLastChar);


    // add character in input area on button click
    // const one = document.getElementById("one");
    // const two = document.getElementById("two");
    // const three = document.getElementById("three");
    // const four = document.getElementById("four");
    // const five = document.getElementById("five");
    // const six = document.getElementById("six");
    // const seven = document.getElementById("seven");
    // const eight = document.getElementById("eight");
    // const nine = document.getElementById("nine");
    // const zero = document.getElementById("zero");
    // const point = document.getElementById("point");
    // const addition = document.getElementById("addition");
    // const substraction = document.getElementById("substraction");
    // const division = document.getElementById("division");
    // const multiplication = document.getElementById("multiplication");
    // const equally = document.getElementById("equally");


    


    // function writeOne() {
    //     curr.innerHTML += "1";
    // }
    
    // one.addEventListener("click", writeOne);

    // function writeTwo() {
    //     curr.innerHTML += "2";
    // }
    
    // two.addEventListener("click", writeTwo);

    // function writeThree() {
    //     input.value += "3";
    // }
    
    // three.addEventListener("click", writeThree);

    // function writeFour() {
    //     input.value += "4";
    // }
    
    // four.addEventListener("click", writeFour);

    // function writeFive() {
    //     input.value += "5";
    // }
    
    // five.addEventListener("click", writeFive);

    // function writeSix() {
    //     input.value += "6";
    // }
    
    // six.addEventListener("click", writeSix);

    // function writeSeven() {
    //     input.value += "7";
    // }
    
    // seven.addEventListener("click", writeSeven);

    // function writeEight() {
    //     input.value += "8";
    // }
    
    // eight.addEventListener("click", writeEight);

    // function writeNine() {
    //     input.value += "9";
    // }
    
    // nine.addEventListener("click", writeNine);

    // function writeZero() {
    //     input.value += "0";
    // }

    // zero.addEventListener("click", writeZero);
    // substraction.addEventListener("click", writeSubstraction);

    // function writeMultiplication() {
    //     input.value += "*";
    // }

    // multiplication.addEventListener("click", writeMultiplication);

    // function writeDivision() {
    //     input.value += "/";
    // }

    // division.addEventListener("click", writeDivision);

    // function writePoint() {
    //     input.value += ".";
    // }

    // point.addEventListener("click", writePoint);



    // function writeAddition() {

    //     if (curr.innerHTML != "" && prev.innerHTML != "") {
    //         result ();
    //         curr.innerHTML += "+";
    //         prev.innerHTML = curr.innerHTML;
    //         curr.innerHTML = "";
    //     }
    //     else {
    //     curr.innerHTML += "+";
    //     prev.innerHTML = curr.innerHTML;
        
    //     curr.innerHTML = "";
    //     }

    // }

    // addition.addEventListener("click", writeAddition);


    // function writeSubstraction() {

    //     if (curr.innerHTML != "" && prev.innerHTML != "") {
    //         result ();
    //         curr.innerHTML += "-";
    //         prev.innerHTML = curr.innerHTML;
    //         curr.innerHTML = "";
    //     }
    //     else {
    //     curr.innerHTML += "-";
    //     prev.innerHTML = curr.innerHTML;
        
    //     curr.innerHTML = "";
    //     }
    // }

    // substraction.addEventListener("click", writeSubstraction);

    // function writeMultiplication() {

    //     if (curr.innerHTML != "" && prev.innerHTML != "") {
    //         result ();
    //         curr.innerHTML += "x";
    //         prev.innerHTML = curr.innerHTML;
    //         curr.innerHTML = "";
    //     }
    //     else {
    //     curr.innerHTML += "x";
    //     prev.innerHTML = curr.innerHTML;
        
    //     curr.innerHTML = "";
    //     }
    // }

    // multiplication.addEventListener("click", writeMultiplication);

    // function writeDivision() {

    //     if (curr.innerHTML != "" && prev.innerHTML != "") {
    //         result ();
    //         curr.innerHTML += "/";
    //         prev.innerHTML = curr.innerHTML;
    //         curr.innerHTML = "";
    //     }
    //     else {
    //     curr.innerHTML += "/";
    //     prev.innerHTML = curr.innerHTML;
        
    //     curr.innerHTML = "";
    //     }
    // }

    // division.addEventListener("click", writeOperation);

    
//add operation - if we have both numbers, first call result function and then add operation on result
    function writeOperation(oper) {
        
        if (curr.innerHTML != "" && prev.innerHTML != "") {
            result ();
            curr.innerHTML += oper;
            prev.innerHTML = curr.innerHTML;
            curr.innerHTML = "";
        }
        else {
        curr.innerHTML += oper;
        prev.innerHTML = curr.innerHTML;
        
        curr.innerHTML = "";
        }
    }


    const operation = document.querySelectorAll(".operation");

    operation.forEach(button => {
            button.addEventListener('click', () => {
              writeOperation(button.textContent);
            })
          })

    
//add number    
    function writeNumber(num) {
        curr.innerHTML += num;
    }

    const number = document.querySelectorAll('.char');

    number.forEach(button => {
            button.addEventListener('click', () => {
              writeNumber(button.textContent);
            })
          })




//get result
    
    // function result() {
    //     input.value = eval(input.value);
    // }

    // equally.addEventListener("click", result);

    
// get result on enter key

    // function onEnter(e) {
    // if (e.keyCode === 13) {  
    //   result();
    //     }
    // }


// window.addEventListener("keydown", onEnter);

// get result on enter key
window.addEventListener("keydown", e =>{
    if(e.keyCode === 13){
        result();
    }
})

// delete last char on backspace
window.addEventListener("keydown", e =>{
    if(e.keyCode === 8){
        deleteLastChar();
    }
})

// reset on del key
window.addEventListener("keydown", e => {
    if (e.keyCode === 46) {
        resetFunction();
    }
})

// add chars using keyboard
window.addEventListener("keydown", e =>{
    if((e.keyCode >= 48 && e.keyCode <= 55) || (e.keyCode == 57) || (e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 107 && e.keyCode <= 111) || (e.keyCode >= 187 && e.keyCode <= 191)) {
        curr.innerHTML += e.key;
    }
})

// show * as x
window.addEventListener("keydown", e =>{
    if(e.keyCode == 56 || e.keyCode == 106) {
        curr.innerHTML += "x";
    }
})

// add operation using keyboard - if we have both numbers, first call result function and then add operation on result
window.addEventListener("keydown", e =>{
    if ((e.keyCode == 107 || e.keyCode == 187) || (e.keyCode == 109 || e.keyCode == 189) 
        || (e.keyCode == 56 || e.keyCode == 106) || (e.keyCode == 111 || e.keyCode == 191)) {

        if (curr.innerHTML != "" && prev.innerHTML != "") {
                result ();
                curr.innerHTML += e.key;
                prev.innerHTML = curr.innerHTML;
                curr.innerHTML = "";
            }
            else {
                prev.innerHTML = curr.innerHTML;
                curr.innerHTML = "";
            }
    }

        // if ((e.keyCode == 109 || e.keyCode == 189)) {
        //     if (curr.innerHTML != "" && prev.innerHTML != "") {
        //         result ();
        //         curr.innerHTML += "-";
        //         prev.innerHTML = curr.innerHTML;
        //         curr.innerHTML = "";
        //     }
        //     else {
        //     // curr.innerHTML += "-";
        //     prev.innerHTML = curr.innerHTML;
        //     curr.innerHTML = "";
        //     }
        // }
})


// get result
function result() {
    x = curr.innerHTML;
    xx = parseFloat(x);
    
    y = prev.innerHTML.substring(0,prev.innerHTML.length-1);
    yy = parseFloat(y);

    o = prev.innerHTML.slice(-1);

    // if ((isNaN(xx) == false) && (isNaN(yy) == false)) {

        switch(o) {
            case '+': curr.innerHTML = yy+xx;
                      prev.innerHTML = "";
                      break;
            case '-': curr.innerHTML = yy-xx;
                      prev.innerHTML = "";
                      break;
            case 'x': curr.innerHTML = yy*xx;
                      prev.innerHTML = "";
                      break;
            case '/': curr.innerHTML = yy/xx;
                      prev.innerHTML = "";
                      break;
        }

    // }
}

equally.addEventListener("click", result);


});