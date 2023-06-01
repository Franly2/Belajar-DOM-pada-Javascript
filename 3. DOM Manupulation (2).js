// buat elemen baru
const pBaru = document.createElement(`p`);
const textPBaru = document.createTextNode(`Paragraf Baru`);

// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);

// simpan pBaru diakhir section a
const sectionA = document.getElementById(`a`);
sectionA.appendChild(pBaru);
pBaru.style.backgroundColor = `red`;

//
//
//

// membuat elemen baru
const liBaru = document.createElement(`li`);
const isiLiBaru = document.createTextNode(`ini  li baru`);
// memasukkan isi ke liBaru
liBaru.appendChild(isiLiBaru);
// memindhakan liBaru ke tujuan
const ul = document.querySelector(`section#b ul`);
const li2 = document.querySelector(`section#b ul li:nth-Child(2)`);
ul.insertBefore(liBaru, li2);

liBaru.style.backgroundColor = `red`;

//
//
//

const sectionB = document.querySelector(`#b`);
const hapus = sectionB.querySelector(`p`);

// sectionB.removeChild(hapus);

//
//
//

const h2 = document.createElement(`h2`);
const isiH2 = document.createTextNode(`Judul Baru!`);

h2.appendChild(isiH2);

sectionB.replaceChild(h2, hapus);
h2.style.backgroundColor = `red`;
