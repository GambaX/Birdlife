$(document).ready(function(){
   $("#show-login").click(function(){
    FormChange(true);
   });
});

function FormChange(toChange){
    if (toChange){
        $("#login-form").css({"display":"block"});
        $("#membership-form").css({"display":"none"});
    }
}