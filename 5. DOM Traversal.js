// const card = document.querySelector(`.card`);
// const close = document.querySelector(`.close`);

// close.addEventListener(`click`, function () {
//   card.style.display = `none`;
// });

// // !masih salah dan tidak menggunakan traversal
// const card = document.querySelectorAll(`.card`);
// const close = document.querySelectorAll(`.close`);

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener(`click`, function () {
//     card[i].style.display = `none`;
//   });
// }

// // ! cara yang cukup baik dan menggunakan traversal
// const card = document.querySelectorAll(`.card`);
// const close = document.querySelectorAll(`.close`);

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener(`click`, function () {
//     close[i].parentElement.style.display = `none`;
//   });
// }

// // ! cara yang baik dan menggunakan traversal
// const card = document.querySelectorAll(`.card`);
// const close = document.querySelectorAll(`.close`);

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener(`click`, function (e) {
//     e.target.parentElement.style.display = `none`;
//   });
// }

// ! cara yang baik dan menggunakan traversal
const close = document.querySelectorAll(`.close`);

close.forEach(function (el) {
  el.addEventListener(`click`, function (e) {
    e.target.parentElement.style.display = `none`;
  });
});

// * macam-macam method untuk traversal
// ! kata kunci element berarti enter antar element akan di abaikan
// ? parentElement             MENGEMBALIKAN ELEMENT
// ? parentNode                MENGEMBALIKAN NODE
// ? nextSibling               MENGEMBALIKAN NODE
// ? nextElementSibling        MENGEMBALIKAN ELEMENT
// ? previousSibling            MENGEMBALIKAN NODE
// ? previousElementSibling    MENGEMBALIKAN ELEMENT
