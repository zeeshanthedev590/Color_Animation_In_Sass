document.onkeydown = function (e) {
  console.log("Key code is: ", e.keyCode);
  if (e.keyCode == 38) {
    main.classList.add("color");
    setTimeout(() => {
      main.classList.remove("color");
    }, 1000);
  }
};
