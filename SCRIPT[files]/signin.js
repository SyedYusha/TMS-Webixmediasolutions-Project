let popup = document.getElementById("pop-up");
let popup_invalid = document.getElementById("pop-up-invalid");
let adminId = "yusha@gmail.com";

function proceed() {
  var userId = document.getElementById("user-id").value;
  var password = document.getElementById("password").value;
  function proceed_panel() {
    window.location.href =
      "file:///D:/Web%20Development/Sigma%20Web%20development%20Project/Project%2309-TMS-Webixmediasolutions/Admin%20Dashboard%20index%20files/dashboard_admin.html";
  }
  if (userId == "admin@tms" && password == "admin@2020") {
    popup.classList.add("show-popup");
    popup_invalid.classList.add("close-popup");
    proceed_panel();
  }
  if (userId == "" && password == "");
  {
    popup.classList.add(".show-popup");
    popup_invalid.classList.add("show-popup");
  }
}
function proceed() {
  var userId = document.getElementById("user-id").value;
  var password = document.getElementById("password").value;
  function proceed_panel() {
    window.location.href =
      "file:///D:/Web%20Development/Sigma%20Web%20development%20Project/Project%2309-TMS-Webixmediasolutions/Driver%20Dashboard%20index%20Files/index.html";
  }
  if (userId == "driver@tms" && password == "dri@2020") {
    popup.classList.add("show-popup");
    popup_invalid.classList.add("close-popup");
    proceed_panel();
  }
  if (userId == "" && password == "");
  {
    popup.classList.add(".show-popup");
    popup_invalid.classList.add("show-popup");
  }
}
function tryagain_popup() {
  popup.classList.remove("show-popup");
  popup_invalid.classList.remove("show-popup");
}
// function proceed_panel() {
//     window.location.href = 'file:///D:/Web%20Development/Sigma%20Web%20development%20Project/Project%2309-TMS-Webixmediasolutions/Admin%20Dashboard%20index%20files/dashboard_admin.html';
// }
