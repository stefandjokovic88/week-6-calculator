document.addEventListener("DOMContentLoaded", () => {

// change theme
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
        // circleOne.classList.add("circle1-hover");
    }

    function themeTwo() {
        body.classList.add("theme-2");
        body.classList.remove("theme-1");
        body.classList.remove("theme-3");
        circleTwo.style.background = "#C85402";
        circleOne.style.background = "#D2CDCD"
        circleThree.style.background = "#D2CDCD";
        // circleTwo.classList.toggle("circle2-hover");

        // circleTwo.addEventListener("mouseover", mOver, false);
        // circleTwo.addEventListener("mouseout", mOut, false);

        // function mOver() {
        //     circleTwo.style.background = "#FF8A38";
        //     circleTwo.style.cursor = "pointer";
        // }
    
        // function mOut() {
        //     circleTwo.style.background = "#C85402";
        // }
    }

    // function mOver() {
    //     circleTwo.setAttribute("style", "background:#FF8A38");
    // }

    // function mOut() {
    //     circleTwo.setAttribute("style", "background:#C85402");
    // }

    function themeThree() {
        body.classList.add("theme-3");
        body.classList.remove("theme-1");
        body.classList.remove("theme-2");
        circleThree.style.background = "#00DED0";
        circleOne.style.background = "#1E0936";
        circleTwo.style.background = "#1E0936";
        // circleThree.classList.toggle("circle3-hover");

        // circleThree.addEventListener("mouseover", mOver, false);
        // circleThree.addEventListener("mouseout", mOut, false);

        // function mOver() {
        //     circleThree.style.background = "#93FFF8";
        //     circleThree.style.cursor = "pointer";
        //     circleTwo.style.background = "#1E0936";
        // }
    
        // function mOut() {
        //     circleThree.style.background = "#00DED0";
        // }
    }


    optionOne.addEventListener("click", themeOne);
    optionTwo.addEventListener("click", themeTwo);
    optionThree.addEventListener("click", themeThree);
    circleOne.addEventListener("click", themeOne);
    circleTwo.addEventListener("click", themeTwo);
    circleThree.addEventListener("click", themeThree);

    // circleTwo.addEventListener("mouseover", mOver, false);
    // circleTwo.addEventListener("mouseout", mOut, false);
});