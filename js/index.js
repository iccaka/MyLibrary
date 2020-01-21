$(document).ready(() => {

    hideResponseMessages();
    addEventListeners();

    function hideResponseMessages() {
        $("#errorMessage").hide();
        $("#successMessage").hide();
    }

    function addEventListeners() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                showPostSignInIndexPage();

                clearRegisterPageFields();
                clearSignInPageFields();
            } else {
                showIndexPage();

                clearMyProfileViewProfilePageText();
                clearMyProfileEditInfoPageText();
                clearMyProfileEditPasswordPageText();
                clearMyProfileEditEmailPageText();
            }
        });

        $(".responseMessages").click(hideResponseMessages);
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
        $("#navigationPagePostSignInMyProfile").click(showPostSignInMyProfilePageViewProfile);
        $("#navigationPagePostSignInFavourites").click(showPostSignInFavouritesPage);
        $("#navigationPagePostSignInSignOut").click(signOut);
        $("#postSignInIndexPageBooks").click(showPostSignInBooksPage);
        $("#postSignInIndexPageMyBooks").click(showPostSignInMyBooksPage);
        $("#postSignInIndexPageMyProfile").click(showPostSignInMyProfilePageViewProfile);
        $("#postSignInMyProfilePageViewProfileEditInfo").click(showPostSignInMyProfileEditPage);
        $("#postSignInMyProfilePageEditProfileFinalEdit").click(editMyProfileInfo);
        $("#postSignInMyProfilePageViewProfileEditEmail").click(showPostSignInMyProfileEditEmail);
        $("#postSignInMyProfilePageEditEmailFinalEdit").click(editMyProfileEmail);
        $("#postSignInMyProfilePageViewProfileEditPassword").click(showPostSignInMyProfileEditPassword);
        $("#postSignInMyProfilePageEditPasswordFinalEdit").click(editMyProfilePassword);
        $(".backToMyProfileViewProfilePageButtons").click(showPostSignInMyProfilePageViewProfile);
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
        $("#postSignInMyProfilePageViewProfile").hide();
        $("#postSignInMyProfilePageEditInfo").hide();
        $("#postSignInMyProfilePageEditEmail").hide();
        $("#postSignInMyProfilePageEditPassword").hide();
        $("#postSignInFavouritesPage").hide();

        $("#postSignInContentPage").hide();
    }

    function hideAllPreSignInNavigationPages() {
        $("#navigationPageHome").hide();
        $("#navigationPageSignIn").hide();
        $("#navigationPageRegister").hide();
        $("#navigationPageAbout").hide();

        $("#preSignInNavigationPage").hide();
    }

    function hideAllPostSignInNavigationPages() {
        $("#navigationPagePostSignInHome").hide();
        $("#navigationPagePostSignInBooks").hide();
        $("#navigationPagePostSignInMyBooks").hide();
        $("#navigationPagePostSignInMyProfile").hide();
        $("#navigationPagePostSignInFavourites").hide();
        $("#navigationPagePostSignInSignOut").hide();

        $("#postSignInNavigationPage").hide();
    }

    function showAllPreSignInNavigationPages() {
        $("#navigationPageHome").show();
        $("#navigationPageSignIn").show();
        $("#navigationPageRegister").show();
        $("#navigationPageAbout").show();

        $("#preSignInNavigationPage").show();
    }

    function showAllPostSignInNavigationPages() {
        $("#navigationPagePostSignInHome").show();
        $("#navigationPagePostSignInBooks").show();
        $("#navigationPagePostSignInMyBooks").show();
        $("#navigationPagePostSignInMyProfile").show();
        $("#navigationPagePostSignInFavourites").show();
        $("#navigationPagePostSignInSignOut").show();

        $("#postSignInNavigationPage").show();
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
        $("#postSignInBooksPage").show().empty();

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
        $("#postSignInMyBooksPageList").show().empty();
        $("#postSignInMyBooksPage").show();
        $("#postSignInMyBooksPageCreateBookButton").show();

        showAllPostSignInNavigationPages();
        $("#navigationPagePostSignInMyBooks").hide();

        loadBooksOnMyBooksPage();
    }

    function showPostSignInMyProfilePageViewProfile() {
        changePageTitle("My Profile");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInMyProfilePageViewProfile").show();

        showAllPostSignInNavigationPages();
        $("#navigationPagePostSignInMyProfile").hide();

        loadProfileOnMyProfileViewPage();
    }

    function showPostSignInMyProfileEditPage() {
        changePageTitle("My Profile - Edit information");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInMyProfilePageEditInfo").show();

        showAllPostSignInNavigationPages();

        loadProfileOnMyProfileEditPage();
    }

    function showPostSignInMyProfileEditEmail(){
        changePageTitle("My Profile - Edit email");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInMyProfilePageEditEmail").show();

        showAllPostSignInNavigationPages();

        loadProfileOnMyProfileEditEmailPage();
    }

    function showPostSignInMyProfileEditPassword(){
        changePageTitle("My Profile - Edit password");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInMyProfilePageEditPassword").show();

        showAllPostSignInNavigationPages();
    }

    function showPostSignInFavouritesPage() {
        changePageTitle("Favourites");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInFavouritesPage").show();

        showAllPostSignInNavigationPages();
        $("#navigationPagePostSignInFavourites").hide();

        loadBooksOnFavouritesPage();
    }

    function loadBooksOnBooksPage() {
        db.collection("books").get().then((snapshot) => {
            snapshot.docs.forEach((book) => {
                let bookData = book.data();

                let element = `
                    <li>Name: ${bookData.name}</li>                    
                    <li>ISBN: ${bookData.isbn}</li>                    
                    <li>Year: ${bookData.year}</li>                    
                    <li>Description: ${bookData.description}</li>                    
                    <li>Image: ${bookData.coverImage}</li>
                    <hr>                    
                `;

                $("#postSignInBooksPage").append(element);
            })
        });
    }

    function loadBooksOnMyBooksPage() {
        db.collection("books").get().then((snapshot) => {
            snapshot.docs.forEach((book) => {
                let bookData = book.data();

                if (bookData.email === auth.currentUser.email) {
                    let element = `
                    <li>Name: ${bookData.name}</li>                    
                    <li>ISBN: ${bookData.isbn}</li>                    
                    <li>Year: ${bookData.year}</li>                    
                    <li>Description: ${bookData.description}</li>                    
                    <li>Image: ${bookData.coverImage}</li>
                    <hr>                    
                `;

                    $("#postSignInMyBooksPageList").append(element);
                }
            })
        });
    }

    function loadProfileOnMyProfileViewPage() {
        clearMyProfileViewProfilePageText();
        let userUid = auth.getUid();
        let userEmail = auth.currentUser.email;

        db.collection("users").doc(userUid).get().then((snapshot)=>{
            if(snapshot.data() !== undefined){
                let snapshotData = snapshot.data();

                $("#postSignInMyProfilePageViewProfileFirstName").text(snapshotData.firstName);
                $("#postSignInMyProfilePageViewProfileLastName").text(snapshotData.lastName);
                $("#postSignInMyProfilePageViewProfileUsername").text(snapshotData.username);
                $("#postSignInMyProfilePageViewProfileEmail").text(userEmail);
            }
        });
    }

    function loadProfileOnMyProfileEditPage() {
        clearMyProfileEditInfoPageText();
        let userUid = auth.getUid();

        db.collection("users").doc(userUid).get().then((snapshot)=>{
            if(snapshot.data() !== undefined){
                let snapshotData = snapshot.data();

                $("#postSignInMyProfilePageEditProfileFirstName").val(snapshotData.firstName);
                $("#postSignInMyProfilePageEditProfileLastName").val(snapshotData.lastName);
                $("#postSignInMyProfilePageEditProfileUsername").val(snapshotData.username);
            }
        });
    }

    function loadProfileOnMyProfileEditEmailPage(){
        clearMyProfileEditEmailPageText();

        $("#postSignInMyProfilePageEditProfileEmail").val(auth.currentUser.email);
    }

    function loadBooksOnFavouritesPage() {

    }

    function editMyProfileInfo() {
        let userId = auth.currentUser.uid;
        let firstName = $("#postSignInMyProfilePageEditProfileFirstName").val();
        let lastName = $("#postSignInMyProfilePageEditProfileLastName").val();
        let username = $("#postSignInMyProfilePageEditProfileUsername").val();

        if(firstName.length !== 0){
            if(!validateName(firstName)){
                showErrorMessage("Invalid first name!", 3000);
                return;
            }
        }

        if(lastName.length !== 0){
            if(!validateName(lastName)){
                showErrorMessage("Invalid last name!", 3000);
                return;
            }
        }

        if(username.length !== 0){
            if(!validateUsername(username)){
                showErrorMessage("Invalid username!", 3000);
                return;
            }
        }

        db.collection("users").doc(userId).set({
            firstName: firstName,
            lastName: lastName,
            username: username
        }, {merge: true}).catch((error)=>{
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 5000);
        }).then(()=>{
            showSuccessMessage("Profile edited successfully", 3000);
            showPostSignInMyProfilePageViewProfile();
        });
    }

    function editMyProfileEmail(){
        let email = $("#postSignInMyProfilePageEditProfileEmail").val();
        let currentUserEmail = auth.currentUser.email;
        let password = $("#postSignInMyProfilePageEditProfilePassword").val();

        if(email === currentUserEmail){
            showErrorMessage("Your new email has to be different then your current one.", 4000);
            return;
        }

        if (password.length === 0) {
            showErrorMessage("In order to edit your email, you must enter your password.", 4000);
            return;
        }

        if (!validatePassword(password)) {
            showErrorMessage("Your password has to at least have 6 characters.", 3000);
            return;
        }

        auth.signInWithEmailAndPassword(currentUserEmail, password).catch((error)=>{
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 3000);
        }).then((snapshot) => {
            snapshot.user.updateEmail(email).catch((error)=>{
                let errorMessage = error.message;
                showErrorMessage(errorMessage, 5000);
            }).then(()=>{
                clearMyProfileEditEmailPageText();
                showSuccessMessage("Email updated successfully.", 3000);
                showPostSignInMyProfilePageViewProfile();
            });
        });
    }

    function editMyProfilePassword(){
        let currentUserEmail = auth.currentUser.email;
        let password = $("#postSignInMyProfilePageEditProfilePasswordPassword").val();
        let newPassword = $("#postSignInMyProfilePageEditProfileNewPassword").val();
        let repeatNewPassword = $("#postSignInMyProfilePageEditProfileRepeatNewPassword").val();

        if (password.length === 0) {
            showErrorMessage("In order to edit your password, you must enter your current password.", 5000);
            return;
        }

        if (!validatePassword(password)) {
            showErrorMessage("Your current password is at least 6 characters long.", 4000);
            return;
        }

        if (newPassword.length === 0) {
            showErrorMessage("Please enter your new password.", 3000);
            return;
        }

        if (!validatePassword(newPassword)) {
            showErrorMessage("Your new password has to at least have 6 characters.", 4000);
            return;
        }

        if(newPassword === password){
            showErrorMessage("Your new password has to be different than your current one.", 4000);
            return;
        }

        if(repeatNewPassword.length === 0){
            showErrorMessage("Please repeat your new password.", 3000);
            return;
        }

        if(newPassword !== repeatNewPassword){
            showErrorMessage("The two passwords don't match.", 3000);
            return;
        }

        auth.signInWithEmailAndPassword(currentUserEmail, password).catch((error)=>{
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 3000);
        }).then((snapshot) => {
            if(snapshot !== undefined){
                snapshot.user.updatePassword(newPassword).catch((error)=>{
                    let errorMessage = error.message;
                    showErrorMessage(errorMessage, 5000);
                }).then(()=>{
                    clearMyProfileEditPasswordPageText();
                    showSuccessMessage("Password updated successfully.", 3000);
                    showPostSignInMyProfilePageViewProfile();
                });
            }
        });
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
            if (!validateName(firstName)) {
                showErrorMessage("Invalid first name!", 3000);
                return;
            }
        }
        if (lastName.length !== 0) {
            if (!validateName(lastName)) {
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
            }
        });
    }

    function signIn() {
        let email = $("#signInPageEmail").val();
        let password = $("#signInPagePassword").val();

        if (password.length === 0) {
            showErrorMessage("Please enter your password.", 3000);
            return;
        }

        if (!validatePassword(password)) {
            showErrorMessage("Your password has to at least have 6 characters.", 4000);
            return;
        }

        auth.signInWithEmailAndPassword(email, password).catch((error) => {
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 5000);
        }).then((snapshot) => {
            if (snapshot !== undefined) {
                showSuccessMessage("Sign in successful.", 3000);
            }
        });
    }

    function signOut() {
        auth.signOut().then(() => {
            showSuccessMessage("Sign out successful.", 3000);
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

    function clearMyProfileViewProfilePageText() {
        $("#postSignInMyProfilePageViewProfileFirstName").text("");
        $("#postSignInMyProfilePageViewProfileLastName").text("");
        $("#postSignInMyProfilePageViewProfileUsername").text("");
        $("#postSignInMyProfilePageViewProfileEmail").text("");
    }

    function clearMyProfileEditInfoPageText() {
        $("#postSignInMyProfilePageEditProfileFirstName").val("");
        $("#postSignInMyProfilePageEditProfileLastName").val("");
        $("#postSignInMyProfilePageEditProfileUsername").val("");
    }

    function clearMyProfileEditEmailPageText(){
        $("#postSignInMyProfilePageEditProfileEmail").val("");
        $("#postSignInMyProfilePageEditProfilePassword").val("");
    }

    function clearMyProfileEditPasswordPageText(){
        $("#postSignInMyProfilePageEditProfilePasswordPassword").val("");
        $("#postSignInMyProfilePageEditProfileNewPassword").val("");
        $("#postSignInMyProfilePageEditProfileRepeatNewPassword").val("");
    }

    function validateName(name){
        if (name.length > 25) {
            return false;
        }

        let re = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
        return re.test(name);
    }
    
    function validateUsername(username) {
        let re = /^[a-z0-9_-]{3,16}$/;
        return re.test(username.toLowerCase());
    }

    function validatePassword(password) {
        return password.length >= 6;
    }
});