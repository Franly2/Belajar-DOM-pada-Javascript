const close = document.querySelectorAll(`.close`);

close.forEach(function (el) {
  el.addEventListener(`click`, function (e) {
    e.target.parentElement.style.display = `none`;
    e.preventDefault();
  });
});

// ! preventDefault berarti aksi default tidak akan dijalankan
// ? contohnya, tag a tidak akan menjalankan aksi defaultnya yaitu me resfresh halaman saat setelah di click
