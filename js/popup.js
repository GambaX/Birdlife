$(document).ready(function(){
   $("#show-login").click(function(){
    FormChange(true);
   });
});

function FormChange(toChange){
    if (toChange){
        $("#login-form").fadeIn(1);
        $("#membership-form").fadeOut();
    }
}