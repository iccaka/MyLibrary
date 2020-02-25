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
                clearEditBookPageText();
                clearAddCommentTextArea();
                clearEditCommentTextArea();
            }
        });

        // the 3 response messages inside of the 'header' div
        $(".responseMessages").click(hideResponseMessages);

        // the 4 'pre sign in' navigation tabs
        $("#preSignInNavigationHome").click(showIndexPage);
        $("#preSignInNavigationSignIn").click(showSignInPage);
        $("#preSignInNavigationRegister").click(showRegisterPage);
        $("#preSignInNavigationAbout").click(showAboutPage);

        // the 3 little text buttons inside of the 'pre sign in' index page
        $("#indexPageSignInButton").click(showSignInPage);
        $("#indexPageRegisterButton").click(showRegisterPage);
        $("#indexPageAboutButton").click(showAboutPage);

        // the 2 buttons activating the 'signIn' and 'register' functions
        $("#preSignInPageSignInButton").click(signIn);
        $("#preSignInRegisterPageButton").click(register);

        // the 6 'post sign in' navigation tabs
        $("#postSignInNavigationHome").click(showPostSignInIndexPage);
        $("#postSignInNavigationBooks").click(showPostSignInBooksPage);
        $("#postSignInNavigationMyBooks").click(showPostSignInMyBooksPage);
        $("#postSignInNavigationMyProfile").click(showPostSignInMyProfilePageViewProfile);
        $("#postSignInNavigationFavourites").click(showPostSignInFavouritesPage);
        $("#postSignInNavigationSignOut").click(signOut);

        // the 4 little text buttons inside of the 'post sign in' index page
        $("#postSignInIndexPageFavourites").click(showPostSignInFavouritesPage);
        $("#postSignInIndexPageBooks").click(showPostSignInBooksPage);
        $("#postSignInIndexPageMyBooks").click(showPostSignInMyBooksPage);
        $("#postSignInIndexPageMyProfile").click(showPostSignInMyProfilePageViewProfile);

        $("#postSignInMyBooksPageCreateBookButton").click(showCreateBookPage);
        $("#postSignInBooksPageCreateBookButtonFinalCreate").click(createBook);
        $("#postSignInBooksPageViewBookHideComments").click(hideComments);
        $("#editCommentButtonFinal").click(editComment);

        // the 3 buttons corresponding to showing the 3 'my profile' edit pages(edit info, password and email)
        $("#postSignInMyProfilePageViewProfileEditInfo").click(showPostSignInMyProfileEditPage);
        $("#postSignInMyProfilePageViewProfileEditPassword").click(showPostSignInMyProfileEditPassword);
        $("#postSignInMyProfilePageViewProfileEditEmail").click(showPostSignInMyProfileEditEmail);

        // the 3 final buttons editing the overall 'my profile' information(info, password and email)
        $("#postSignInMyProfilePageEditProfileFinalEdit").click(editMyProfileInfo);
        $("#postSignInMyProfilePageEditEmailFinalEdit").click(editMyProfileEmail);
        $("#postSignInMyProfilePageEditPasswordFinalEdit").click(editMyProfilePassword);

        // back buttons
        $(".backToMyProfileViewProfilePageButtons").click(showPostSignInMyProfilePageViewProfile);
        $(".backToMyBooksViewProfilePageButtons").click(showPostSignInMyBooksPage);
        $("#backToMyBooksPageFromCreateBookPage").click(showPostSignInMyBooksPage);
        $("#backToAnyOfTheTwoBookPages").click(showBooksOrMyBooksPage);
    }

    function hideAllPreSignInPages() {
        $("#preSignInIndexPage").hide();
        $("#preSignInSignInPage").hide();
        $("#preSignInRegisterPage").hide();
        $("#preSignInAboutPage").hide();

        $("#preSignInContentPage").hide();
    }

    function hideAllPostSignInPages() {
        $("#postSignInIndexPage").hide();
        $("#postSignInBooksPage").hide();
        $("#postSignInMyBooksPage").hide();
        $("#postSignInBooksPageCreateBookPage").hide();
        $("#postSignInBooksPageEditBookPage").hide();
        $("#postSignInBooksPageViewBookPage").hide();
        $("#postSignInAddCommentPage").hide();
        $("#postSignInEditCommentPage").hide();
        $("#postSignInMyProfilePageViewProfile").hide();
        $("#postSignInMyProfilePageEditInfo").hide();
        $("#postSignInMyProfilePageEditEmail").hide();
        $("#postSignInMyProfilePageEditPassword").hide();
        $("#postSignInFavouritesPage").hide();

        $("#postSignInContentPage").hide();
    }

    function hideAllPreSignInNavigationPages() {
        $("#preSignInNavigationHome").hide();
        $("#preSignInNavigationSignIn").hide();
        $("#preSignInNavigationRegister").hide();
        $("#preSignInNavigationAbout").hide();

        $("#preSignInNavigationPage").hide();
    }

    function hideAllPostSignInNavigationPages() {
        $("#postSignInNavigationHome").hide();
        $("#postSignInNavigationBooks").hide();
        $("#postSignInNavigationMyBooks").hide();
        $("#postSignInNavigationMyProfile").hide();
        $("#postSignInNavigationFavourites").hide();
        $("#postSignInNavigationSignOut").hide();

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
        $("#postSignInNavigationHome").show();
        $("#postSignInNavigationBooks").show();
        $("#postSignInNavigationMyBooks").show();
        $("#postSignInNavigationMyProfile").show();
        $("#postSignInNavigationFavourites").show();
        $("#postSignInNavigationSignOut").show();

        $("#postSignInNavigationPage").show();
    }

    function showIndexPage() {
        changePageTitle("Home");

        hideAllPostSignInNavigationPages();
        hideAllPostSignInPages();
        hideAllPreSignInPages();

        $("#preSignInContentPage").show();
        $("#preSignInIndexPage").show();

        showAllPreSignInNavigationPages();
    }

    function showSignInPage() {
        changePageTitle("Sign in");

        hideAllPostSignInNavigationPages();
        hideAllPostSignInPages();
        hideAllPreSignInPages();

        $("#preSignInContentPage").show();
        $("#preSignInSignInPage").show();

        showAllPreSignInNavigationPages();
    }

    function showRegisterPage() {
        changePageTitle("Register");

        hideAllPostSignInNavigationPages();
        hideAllPostSignInPages();
        hideAllPreSignInPages();

        $("#preSignInContentPage").show();
        $("#preSignInRegisterPage").show();

        showAllPreSignInNavigationPages();
    }

    function showAboutPage() {
        changePageTitle("About");

        hideAllPostSignInNavigationPages();
        hideAllPostSignInPages();
        hideAllPreSignInPages();

        $("#preSignInContentPage").show();
        $("#preSignInAboutPage").show();

        showAllPreSignInNavigationPages();
    }

    function showPostSignInIndexPage() {
        changePageTitle("Home");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInIndexPage").show();

        showAllPostSignInNavigationPages();
        $("#postSignInNavigationHome").hide()
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
        $("#postSignInNavigationBooks").hide();

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
        $("#postSignInNavigationMyBooks").hide();

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

        $("#postSignInBooksPageViewBookShowComments").show();
        $("#postSignInBooksPageViewBookHideComments").hide();

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

    function showAddCommentPage(nameAttr){
        $("#backToBookFromAddCommentPage").unbind();
        $("#backToBookFromAddCommentPage").click(()=>{
            showPostSignInBooksViewBook();
            loadBookOnViewBookPage(nameAttr);
        });

        $("#addCommentButtonFinal").unbind();
        $("#addCommentButtonFinal").click(()=>{
            addComment(nameAttr);
        });

        changePageTitle("Add comment");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInAddCommentPage").show();

        showAllPostSignInNavigationPages();
    }

    function showEditCommentPage(nameAttr){
        $("#backToBookFromEditCommentPage").unbind();
        $("#backToBookFromEditCommentPage").click(()=>{
            showPostSignInBooksViewBook();
            loadBookOnViewBookPage(nameAttr);
        });

        changePageTitle("Edit comment");

        hideAllPreSignInNavigationPages();
        hideAllPreSignInPages();
        hideAllPostSignInPages();

        $("#postSignInContentPage").show();
        $("#postSignInEditCommentPage").show();

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
        $("#postSignInNavigationMyProfile").hide();

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
        $("#postSignInNavigationFavourites").hide();

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

        hideComments();

        $("#postSignInBooksPageViewBookEditBook").unbind();
        $("#postSignInBooksPageViewBookAddComment").unbind();
        $("#postSignInBooksPageViewBookShowComments").unbind();
        $("#postSignInBooksPageViewBookEditBook").hide();

        db.collection("books").doc(nameAttr).get().then((snapshot)=>{
            if(snapshot !== undefined){
                let bookData = snapshot.data();

                changePageTitle(bookData.name);

                if(userUid === bookData.creator){
                    $("#postSignInBooksPageViewBookEditBook").show();
                    $("#postSignInBooksPageViewBookEditBook").attr("name", nameAttr);
                }

                $("#postSignInBooksPageViewBookShowComments").attr("name", nameAttr);
                $("#postSignInBooksPageViewBookAddComment").attr("name", nameAttr);

                $("#postSignInBooksPageViewBookPageName").text(bookData.name);
                $("#postSignInBooksPageViewBookPageISBN").text(bookData.isbn);
                $("#postSignInBooksPageViewBookPageYear").text(bookData.year);
                $("#postSignInBooksPageViewBookPageDescription").text(bookData.description);

                $("#postSignInBooksPageViewBookEditBook").click((event)=>{
                    let name = $(event.target).attr("name");
                    showEditBookPage();
                    loadBookOnEditBookPage(name, bookData.name, bookData.isbn, bookData.year, bookData.description);
                });

                $("#postSignInBooksPageViewBookAddComment").click((event)=>{
                    let name = $(event.target).attr("name");
                     showAddCommentPage(name);
                });

                $("#postSignInBooksPageViewBookShowComments").click((event)=>{
                    let name = $(event.target).attr("name");
                    loadComments(name);
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

    function loadCommentOnEditCommentPage(nameAttr){
        $("#editCommentButtonFinal").unbind();

        db.collection("comments").doc(nameAttr).get().catch((error)=>{
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 5000)
        }).then((snapshot) => {
            if(snapshot !== undefined){
                let snapshotData = snapshot.data();
                let bookComment = snapshotData.comment;
                let bookId = snapshotData.book;
                $("#postSignInEditCommentPageText").val(bookComment);

                $("#editCommentButtonFinal").attr("name", nameAttr);
                $("#editCommentButtonFinal").click(()=>{
                    editComment(nameAttr, bookId);
                });
            }
        });

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

    function loadComments(nameAttr, isAfterDelete){
        $(".deleteCommentText").unbind();
        $(".editCommentText").unbind();

        db.collection("comments").where("book", "==", nameAttr).get().catch((error)=>{
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 5000);
        }).then((snapshot) => {
            if(snapshot !== undefined){
                let bookComments = snapshot.docs;

                if(bookComments.length !== 0){
                    $("#postSignInBooksPageViewBookShowComments").hide();
                    $("#postSignInBooksPageViewBookHideComments").show();

                    for(bookComment in bookComments){
                        let commentData = bookComments[bookComment].data().comment;
                        let commentCreator = bookComments[bookComment].data().creator;
                        let userUid = auth.getUid();
                        let commentId = bookComments[bookComment].id;

                        let paragraphElement;

                        if(userUid === commentCreator){
                            paragraphElement = `
                            <hr>
                            <p>${commentData}</p>
                            <u class="underlinedText deleteCommentText" name="${commentId}">delete</u> | <u class="underlinedText editCommentText" name="${commentId}">edit</u>
                        `;
                        }
                        else {
                            paragraphElement = `
                            <hr>
                            <p>${commentData}</p>
                        `;
                        }

                        $("#commentBucket").append(paragraphElement);
                    }

                    $(".deleteCommentText").click((event)=>{
                        let name = $(event.target).attr("name");
                        deleteComment(name);
                        $("#commentBucket").empty();
                        loadComments(nameAttr, true);
                    });
                    $(".editCommentText").click((event)=>{
                        let name = $(event.target).attr("name");
                        showEditCommentPage(name);
                        loadCommentOnEditCommentPage(name);
                    });
                }
                else {
                    if(!isAfterDelete){
                        showInfoMessage("This book doesn't have any comments", 3000);
                    }
                    else {
                        hideComments();
                    }
                }
            }
        });
    }

    function hideComments(){
        $("#postSignInBooksPageViewBookShowComments").show();
        $("#postSignInBooksPageViewBookHideComments").hide();

        $("#commentBucket").empty();
    }

    function deleteComment(nameAttr){
        db.collection("comments").doc(nameAttr).delete().catch((error)=>{
            let errorMessage = error.message;
            showErrorMessage(errorMessage, 5000);
        }).then(()=>{
            showSuccessMessage("Comment deleted successfully.", 3000);
        });
    }

    function addComment(nameAttr){
        let bookComment = $("#postSignInAddCommentPageText").val();

        if(validateBookComment(bookComment)){
            let userUid = auth.getUid();

            db.collection("comments").add({
                book: nameAttr,
                comment: bookComment,
                creator: userUid,
            }).catch((error) => {
                let errorMessage = error.message;
                showErrorMessage(errorMessage, 5000);
            }).then((snapshot) => {
                if(snapshot !== undefined){
                    showSuccessMessage("Comment added successfully.", 3000);
                    clearAddCommentTextArea();
                    clearBookViewBookPageText();
                    showPostSignInBooksViewBook();
                    loadBookOnViewBookPage(nameAttr);
                }
            });
        }
    }

    function editComment(nameAttr, bookId){
        let bookComment = $("#postSignInEditCommentPageText").val();
        let userUid = auth.getUid();

        if(validateBookComment(bookComment)){
            db.collection("comments").doc(nameAttr).set({
                book: bookId,
                comment: bookComment,
                creator: userUid
            }, {merge: true}).catch((error) => {
                let errorMessage = error.message;
                showErrorMessage(errorMessage, 5000);
            }).then(() => {
                showSuccessMessage("Comment edited successfully.", 3000);
                clearEditCommentTextArea();
                showPostSignInBooksViewBook();
                loadBookOnViewBookPage(bookId);
            });
        }
    }

    function editMyProfileInfo() {
        let userUid = auth.getUid();
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

        db.collection("users").doc(userUid).set({
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
        let firstName = $("#preSignInRegisterPageFirstName").val();
        let lastName = $("#preSignInRegisterPageLastName").val();
        let username = $("#preSignInRegisterPageUsername").val();
        let email = $("#preSignInRegisterPageEmail").val();
        let password = $("#preSignInRegisterPagePassword").val();
        let repeatPassword = $("#preSignInRegisterPageRepeatPassword").val();

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
        let email = $("#preSignInPageEmail").val();
        let password = $("#preSignInPagePassword").val();

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

    function clearAddCommentTextArea(){
        $("#postSignInAddCommentPageText").val("");
    }

    function clearEditCommentTextArea(){
        $("#postSignInEditCommentPageText").val("");
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

    function validateBookComment(bookComment){
        if(bookComment.length === 0){
            showInfoMessage("The comment's length cannot be zero.", 3000);
            return false;
        }
        if(bookComment.length > 350){
            showInfoMessage("The comment cannot be longer than 350 characters.", 4000);
            return false;
        }

        return true;
    }
});