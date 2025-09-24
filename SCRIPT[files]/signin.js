let popup = document.getElementById("pop-up");
let userId = document.getElementById("user-id");
let password = document.getElementById("password");
let adminId = "yusha@gmail.com";

function proceed() {
  popup.classList.add("show-popup");
  popup.classList.remove("close-pop-up");
 }
 function close_popup() {
     popup.classList.remove("show-popup");
     popup.classList.add("close-pop-up");
    }
    setTimeout(close_popup, 3000);
if (userId.value === adminId) {
  proceed();
} else {
//   alert("Incorrect username/password");
}
// const resumeBtns = document.querySelectorAll('.btn_resume');

// resumeBtns.forEach((btn, idx)=>{
//     btn.addEventListener('click', ()=>{
//         const resumeDet = document.querySelectorAll('.resume-details')
//         resumeBtns.forEach(btn =>{
//             btn.classList.remove('active');
//         });
//         btn.classList.add('active');
//         resumeDet.forEach(detail =>{
//             detail.classList.remove('active');
//         });
//         resumeDet[idx].classList.add('active');
//     });
// });


const change_Card = document.getElementsByClassName('card-header-list')
const change_Card2 = document.getElementsByClassName('card-header-list-2')
const change_Card3 = document.getElementsByClassName('card-header-list-3')

function change_card() {
    change_Card.classList.add('active')
    change_Card.classList.remove('active')
}
change_card();
function change_card_2() {
    change_Card2.classList.add('active')
    change_Card.classList.remove('active')
}
change_card_2();
function change_card_3() {
    change_Card3.classList.add('active')
    change_Card2.classList.remove('active')
}
change_card_3();