window.onload = function () {

    var logChecker = true;
    var myInterval = null;

    function myLog(eventlog) {
        if (logChecker === true) {
            console.log(eventlog);
        }
        else {

        }


    }

    //formularvalidierung

    var signinform = document.querySelector("#signinform");
    var signupform = document.querySelector("#signupform");
    var signupinputlabel = document.querySelectorAll("#signupform ul li label:not(.logintitles-label)");
    var forminput = document.querySelectorAll("#signupform input");
    var formsubmit = document.querySelector("#signupsubmit");
    var notallowedinname = "0123456789!?+.,<>#*";
    var allowedinnumber = "1234567890#+ -";
    var validuser = "User";
    var validpassword = "password";
    var notsubmit = document.querySelectorAll("#signupform .firstcheck");

    var firstcheck = document.querySelectorAll("#signupform .firstcheck");

    var checksignup = function (event) {

        for (var i = 0; i < forminput.length; i++) {
            var checkinput = function (type, input) {
                if (type === "text") {
                    var inputval = input.value.trim();

                    var newinput = inputval.split("");

                    if (input.getAttribute("id") === "forename" || input.getAttribute("id") === "surname") {

                        for (var j = 0; j < newinput.length; j++) {
                            if (notallowedinname.indexOf(newinput[j]) === -1) {

                                signupinputlabel[i].setAttribute("class", "trueinput");


                            }
                            else {

                                signupinputlabel[i].setAttribute("class", "wronginput");

                            }


                        }
                    } else if (input.getAttribute("id") === "telnumber") {
                        for (var k = 0; k < newinput.length; k++) {
                            if (allowedinnumber.indexOf(newinput[k]) >= 0) {

                                signupinputlabel[i].setAttribute("class", "trueinput");


                            }
                            else {
                                signupinputlabel[i].setAttribute("class", "wronginput");
                            }
                        }

                    } else if (input.getAttribute("id") === "email") {

                        if (inputval.indexOf('@') > 1) {


                            signupinputlabel[i].setAttribute("class", "trueinput");

                        }
                    }
                }
            };


            signupinputlabel[i].setAttribute("class", "wronginput");//alle inputs auf error

            if (forminput[0].checked === true || forminput[1].checked === true) {
                signupinputlabel[0].setAttribute("class", "trueinput");

                signupinputlabel[1].setAttribute("class", "trueinput")
            }
            else {

            }


            var typein = forminput[i].getAttribute("type");

            //console.log(typein);
            var formin = forminput[i];
            //console.log(formin);
            checkinput(typein, formin);


        }
        event.preventDefault();
        var endcounter = 0;

        for (var l = 0; l < notsubmit.length; l++) {
            console.log(notsubmit[l].className);
            if (notsubmit[l].className === "trueinput") {
                endcounter++;
                console.log(endcounter);
                if (endcounter === 6) {
                    signupform.submit();
                }
            }

        }

        event.preventDefault();

    };
    signupform.addEventListener("submit", checksignup);


    //slider
    //slider-navigation//
    var counter = 0;
    var slidernavigator = function (event) {
        var getnewcounter = event.target.dataset;


        counter = getnewcounter.index;
        clearInterval(myInterval);
        start();


    };


    //slider img - remove css slider img
    var removeCssSlider = document.querySelector(".slider-elements");
    removeCssSlider.setAttribute("class", "JSslider-elements");
    var JSsliderElements = document.querySelectorAll("#js-slider");
    var JSsliderElementsimg = document.querySelectorAll("#js-slider img");


    //replace css slider text - set js id
    var removeCssSliderText = document.querySelector(".slider-elements-text");
    removeCssSliderText.setAttribute("class", "JSslider-elements-text");
    var JSsliderElementstext = document.querySelectorAll(".JSslider-elements-text #JSslider-text");


    //get circle classes,remove css class and add js circle class
    var removeCssCircleClasses = document.querySelectorAll(".slider-circles li i");


    var sliderCreator = function (event) {


        for (var i = 0; i <= 4; i++) {
            //set picture classes
            JSsliderElements[i].setAttribute("class", "visiblebyclick");
            JSsliderElementsimg[i].setAttribute("class", "JSslider-elements");
        }
        for (var j = 0; j <= 3; j++) {
            //set text classes
            JSsliderElementstext[j].setAttribute("class", "visiblebyclick");
            //css circles remover / weil die font awesome classen nicht entfernt werden dürfen
            var tmp = removeCssCircleClasses[j].getAttribute("class");
            tmp = tmp.split(" ");
            if (tmp.length === 3) {
                tmp.pop();
                tmp = tmp.toString();
                tmp = tmp.replace(",", " ");
                removeCssCircleClasses[j].setAttribute("class", tmp + " js-circle-not-active")
            }
            tmp = tmp.toString();
            tmp = tmp.replace(",", " ");
            removeCssCircleClasses[j].addEventListener("click", slidernavigator)
        }
        //set active class by counter
        JSsliderElements[counter].setAttribute("class", "JSslider-elements");
        JSsliderElementstext[counter].setAttribute("class", "JSslider-text");
        removeCssCircleClasses[counter].setAttribute("class", tmp + " js-circle-active");
        // check if visible - if not - set class
        if (JSsliderElements[counter].className === "visiblebyclick" || JSsliderElementstext[counter] === "visiblebyclick" || removeCssCircleClasses[counter].className === "js-circle-not-active") {
            JSsliderElements[counter].setAttribute("class", "Jsactiveslider");
            JSsliderElementstext[counter].setAttribute("class", "JSslider-text");
        }

        //counter ++ for 4 slides
        counter++;
        if (counter >= 4) {
            counter = 0;
        }

    };
    var start = function () {
        myInterval = setInterval(sliderCreator, 10000);
        sliderCreator();
    };
    start();
    //slider ende

    //dropdown
    search = document.querySelector("#searchnav");
    loginLi = document.querySelector("#loginnav");
    var DropdownAnimator = function (event) {

        var searchform = document.querySelector("#searchform");
        var logindropdown = document.querySelector("#loginformdropdown");
        if (event.target.parentElement.parentElement.className === "searchnav navico") {
            searchform.setAttribute("class", "dropdown");
            logindropdown.setAttribute("class", "visiblebyclick");
            search.setAttribute("class", "searchnav");
            loginLi.setAttribute("class", "signupnav navico");
        }
        else if (event.target.parentElement.parentElement.className === "searchnav") {
            searchform.setAttribute("class", "visiblebyclick");
            search.setAttribute("class", "searchnav navico");
            logindropdown.setAttribute("class", "visiblebyclick");
            loginLi.setAttribute("class", "signupnav navico");
        }
        else if (event.target.parentElement.parentElement.className === "signupnav navico") {
            logindropdown.setAttribute("class", "Jslogin");
            searchform.setAttribute("class", "visiblebyclick");
            loginLi.setAttribute("class", "signupnav");
            search.setAttribute("class", "searchnav navico");
        }
        else if (event.target.parentElement.parentElement.className === "signupnav") {
            logindropdown.setAttribute("class", "visiblebyclick");
            loginLi.setAttribute("class", "signupnav navico");
            searchform.setAttribute("class", "visiblebyclick");
            search.setAttribute("class", "searchnav navico");
        }


    };


    search.addEventListener("click", DropdownAnimator);
    loginLi.addEventListener("click", DropdownAnimator);

};





