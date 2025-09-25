let popup = document.getElementById("pop-up");
let popup_invalid = document.getElementById("pop-up-invalid");
let adminId = "yusha@gmail.com";


function proceed() {
    var userId = document.getElementById("user-id").value;
    var password = document.getElementById("password").value;
    if(userId == "admin@tms" && password == "admin@2020") {
        popup.classList.add('show-popup');
        popup_invalid.classList.add('close-popup');
    }
    if(userId == "" && password == "");{
        popup_invalid.classList.add('show-popup');
    }
}
function tryagain_popup() {
    popup.classList.remove('show-popup');
    popup_invalid.classList.remove('show-popup');
}
function proceed_panel() {
    window.location.assign = '../Admin Dashboard index files';
}