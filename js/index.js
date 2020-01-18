$(document).ready(()=>{

    $("#navigationPageHome").click(showIndexPage);
    $("#navigationPageSignIn").click(showSignInPage);
    $("#navigationPageRegister").click(showRegisterPage);
    $("#navigationPageAbout").click(showAboutPage);
    $("#indexPageSignInButton").click(signIn);
    $("#indexPageRegisterButton").click(register);

    if(doesContainCookies()){
        showSignInPage();
    }
    else {
        showIndexPage();
    }

    function doesContainCookies() {
        if(Cookies.get("name") === undefined || Cookies.get("password") === undefined){
            return false;
        }

        return true;
    }

    function hideAllPages(){
        $("#indexPage").hide();
        $("#signInPage").hide();
        $("#registerPage").hide();
        $("#aboutPage").hide();
    }

    function showAllNavigationPages(){
        $("#navigationPageHome").show();
        $("#navigationPageSignIn").show();
        $("#navigationPageRegister").show();
        $("#navigationPageAbout").show();
    }

    function showIndexPage(){
        hideAllPages();
        $("#indexPage").show();

        showAllNavigationPages();
        $("#navigationPageHome").hide();
    }

    function showSignInPage() {
        hideAllPages();
        $("#signInPage").show();

        showAllNavigationPages();
        $("#navigationPageSignIn").hide();
    }

    function showRegisterPage(){
        hideAllPages();
        $("#registerPage").show();

        showAllNavigationPages();
        $("#navigationPageRegister").hide();
    }

    function showAboutPage(){
        hideAllPages();
        $("#aboutPage").show();

        showAllNavigationPages();
        $("#navigationPageAbout").hide();
    }

    function register(){
        showRegisterPage();
    }

    function signIn(){
        showSignInPage();
    }
});