const p3 = document.querySelector(`.p3`);
function ubahWarnaP3() {
  p3.style.backgroundColor = `lightblue`;
}

const p2 = document.querySelector(`.p2`);
// p2.onclick = ubahWarnaP2;
// function ubahWarnaP2() {
//   p2.style.backgroundColor = `red`;
//   p2.style.color = `white`;

// }

//

const p4 = document.querySelector(`section#b p`);
p4.addEventListener(`click`, function () {
  const ulAwal = document.querySelector(`section#b ul`);
  const bungkus = document.createElement(`li`);
  const isiLi = document.createTextNode(`ini adalah`);
  bungkus.appendChild(isiLi);
  ulAwal.appendChild(bungkus);
});

p2.addEventListener(`mousemove`, function () {
  p2.style.backgroundColor = `blue`;
  console.log("jalan");
});

// p2.addEventListener(`offline`, function () {
//   p2.style.backgroundColor = `white`;
// });
