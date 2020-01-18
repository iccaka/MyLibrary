$(document).ready(()=>{

    if(doesContainCookies()){
        showSignInPage();
    }
    else {
        showIndexPage();
    }

    $("#buttonSignIn").click(signIn);
    $("#buttonRegister").click(register);

});

function doesContainCookies() {
    if(Cookies.get("name") === undefined || Cookies.get("password") === undefined){
        return false;
    }

    return true;
}

function showSignInPage() {
    // TODO show the sign in page so the user can sign in using the stored cookies
}

function showIndexPage(){
    // TODO show the index page(the main one), as if the user is in this website for the first time
}

function register(){
    // TODO write the logic which controls the user's register process into the library
}

function signIn(){
    // TODO write the logic which controls the user's sign in process into the library
}