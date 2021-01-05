//! open modal in 50% scroll
let modalSub = document.querySelector(".modal-sub");
let sub = document.querySelector(".sub");
let wrap = document.querySelector(".wrap-form-cont");
let txt = document.querySelector(".modal-sub-txt");
let em = document.querySelector(".em");
let closeBtnSub = document.querySelector(".modal-sub-btn-close");

function closeModalSub() {
  // modalSub.classList.remove('modal-sub-show');
  // modalSub.classList.add('modal-sub-hide');
   sub.classList.remove('animate__backInDown');
  sub.classList.add('animate__backOutDown');
  setTimeout(closeSub, 1000);
   
}
function closeSub() {
modalSub.classList.add('modal-sub-hide');
}

function openModalSub() {
  // modalSub.classList.add('modal-sub-show');
  // modalSub.classList.remove('modal-sub-hide');
  sub.classList.add('animate__backInDown');
  sub.classList.remove('animate__backOutDown');
  modalSub.classList.remove('modal-sub-hide');
}

// function showModalByScroll() {
//   if (window.pageYOffset > document.documentElement.scrollHeight / 2) {
    setTimeout(openModalSub, 30000);
      
//     window.removeEventListener("scroll", showModalByScroll);
//   }
// }
// window.addEventListener("scroll", showModalByScroll);

closeBtnSub.addEventListener("click", closeModalSub);


//! close modal when click on  place around
window.addEventListener('click', function (e) {
  if (e.target !== wrap && e.target !== sub && e.target !== txt && e.target !== em) {
    closeModalSub()
  }
});