// ! menggunakan cara ambil elemen satu per satu TIDAK EFEKTIF
// const thumbImg = document.querySelector(`.thumb:first-child`);
// const thumbImg2 = document.querySelector(`.thumb:nth-child(2)`);
// const thumbImg3 = document.querySelector(`.thumb:nth-child(3)`);
// const thumbImg4 = document.querySelector(`.thumb:nth-child(4)`);
// const thumbImg5 = document.querySelector(`.thumb:nth-child(5)`);
// const thumbImg6 = document.querySelector(`.thumb:nth-child(6)`);

// const jumboimg = document.querySelector(`.jumbo`);

// thumbImg.addEventListener(`click`, function () {
//   jumboimg.setAttribute(`src`, `image/1.png`);
// });
// thumbImg2.addEventListener(`click`, function () {
//   jumboimg.setAttribute(`src`, `image/2.png`);
// });
// thumbImg3.addEventListener(`click`, function () {
//   jumboimg.setAttribute(`src`, `image/3.png`);
// });
// thumbImg4.addEventListener(`click`, function () {
//   jumboimg.setAttribute(`src`, `image/4.png`);
// });
// thumbImg5.addEventListener(`click`, function () {
//   jumboimg.setAttribute(`src`, `image/5.png`);
// });
// thumbImg6.addEventListener(`click`, function () {
//   jumboimg.setAttribute(`src`, `image/6.png`);
// });

const container = document.querySelector(`.container`);
const jumbo = document.querySelector(`.jumbo`);
const thumbs = document.querySelectorAll(`.thumb`);

container.addEventListener(`click`, function (e) {
  // cek apakah yang di kllik adalah thumb
  if (e.target.className == `thumb`) {
    jumbo.src = e.target.src;
    jumbo.classList.add(`fade`);
    setTimeout(function () {
      jumbo.classList.remove(`fade`);
    }, 200);
    thumbs.forEach(function (thumb) {
      //   thumb.className = `thumb`;
      if (thumb.classList.contains(`active`)) {
        thumb.classList.remove(`active`);
      }
    });
    e.target.classList.add(`active`);
  }
});
