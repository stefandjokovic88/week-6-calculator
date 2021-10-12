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
    

    // reset input
    const reset = document.getElementById("reset");

    function resetFunction() {
        input.value = "";
    }
    
    reset.addEventListener("click", resetFunction)


    // delete last character
    const del = document.getElementById("delete");

    function deleteLastChar() {
        let str = input.value;
        str = str.substring(0, str.length-1);
        input.value = str;
    }

    del.addEventListener("click", deleteLastChar);


    // add character in input area on button click
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    const zero = document.getElementById("zero");
    const point = document.getElementById("point");
    const addition = document.getElementById("addition");
    const substraction = document.getElementById("substraction");
    const division = document.getElementById("division");
    const multiplication = document.getElementById("multiplication");
    const equally = document.getElementById("equally");

    function writeOne() {
        input.value += "1";
    }
    
    one.addEventListener("click", writeOne);

    function writeTwo() {
        input.value += "2";
    }
    
    two.addEventListener("click", writeTwo);

    function writeThree() {
        input.value += "3";
    }
    
    three.addEventListener("click", writeThree);

    function writeFour() {
        input.value += "4";
    }
    
    four.addEventListener("click", writeFour);

    function writeFive() {
        input.value += "5";
    }
    
    five.addEventListener("click", writeFive);

    function writeSix() {
        input.value += "6";
    }
    
    six.addEventListener("click", writeSix);

    function writeSeven() {
        input.value += "7";
    }
    
    seven.addEventListener("click", writeSeven);

    function writeEight() {
        input.value += "8";
    }
    
    eight.addEventListener("click", writeEight);

    function writeNine() {
        input.value += "9";
    }
    
    nine.addEventListener("click", writeNine);

    function writeZero() {
        input.value += "0";
    }

    zero.addEventListener("click", writeZero);

    function writeAddition() {
        input.value += "+";
    }

    addition.addEventListener("click", writeAddition);

    function writeSubstraction() {
        input.value += "-";
    }

    substraction.addEventListener("click", writeSubstraction);

    function writeMultiplication() {
        input.value += "*";
    }

    multiplication.addEventListener("click", writeMultiplication);

    function writeDivision() {
        input.value += "/";
    }

    division.addEventListener("click", writeDivision);

    function writePoint() {
        input.value += ".";
    }

    point.addEventListener("click", writePoint);


//get result
    
    function result() {
        input.value = eval(input.value);
    }

    equally.addEventListener("click", result);

    
//get result on enter key

    function onEnter(e) {
    if (e.key === "Enter") {  
      result();
        }
    }

   input.addEventListener("keydown", onEnter);

});