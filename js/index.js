$(document).ready(() => {

    let isOnBooksPage = false;
    let isOnMyBooksPage = false;

    hideResponseMessages();
    addEventListeners();

    function hideResponseMessages() {
        $("#errorMessage").hide();
        $("#successMessage").hide();
        $("#infoMessage").hide();
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
                clearMyBookCreateBookPageText();
                clearBookViewBookPageText();
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
        $("#postSignInIndexPageFavourites").click(showPostSignInFavouritesPage);
        $("#navigationPagePostSignInFavourites").click(showPostSignInFavouritesPage);
        $("#navigationPagePostSignInSignOut").click(signOut);
        $("#postSignInIndexPageBooks").click(showPostSignInBooksPage);
        $("#postSignInIndexPageMyBooks").click(showPostSignInMyBooksPage);
        $("#postSignInMyBooksPageCreateBookButton").click(showCreateBookPage);
        $("#postSignInBooksPageCreateBookButtonFinalCreate").click(createBook);
        $("#postSignInIndexPageMyProfile").click(showPostSignInMyProfilePageViewProfile);
        $("#postSignInMyProfilePageViewProfileEditInfo").click(showPostSignInMyProfileEditPage);
        $("#postSignInMyProfilePageEditProfileFinalEdit").click(editMyProfileInfo);
        $("#postSignInMyProfilePageViewProfileEditEmail").click(showPostSignInMyProfileEditEmail);
        $("#postSignInMyProfilePageEditEmailFinalEdit").click(editMyProfileEmail);
        $("#postSignInMyProfilePageViewProfileEditPassword").click(showPostSignInMyProfileEditPassword);
        $("#postSignInMyProfilePageEditPasswordFinalEdit").click(editMyProfilePassword);
        $(".backToMyProfileViewProfilePageButtons").click(showPostSignInMyProfilePageViewProfile);
        $(".backToMyBooksViewProfilePageButtons").click(showPostSignInMyBooksPage);
        $("#backToAnyOfTheTwoBookPages").click(showBooksOrMyBooksPage);
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
        isOnBooksPage = true;
        isOnMyBooksPage = false;

        changePageTitle("Books");

        clearBookViewBookPageText();

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
        isOnBooksPage = false;
        isOnMyBooksPage = true;

        changePageTitle("My Books");

        clearBookViewBookPageText();

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

    function showBooksOrMyBooksPage(){
        clearBookViewBookPageText();

        if(isOnBooksPage){
            showPostSignInBooksPage();
        }
        else {
            showPostSignInMyBooksPage();
        }
    }

    function showPostSignInBooksViewBook(){
        changePageTitle("Book");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInBooksPageViewBookPage").show();

        if(isOnBooksPage){
            $("#backToAnyOfTheTwoBookPages").text("Back to books page");
        }
        else {
            $("#backToAnyOfTheTwoBookPages").text("Back to my books page");
        }

        showAllPostSignInNavigationPages();
    }

    function showCreateBookPage() {
        changePageTitle("My books - Create book");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInBooksPageCreateBookPage").show();

        showAllPostSignInNavigationPages();
    }

    function showEditBookPage(){
        changePageTitle("My books - Edit book");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInBooksPageEditBookPage").show();

        showAllPostSignInNavigationPages();
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

    function showPostSignInMyProfileEditEmail() {
        changePageTitle("My Profile - Edit email");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInMyProfilePageEditEmail").show();

        showAllPostSignInNavigationPages();

        loadProfileOnMyProfileEditEmailPage();
    }

    function showPostSignInMyProfileEditPassword() {
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
        let userUid = auth.getUid();
        let hasMyBooks = false;

        unbindBookCrudButtons();

        db.collection("books").get().then((snapshot) => {
            if(snapshot.length !== 0){
                snapshot.docs.forEach((book) => {
                    let bookData = book.data();

                    if(bookData.creator === userUid){
                        hasMyBooks = true;

                        let element = `
                            <h3>${bookData.name}</h3>
                            <u class="underlinedText viewBookText" name="${book.id}">view</u> | <u class="underlinedText deleteBookText" name="${book.id}">delete</u>
                            <hr>
                        `;

                        $("#postSignInBooksPage").append(element);
                    }
                    else {
                        let element = `
                            <h3>${bookData.name}</h3>
                            <u class="underlinedText viewBookText" name="${book.id}">view</u>
                            <hr>
                        `;

                        $("#postSignInBooksPage").append(element);
                    }
                });

                $(".viewBookText").click((event)=>{
                    let nameAttr = $(event.target).attr("name");
                    showPostSignInBooksViewBook();
                    loadBookOnViewBookPage(nameAttr)
                });

                if(hasMyBooks){
                    $(".deleteBookText").click((event)=>{
                        let nameAttr = $(event.target).attr("name");
                        deleteBook(nameAttr);
                    });
                }
            }
        });
    }

    function loadBooksOnMyBooksPage() {
        let userUid = auth.getUid();
        let hasMyBooks = false;

        unbindBookCrudButtons();

        db.collection("books").where("creator", "==", userUid).get().then((snapshot) => {
            if(snapshot.length !== 0){
                hasMyBooks = true;

                snapshot.docs.forEach((book) => {
                    let bookData = book.data();

                    let element = `
                        <h3>${bookData.name}</h3>
                        <u class="underlinedText viewBookText" name="${book.id}">view</u> | <u class="underlinedText deleteBookText" name="${book.id}">delete</u>
                        <hr>
                    `;

                    $("#postSignInMyBooksPageList").append(element);
                });

                $(".viewBookText").click((event)=>{
                    let nameAttr = $(event.target).attr("name");
                    showPostSignInBooksViewBook();
                    loadBookOnViewBookPage(nameAttr)
                });

                $(".deleteBookText").click((event)=>{
                    let nameAttr = $(event.target).attr("name");
                    deleteBook(nameAttr);
                });
            }
        });
    }

    function loadBookOnViewBookPage(nameAttr){
        let userUid = auth.getUid();

        $("#postSignInBooksPageViewBookEditBook").unbind();
        $("#postSignInBooksPageViewBookEditBook").hide();
        $("#postSignInBooksPageViewBookEditBook").attr("name", "");

        db.collection("books").doc(nameAttr).get().then((snapshot)=>{
            if(snapshot !== undefined){
                let bookData = snapshot.data();

                changePageTitle(bookData.name);

                if(userUid === bookData.creator){
                    $("#postSignInBooksPageViewBookEditBook").show();
                    $("#postSignInBooksPageViewBookEditBook").attr("name", nameAttr);
                }

                $("#postSignInBooksPageViewBookPageName").text(bookData.name);
                $("#postSignInBooksPageViewBookPageISBN").text(bookData.isbn);
                $("#postSignInBooksPageViewBookPageYear").text(bookData.year);
                $("#postSignInBooksPageViewBookPageDescription").text(bookData.description);

                $("#postSignInBooksPageViewBookEditBook").click((event)=>{
                    let name = $(event.target).attr("name");
                    showEditBookPage();
                    loadBookOnEditBookPage(name, bookData.name, bookData.isbn, bookData.year, bookData.description);
                });
            }
        });
    }

    function loadBookOnEditBookPage(nameAttr, bookName, bookISBN, bookYear, bookDescription){
        $(".backToMyBooksViewProfilePageButtons").unbind("click");
        $(".backToMyBooksViewProfilePageButtons").text("Back to book");
        $(".backToMyBooksViewProfilePageButtons").click(()=>{
            showPostSignInBooksViewBook();
            loadBookOnViewBookPage(nameAttr);
        });

        $("#postSignInBooksPageEditBookButtonFinalEdit").unbind("click");
        $("#postSignInBooksPageEditBookButtonFinalEdit").click(()=>{
            editBook(nameAttr);
        });

        $("#postSignInBooksPageEditBookPageName").val(bookName);
        $("#postSignInBooksPageEditBookPageISBN").val(bookISBN);
        $("#postSignInBooksPageEditBookPageYear").val(bookYear);
        $("#postSignInBooksPageEditBookPageDescription").val(bookDescription);
    }

    function loadProfileOnMyProfileViewPage() {
        clearMyProfileViewProfilePageText();
        let userUid = auth.getUid();
        let userEmail = auth.currentUser.email;
        $("#postSignInMyProfilePageViewProfileEmail").text(userEmail);

        db.collection("users").doc(userUid).get().then((snapshot) => {
            if (snapshot.data() !== undefined) {
                let snapshotData = snapshot.data();

                $("#postSignInMyProfilePageViewProfileFirstName").text(snapshotData.firstName);
                $("#postSignInMyProfilePageViewProfileLastName").text(snapshotData.lastName);
                $("#postSignInMyProfilePageViewProfileUsername").text(snapshotData.username);
            }
        });
    }

    function loadProfileOnMyProfileEditPage() {
        clearMyProfileEditInfoPageText();
        let userUid = auth.getUid();

        db.collection("users").doc(userUid).get().then((snapshot) => {
            if (snapshot.data() !== undefined) {
                let snapshotData = snapshot.data();

                $("#postSignInMyProfilePageEditProfileFirstName").val(snapshotData.firstName);
                $("#postSignInMyProfilePageEditProfileLastName").val(snapshotData.lastName);
                $("#postSignInMyProfilePageEditProfileUsername").val(snapshotData.username);
            }
        });
    }

    function loadProfileOnMyProfileEditEmailPage() {
        clearMyProfileEditEmailPageText();

        $("#postSignInMyProfilePageEditProfileEmail").val(auth.currentUser.email);
    }

    function loadBooksOnFavouritesPage() {
        //TODO load my favourite books on 'favourites' page
    }

    function editMyProfileInfo() {
        let userId = auth.currentUser.uid;
        let firstName = $("#postSignInMyProfilePageEditProfileFirstName").val();
        let lastName = $("#postSignInMyProfilePageEditProfileLastName").val();
        let username = $("#postSignInMyProfilePageEditProfileUsername").val();

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

        db.collection("users").doc(userId).set({
            firstName: firstName,
            lastName: lastName,
            username: username
        }, {merge: true}).catch((error) => {
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 5000);
        }).then(() => {
            showSuccessMessage("Profile edited successfully.", 3000);
            showPostSignInMyProfilePageViewProfile();
        });
    }

    function editMyProfileEmail() {
        let email = $("#postSignInMyProfilePageEditProfileEmail").val();
        let currentUserEmail = auth.currentUser.email;
        let password = $("#postSignInMyProfilePageEditProfilePassword").val();

        if (email === currentUserEmail) {
            showErrorMessage("Your new email has to be different then your current one.", 4000);
            return;
        }

        if (password.length === 0) {
            showInfoMessage("In order to edit your email, you must enter your password.", 4000);
            return;
        }

        if (!validatePassword(password)) {
            showErrorMessage("Your password has to at least have 6 characters.", 3000);
            return;
        }

        auth.signInWithEmailAndPassword(currentUserEmail, password).catch((error) => {
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 3000);
        }).then((snapshot) => {
            snapshot.user.updateEmail(email).catch((error) => {
                let errorMessage = error.message;
                showErrorMessage(errorMessage, 5000);
            }).then(() => {
                clearMyProfileEditEmailPageText();
                showSuccessMessage("Email updated successfully.", 3000);
                showPostSignInMyProfilePageViewProfile();
            });
        });
    }

    function editMyProfilePassword() {
        let currentUserEmail = auth.currentUser.email;
        let password = $("#postSignInMyProfilePageEditProfilePasswordPassword").val();
        let newPassword = $("#postSignInMyProfilePageEditProfileNewPassword").val();
        let repeatNewPassword = $("#postSignInMyProfilePageEditProfileRepeatNewPassword").val();

        if (password.length === 0) {
            showInfoMessage("In order to edit your password, you must enter your current password.", 5000);
            return;
        }

        if (!validatePassword(password)) {
            showErrorMessage("Your current password is at least 6 characters long.", 4000);
            return;
        }

        if (newPassword.length === 0) {
            showErrorMessage("Please enter your new password.", 3000);
            showInfoMessage(" enter your new password.", 3000);
            return;
        }

        if (!validatePassword(newPassword)) {
            showErrorMessage("Your new password has to at least have 6 characters.", 4000);
            return;
        }

        if (newPassword === password) {
            showInfoMessage("Your new password has to be different than your current one.", 4000);
            return;
        }

        if (repeatNewPassword.length === 0) {
            showInfoMessage("Please repeat your new password.", 3000);
            return;
        }

        if (newPassword !== repeatNewPassword) {
            showErrorMessage("The two passwords don't match.", 3000);
            return;
        }

        auth.signInWithEmailAndPassword(currentUserEmail, password).catch((error) => {
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 3000);
        }).then((snapshot) => {
            if (snapshot !== undefined) {
                snapshot.user.updatePassword(newPassword).catch((error) => {
                    let errorMessage = error.message;
                    showErrorMessage(errorMessage, 5000);
                }).then(() => {
                    clearMyProfileEditPasswordPageText();
                    showSuccessMessage("Password updated successfully.", 3000);
                    showPostSignInMyProfilePageViewProfile();
                });
            }
        });
    }

    function createBook() {
        let bookName = $("#postSignInBooksPageCreateBookPageName").val();
        let bookISBN = $("#postSignInBooksPageCreateBookPageISBN").val();
        let bookYear = $("#postSignInBooksPageCreateBookPageYear").val();
        let bookDescription = $("#postSignInBooksPageCreateBookPageDescription").val();

        if(validateBookCompletely(bookName, bookISBN, bookYear, bookDescription)){
            let userUid = auth.getUid();

            db.collection("books").add({
                name: bookName,
                isbn: bookISBN,
                year: parseInt(bookYear),
                description: bookDescription,
                creator: userUid
            }).catch((error) => {
                let errorMessage = error.message;
                showErrorMessage(errorMessage, 5000);
            }).then((snapshot) => {
                if(snapshot !== undefined){
                    showSuccessMessage("Book created successfully.", 3000);
                    clearMyBookCreateBookPageText();
                    showPostSignInMyBooksPage();
                }
            });
        }
    }

    function deleteBook(nameAttr){
        db.collection("books").doc(nameAttr).delete().catch((error)=>{
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 5000);
        }).then(()=>{
            showSuccessMessage("Book deleted successfully.", 3000);

            if(isOnBooksPage){
                showPostSignInBooksPage();
            }
            else {
                showPostSignInMyBooksPage();
            }
        });
    }

    function editBook(nameAttr){
        let bookName = $("#postSignInBooksPageEditBookPageName").val();
        let bookISBN = $("#postSignInBooksPageEditBookPageISBN").val();
        let bookYear = $("#postSignInBooksPageEditBookPageYear").val();
        let bookDescription = $("#postSignInBooksPageEditBookPageDescription").val();

        if(validateBookCompletely(bookName, bookISBN, bookYear, bookDescription)){
            let userUid = auth.getUid();

            db.collection("books").doc(nameAttr).set({
                name: bookName,
                isbn: bookISBN,
                year: parseInt(bookYear),
                description: bookDescription,
                creator: userUid
            }).catch((error) => {
                let errorMessage = error.message;
                showErrorMessage(errorMessage, 5000);
            }).then(() => {
                showSuccessMessage("Book edited successfully.", 3000);
                clearEditBookPageText();
                showPostSignInBooksViewBook();
                loadBookOnViewBookPage(nameAttr);
            });

        }
    }

    function changePageTitle(name) {
        $(document).prop("title", name);
    }

    function unbindBookCrudButtons(){
        $(".viewBookText").unbind("click");
        $(".deleteBookText").unbind("click");
    }

    function register() {
        let firstName = $("#registerPageFirstName").val();
        let lastName = $("#registerPageLastName").val();
        let username = $("#registerPageUsername").val();
        let email = $("#registerPageEmail").val();
        let password = $("#registerPagePassword").val();
        let repeatPassword = $("#registerPageRepeatPassword").val();

        let willSetFirstName = false;
        let willSetLastName = false;
        let willSetUsername = false;

        if (firstName.length !== 0) {
            if (!validateName(firstName)) {
                showErrorMessage("Invalid first name.", 3000);
                return;
            }

            willSetFirstName = true;
        }
        if (lastName.length !== 0) {
            if (!validateName(lastName)) {
                showErrorMessage("Invalid last name.", 3000);
                return;
            }

            willSetLastName = true;
        }
        if (username.length !== 0) {
            if (!validateUsername(username)) {
                showErrorMessage("Invalid username.", 3000);
                return;
            }

            willSetUsername = true;
        }

        if (!validatePassword(password)) {
            showErrorMessage("Password should be at least 6 characters", 4000);
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
                if (willSetFirstName || willSetLastName || willSetUsername) {
                    db.collection("users").doc(auth.getUid()).set({
                        firstName: firstName,
                        lastName: lastName,
                        username: username,
                    }, {merge: true}).catch((error) => {
                        let errorMessage = error.message;
                        showErrorMessage(errorMessage, 5000);
                    });
                } else {
                    db.collection("users").doc(auth.getUid()).set({
                        firstName: "",
                        lastName: "",
                        username: "",
                    }, {merge: true}).catch((error) => {
                        let errorMessage = error.message;
                        showErrorMessage(errorMessage, 5000);
                    });
                }
            }
            showSuccessMessage("Registration successful.", 3000);
        });
    }

    function signIn() {
        let email = $("#signInPageEmail").val();
        let password = $("#signInPagePassword").val();

        if (password.length === 0) {
            showInfoMessage("Please enter your password.", 3000);
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

    function showInfoMessage(message, timeInMilliseconds) {
        $("#infoMessage").show().text(message);

        setTimeout(() => {
            $("#infoMessage").fadeOut("fast");
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

    function clearMyProfileEditEmailPageText() {
        $("#postSignInMyProfilePageEditProfileEmail").val("");
        $("#postSignInMyProfilePageEditProfilePassword").val("");
    }

    function clearMyProfileEditPasswordPageText() {
        $("#postSignInMyProfilePageEditProfilePasswordPassword").val("");
        $("#postSignInMyProfilePageEditProfileNewPassword").val("");
        $("#postSignInMyProfilePageEditProfileRepeatNewPassword").val("");
    }

    function clearMyBookCreateBookPageText(){
        $("#postSignInBooksPageCreateBookPageName").val("");
        $("#postSignInBooksPageCreateBookPageISBN").val("");
        $("#postSignInBooksPageCreateBookPageYear").val("");
        $("#postSignInBooksPageCreateBookPageDescription").val("");
    }

    function clearBookViewBookPageText(){
        $("#postSignInBooksPageViewBookPageName").text("");
        $("#postSignInBooksPageViewBookPageISBN").text("");
        $("#postSignInBooksPageViewBookPageYear").text("");
        $("#postSignInBooksPageViewBookPageDescription").text("");
    }

    function clearEditBookPageText(){
        $("#postSignInBooksPageEditBookPageName").val("");
        $("#postSignInBooksPageEditBookPageISBN").val("");
        $("#postSignInBooksPageEditBookPageYear").val("");
        $("#postSignInBooksPageEditBookPageDescription").val("");
    }

    function validateName(name) {
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

    function validateBookCompletely(bookName, bookISBN, bookYear, bookDescription){
        if (bookName.length === 0) {
            showInfoMessage("Please enter the book's name.", 3000);
            return false;
        }

        if (!validateBookName(bookName)) {
            showErrorMessage("Invalid book name.", 3000);
            return false;
        }

        if (bookISBN.length === 0) {
            showInfoMessage("Please enter the book's ISBN.", 3000);
            return false;
        }

        if (!validateBookISBN(bookISBN)) {
            showErrorMessage("Invalid book ISBN.", 3000);
            return false;
        }

        if (bookYear.length === 0) {
            showInfoMessage("Please enter the book's year.", 3000);
            return false;
        }

        if (!validateBookYear(bookYear)) {
            showErrorMessage("Invalid book year.", 3000);
            return false;
        }

        if (bookDescription.length !== 0) {
            if (!validateBookDescription(bookDescription)) {
                showErrorMessage("The book's description has to have between 16 and 1500 characters.", 3000);
                return false;
            }
        }

        return true;
    }

    function validateBookName(bookName) {
        if (bookName.length > 150) {
            return false;
        }

        let re = /^[A-Za-z0-9\s\-_,\.;:()]+$/;
        return re.test(bookName);
    }

    function validateBookISBN(isbn) {
        let re = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
        return re.test(isbn);
    }

    function validateBookYear(year) {
        if (isNaN(year)) {
            return false;
        }

        let date = new Date();
        return year >= 1 && year <= date.getFullYear();
    }

    function validateBookDescription(description) {
        return description.length >= 16 && description.length <= 1500;
    }
});