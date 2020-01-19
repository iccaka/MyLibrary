$(document).ready(() => {

    hideResponseMessages();
    addEventListeners();

    showIndexPage();

    if (isLoggedIn()) {
        showPostSignInIndexPage();
    } else {
        showIndexPage();
    }

    function hideResponseMessages() {
        $("#errorMessage").hide();
        $("#successMessage").hide();
    }

    function addEventListeners() {
        $("#navigationPageHome").click(showIndexPage);
        $("#navigationPageSignIn").click(showSignInPage);
        $("#navigationPageRegister").click(showRegisterPage);
        $("#navigationPageAbout").click(showAboutPage);
        $("#indexPageSignInButton").click(showSignInPage);
        $("#indexPageRegisterButton").click(showRegisterPage);
        $("#signInPageButton").click(signIn);
        $("#registerPageButton").click(register);
        $("#indexPageAboutButton").click(showAboutPage);
        $("#navigationPagePostSignInHome").click(showPostSignInIndexPage);
        $("#navigationPagePostSignInBooks").click(showPostSignInBooksPage);
        $("#navigationPagePostSignInMyBooks").click(showPostSignInMyBooksPage);
        $("#navigationPagePostSignInMyProfile").click(showPostSignInMyProfilePage);
        $("#navigationPagePostSignInSignOut").click(signOut);
        $("#postSignInIndexPageBooks").click(showPostSignInBooksPage);
        $("#postSignInIndexPageMyBooks").click(showPostSignInMyBooksPage);
        $("#postSignInIndexPageMyProfile").click(showPostSignInMyProfilePage);
    }

    function isLoggedIn() {
        if (Cookies.get("currentUser") === undefined) {
            return false;
        }

        return true;
    }

    function hideAllPreSignInPages() {
        $("#indexPage").hide();
        $("#signInPage").hide();
        $("#registerPage").hide();
        $("#aboutPage").hide();

        $("#preSignInContentPage").hide();
    }

    function hideAllPostSignInPages() {
        $("#postSignInIndexPage").hide();
        $("#postSignInBooksPage").hide();
        $("#postSignInMyBooksPage").hide();
        $("#postSignInBooksPageCreateBookPage").hide();
        $("#postSignInBooksPageEditBookPage").hide();
        $("#postSignInBooksPageViewBookPage").hide();
        $("#postSignInFavouritesPage").hide();
        $("#postSignInMyProfilePage").hide();
        $("#postSignInMyProfilePageViewProfile").hide();
        $("#postSignInMyProfilePageEditProfile").hide();

        $("#postSignInContentPage").hide();
    }

    function hideAllPreSignInNavigationPages() {
        $("#preSignInNavigationPage").hide();

        $("#navigationPageHome").hide();
        $("#navigationPageSignIn").hide();
        $("#navigationPageRegister").hide();
        $("#navigationPageAbout").hide();
    }

    function showAllPreSignInNavigationPages() {
        $("#preSignInNavigationPage").show();

        $("#navigationPageHome").show();
        $("#navigationPageSignIn").show();
        $("#navigationPageRegister").show();
        $("#navigationPageAbout").show();
    }

    function hideAllPostSignInNavigationPages() {
        $("#navigationPagePostSignInHome").hide();
        $("#navigationPagePostSignInBooks").hide();
        $("#navigationPagePostSignInMyBooks").hide();
        $("#navigationPagePostSignInMyProfile").hide();
        $("#navigationPagePostSignInSignOut").hide();

        $("#postSignInNavigationPage").hide();
    }

    function showAllPostSignInNavigationPages() {
        $("#postSignInNavigationPage").show();

        $("#navigationPagePostSignInHome").show();
        $("#navigationPagePostSignInBooks").show();
        $("#navigationPagePostSignInMyBooks").show();
        $("#navigationPagePostSignInMyProfile").show();
        $("#navigationPagePostSignInSignOut").show();
    }

    function showAllPostSignInPages() {
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        showPostSignInIndexPage();
    }

    function showIndexPage() {
        changePageTitle("My Library");

        hideAllPostSignInNavigationPages();
        hideAllPostSignInPages();
        hideAllPreSignInPages();

        $("#preSignInContentPage").show();
        $("#indexPage").show();

        showAllPreSignInNavigationPages();
        $("#navigationPageHome").hide();
    }

    function showSignInPage() {
        changePageTitle("My Library - Sign in");

        hideAllPostSignInNavigationPages();
        hideAllPostSignInPages();
        hideAllPreSignInPages();

        $("#preSignInContentPage").show();
        $("#signInPage").show();

        showAllPreSignInNavigationPages();
        $("#navigationPageSignIn").hide();
    }

    function showRegisterPage() {
        changePageTitle("My Library - Register");

        hideAllPostSignInNavigationPages();
        hideAllPostSignInPages();
        hideAllPreSignInPages();

        $("#preSignInContentPage").show();
        $("#registerPage").show();

        showAllPreSignInNavigationPages();
        $("#navigationPageRegister").hide()
    }

    function showAboutPage() {
        changePageTitle("My Library - About");

        hideAllPostSignInNavigationPages();
        hideAllPostSignInPages();
        hideAllPreSignInPages();

        $("#preSignInContentPage").show();
        $("#aboutPage").show();

        showAllPreSignInNavigationPages();
        $("#navigationPageAbout").hide()
    }

    function showPostSignInIndexPage() {
        changePageTitle("Home");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInIndexPage").show();

        showAllPostSignInNavigationPages();
        $("#navigationPagePostSignInHome").hide()
    }

    function showPostSignInBooksPage() {
        changePageTitle("Books");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInBooksPage").show();

        showAllPostSignInNavigationPages();
        $("#navigationPagePostSignInBooks").hide();

        loadBooksOnBooksPage();
    }

    function showPostSignInMyBooksPage() {
        changePageTitle("My Books");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInMyBooksPage").show();

        showAllPostSignInNavigationPages();
        $("#navigationPagePostSignInMyBooks").hide();
    }

    function showPostSignInMyProfilePage() {
        changePageTitle("My Profile");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInMyProfilePage").show();

        showAllPostSignInNavigationPages();
        $("#navigationPagePostSignInMyProfile").hide();
    }

    function loadBooksOnBooksPage() {

    }

    function changePageTitle(name) {
        $(document).prop("title", name);
    }

    function register() {
        let firstName = $("#registerPageFirstName").val();
        let lastName = $("#registerPageLastName").val();
        let username = $("#registerPageUsername").val();
        let email = $("#registerPageEmail").val();
        let password = $("#registerPagePassword").val();
        let repeatPassword = $("#registerPageRepeatPassword").val();

        if (firstName.length !== 0) {
            if (!validateFirstName(firstName)) {
                showErrorMessage("Invalid first name!", 3000);
                return;
            }
        }
        if (lastName.length !== 0) {
            if (!validateLastName(lastName)) {
                showErrorMessage("Invalid last name!", 3000);
                return;
            }
        }
        if (username.length !== 0) {
            if (!validateUsername(username)) {
                showErrorMessage("Invalid username!", 3000);
                return;
            }
        }

        if (!validatePassword(password)) {
            showErrorMessage("Password should be at least 6 characters", 3000);
            return;
        }

        if (repeatPassword !== password) {
            showErrorMessage("The two passwords don't match.", 3000);
            return;
        }

        auth.createUserWithEmailAndPassword(email, password).catch((error) => {
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 5000);
        }).then((snapshot) => {
            if (snapshot !== undefined) {
                showSuccessMessage("Registration successful.", 3000);
                clearRegisterPageFields();
                clearSignInPageFields();
                Cookies.set("currentUser", auth.currentUser, {expires: 7});
                showPostSignInIndexPage();
            }
        });
    }

    function signIn() {
        let email = $("#signInPageEmail").val();
        let password = $("#signInPagePassword").val();

        if (email.length < 3 || email.length > 16) {
            showErrorMessage("Usernames cannot be smaller than 3 or bigger than 16 characters.", 5000);
            return;
        }
        if (password.length === 0) {
            showErrorMessage("Please enter your password.", 3000);
            return;
        }
        if (password.length < 6) {
            showErrorMessage("Your password has to at least have 6 characters.", 4000);
            return;
        }

        auth.signInWithEmailAndPassword(email, password).catch((error) => {
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 5000);
        }).then((snapshot) => {
            if (snapshot !== undefined) {
                showSuccessMessage("Sign in successful.", 3000);
                clearSignInPageFields();
                clearRegisterPageFields();
                Cookies.set("currentUser", auth.currentUser, {expires: 7});
                showPostSignInIndexPage();
            }
        });
    }

    function signOut() {
        auth.signOut().then(() => {
            Cookies.remove("currentUser");
            showSuccessMessage("Sign out successful.", 3000);
            showIndexPage();
        })
    }

    function showErrorMessage(message, timeInMilliseconds) {
        $("#errorMessage").show().text(message);

        setTimeout(() => {
            $("#errorMessage").fadeOut("fast");
        }, timeInMilliseconds);
    }

    function showSuccessMessage(message, timeInMilliseconds) {
        $("#successMessage").show().text(message);

        setTimeout(() => {
            $("#successMessage").fadeOut("fast");
        }, timeInMilliseconds);
    }

    function clearSignInPageFields() {
        $("#signInPageEmail").val("");
        $("#signInPagePassword").val("");
    }

    function clearRegisterPageFields() {
        $("#registerPageEmail").val("");
        $("#registerPagePassword").val("");
        $("#registerPageRepeatPassword").val("");
    }

    function validateFirstName(firstName) {
        if (firstName.length > 25) {
            return false;
        }

        let re = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
        return re.test(firstName);
    }

    function validateLastName(lastName) {
        if (lastName.length > 25) {
            return false;
        }

        let re = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
        return re.test(lastName);
    }

    function validateUsername(username) {
        let re = /^[a-z0-9_-]{3,16}$/;
        return re.test(username.toLowerCase());
    }

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