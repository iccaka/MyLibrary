$(document).ready(() => {

    $(".errorMessages").hide();

    $("#navigationPageHome").click(showIndexPage);
    $("#navigationPageSignIn").click(showSignInPage);
    $("#navigationPageRegister").click(showRegisterPage);
    $("#navigationPageAbout").click(showAboutPage);
    $("#indexPageSignInButton").click(showSignInPage);
    $("#indexPageRegisterButton").click(showRegisterPage);
    $("#signInPageButton").click(signIn);
    $("#registerPageButton").click(register);

    if (doesContainCookies()) {
        showSignInPage();
        $("#signInPageUsername").val(Cookies.get("username"));
        $("#signInPagePassword").val(Cookies.get("password"));
    } else {
        showIndexPage();
    }

    function doesContainCookies() {
        if (Cookies.get("username") === undefined || Cookies.get("password") === undefined) {
            return false;
        }

        return true;
    }

    function hideAllPages() {
        $("#indexPage").hide();
        $("#signInPage").hide();
        $("#registerPage").hide();
        $("#aboutPage").hide();
    }

    function showAllNavigationPages() {
        $("#navigationPageHome").show();
        $("#navigationPageSignIn").show();
        $("#navigationPageRegister").show();
        $("#navigationPageAbout").show();
    }

    function showIndexPage() {
        $(document).prop("title", "My Library");

        hideAllPages();
        $("#indexPage").show();

        showAllNavigationPages();
        $("#navigationPageHome").hide();
    }

    function showSignInPage() {
        $(document).prop("title", "My Library - Sign In");

        hideAllPages();
        $("#signInPage").show();

        showAllNavigationPages();
        $("#navigationPageSignIn").hide();
    }

    function showRegisterPage() {
        $(document).prop("title", "My Library - Register");

        hideAllPages();
        $("#registerPage").show();

        showAllNavigationPages();
        $("#navigationPageRegister").hide();
    }

    function showAboutPage() {
        hideAllPages();
        $("#aboutPage").show();

        $(document).prop("title", "My Library - About");

        showAllNavigationPages();
        $("#navigationPageAbout").hide();
    }

    function register() {
        showRegisterPage();

        let firstName = $("#registerPageFirstName").val();
        let lastName = $("#registerPageLastName").val();
        let username = $("#registerPageUsername").val();
        let email = $("#registerPageEmail").val();
        let password = $("#registerPagePassword").val();
        let repeatPassword = $("#registerPageRepeatPassword").val();

        if(!validateFirstName(firstName)){
            showRegisterErrorMessage("Invalid first name!");
            return;
        }
        if(!validateLastName(lastName)){
            showRegisterErrorMessage("Invalid last name!");
            return;
        }
        if(!validateUsername(username)){
            showRegisterErrorMessage("Invalid username!");
            return;
        }
        if(!validateEmail(email)){
            showRegisterErrorMessage("Invalid email!");
            return;
        }
        if(!validatePassword(password)){
            showRegisterErrorMessage("Invalid password! Your password must contain at least one uppercase letter, one lowercase letter and at least one special character");
            return;
        }
        if(repeatPassword !== password){
            showRegisterErrorMessage("The two passwords don't match!");
            return;
        }
    }

    function validateFirstName(firstName){
        if(firstName.length > 25){
            return false;
        }

        let re = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
        return re.test(firstName);
    }

    function validateLastName(lastName){
        if(lastName.length > 25){
            return false;
        }

        let re = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
        return re.test(lastName);
    }

    function validateUsername(username) {
        let re = /^[a-z0-9_-]{3,16}$/;
        return re.test(username.toLowerCase());
    }

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    function validatePassword(password) {
        let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    }

    function showRegisterErrorMessage(message){
        $("#registerPageErrorMessage").show().text(message);

        setTimeout(()=>{
            $("#registerPageErrorMessage").fadeOut("fast");
        }, 2000);
    }

    function signIn() {
        showSignInPage();
    }
});