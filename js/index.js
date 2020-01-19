$(document).ready(() => {

    hideResponseMessages();
    addEventListeners();

    if (doesContainCookies()) {
        showSignInPage();
        $("#signInPageEmail").val(Cookies.get("username"));
        $("#signInPagePassword").val(Cookies.get("password"));
    } else {
        showIndexPage();
    }

    function hideResponseMessages(){
        $(".errorMessages").hide();
        $(".successMessages").hide();
    }

    function addEventListeners(){
        $("#navigationPageHome").click(showIndexPage);
        $("#navigationPageSignIn").click(showSignInPage);
        $("#navigationPageRegister").click(showRegisterPage);
        $("#navigationPageAbout").click(showAboutPage);
        $("#indexPageSignInButton").click(showSignInPage);
        $("#indexPageRegisterButton").click(showRegisterPage);
        $("#signInPageButton").click(signIn);
        $("#registerPageButton").click(register);
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
        changePageTitle("My Library");

        hideAllPages();
        $("#indexPage").show();

        showAllNavigationPages();
        $("#navigationPageHome").hide();
    }

    function showSignInPage() {
        changePageTitle("My Library - Sign In");

        hideAllPages();
        $("#signInPage").show();

        showAllNavigationPages();
        $("#navigationPageSignIn").hide();
    }

    function showRegisterPage() {
        changePageTitle("My Library - Register");

        hideAllPages();
        $("#registerPage").show();

        showAllNavigationPages();
        $("#navigationPageRegister").hide();
    }

    function showAboutPage() {
        changePageTitle("My Library - About");

        hideAllPages();
        $("#aboutPage").show();

        showAllNavigationPages();
        $("#navigationPageAbout").hide();
    }

    function changePageTitle(name){
        $(document).prop("title", name);
    }

    function register() {
        showRegisterPage();

        // let firstName = $("#registerPageFirstName").val();
        // let lastName = $("#registerPageLastName").val();
        // let username = $("#registerPageUsername").val();

        // if(!validateFirstName(firstName)){
        //     showRegisterErrorMessage("Invalid first name!", 2000);
        //     return;
        // }
        // if(!validateLastName(lastName)){
        //     showRegisterErrorMessage("Invalid last name!", 2000);
        //     return;
        // }
        // if(!validateUsername(username)){
        //     showRegisterErrorMessage("Invalid username!", 2000);
        //     return;
        // }
        // if(!validatePassword(password)){
        //     showRegisterErrorMessage("Password should be at least 6 characters", 5000);
        //     return;
        // }

        // if(password.length === 0){
        //     showRegisterErrorMessage("The password must be 6 characters long or more.", 3000)
        // }

        // $.ajax({
        //     url: firebaseConfig.databaseURL + "/users/" + username + ".json",
        //     type: "PUT",
        //     data: "{\n" +
        //         "      \"firstName\" : \"" + firstName + "\",\n" +
        //         "      \"lastName\" : \"" + lastName + "\",\n" +
        //         "      \"username\" : \"" + username + "\",\n" +
        //         "      \"email\" : \"" + email + "\",\n" +
        //         "      \"password\" : \"" + password + "\"\n" +
        //         "}",
        //     success: ()=>{
        //         showRegisterSuccessMessage("You've been successfully registered!", 3000);
        //     }
        // });

        let email = $("#registerPageEmail").val();
        let password = $("#registerPagePassword").val();
        let repeatPassword = $("#registerPageRepeatPassword").val();

        if(!validatePassword(password)){
            showRegisterErrorMessage("Password should be at least 6 characters", 3000);
            return;
        }

        if(repeatPassword !== password){
            showRegisterErrorMessage("The two passwords don't match.", 2000);
            return;
        }

        auth.createUserWithEmailAndPassword(email, password).catch((error)=>{
            let errorMessage = error.message;

            showRegisterErrorMessage(errorMessage, 5000);
        }).then((snapshot)=>{
            if(snapshot !== undefined){
                showRegisterSuccessMessage("Registration successful.", 3000);

                clearRegisterPageFields();
            }
        });
    }

    function showRegisterErrorMessage(message, timeInMilliseconds){
        $("#registerPageErrorMessage").show().text(message);

        setTimeout(()=>{
            $("#registerPageErrorMessage").fadeOut("fast");
        }, timeInMilliseconds);
    }

    function showRegisterSuccessMessage(message, timeInMilliseconds){
        $("#registerPageSuccessMessage").show().text(message);

        setTimeout(()=>{
            $("#registerPageSuccessMessage").fadeOut("fast");
        }, timeInMilliseconds);
    }

    function signIn() {
        showSignInPage();

        let username = $("#signInPageEmail").val();
        let password = $("#signInPagePassword").val();

        if(username.length < 3 || username.length > 16){
            showSignInErrorMessage("Usernames cannot be smaller than 3 or bigger than 16 characters.", 4000);
            return;
        }
        if(password.length === 0){
            showSignInErrorMessage("Please enter your password.", 2000);
            return;
        }
        if(password.length < 8){
            showSignInErrorMessage("Your password has to at least have 8 characters.", 3000);
            return;
        }

        // TODO sign the user in
    }

    function showSignInErrorMessage(message, timeInMilliseconds){
        $("#signInPageErrorMessage").show().text(message);

        setTimeout(()=>{
            $("#signInPageErrorMessage").fadeOut("fast");
        }, timeInMilliseconds);
    }

    function clearSignInPageFields(){
        $("#signInPageEmail").val("");
        $("#signInPagePassword").val("");
    }

    function clearRegisterPageFields(){
        $("#registerPageEmail").val("");
        $("#registerPagePassword").val("");
        $("#registerPageRepeatPassword").val("");
    }

    // function validateFirstName(firstName){
    //     if(firstName.length > 25){
    //         return false;
    //     }
    //
    //     let re = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
    //     return re.test(firstName);
    // }
    //
    // function validateLastName(lastName){
    //     if(lastName.length > 25){
    //         return false;
    //     }
    //
    //     let re = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
    //     return re.test(lastName);
    // }
    //
    // function validateUsername(username) {
    //     let re = /^[a-z0-9_-]{3,16}$/;
    //     return re.test(username.toLowerCase());
    // }
    //
    // function validateEmail(email) {
    //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(email.toLowerCase());
    // }

    function validatePassword(password) {
        // let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // return re.test(password);

        return password.length >= 6;
    }
});