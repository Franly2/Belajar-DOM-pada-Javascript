// getElementById()            Hasil = Element
// getElementsByTagName()      Hasil = HTML Collection
// getElementsByClassName()    Hasil = HTML Collection
// querySelector()             Hasil = Element
// querySelectorAll()          Hasil = nodeList

const judul = document.getElementById(`judul`);
judul.style.color = `red`;
judul.style.backgroundColor = `lightpink`;
judul.innerHTML = `Ayam-Ayam`;

// const paragraf = document.getElementsByTagName(`p`);
// for (let i = 0; i < paragraf.length; i++) {
//   paragraf[i].style.backgroundColor = `lightgray`;
// }

const h1 = document.getElementsByTagName(`h1`)[0];
h1.style.fontSize = `40px`;

const p1 = document.getElementsByClassName(`p1`)[0];
p1.style.color = `orange`;

// const p4 = document.querySelector(`#b p`);
// p4.style.backgroundColor = `hotpink`;

const li2 = document.querySelector(`#b ul li:nth-Child(2)`);
li2.style.backgroundColor = `lightyellow`;
// jika menuliskan ".document.querySelecor(`p`)", maka yang akan dipilih adalah hanya p yang pertama kali ditemukan, karena querySelector mengembalika 1 element

const p = document.querySelectorAll(`p`);
for (let j = 0; j < p.length; j++) {
  p[j].style.backgroundColor = `lightgreen`;
}

//
