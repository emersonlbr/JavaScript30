// add an event listener to the key that is pressed

window.addEventListener('keypress', event => {
  // console.log(event.keyCode, event.code);
  const att = document.querySelectorAll('.key');
  const key = event.keyCode - 32;
  console.log(key);

  let i = -1;

  switch (key) {
    case 65:
    case 65 - 32:
      i = 0;
      break;

    case 83:
      i = 1;
      break;

    case 68:
      i = 2;
      break;

    case 70:
      i = 3;
      break;

    case 71:
      i = 4;
      break;

    case 72:
      i = 5;
      break;

    case 74:
      i = 6;
      break;

    case 75:
      i = 7;
      break;

    case 76:
      i = 8;
      break;

    default:
      break;
  }

  (function() {
    att[i].classList.add('playing');
    const sn = att[i].querySelector('span').innerHTML;
    var audio = new Audio(`./sounds/${sn}.wav`);
    audio.loop = false;
    audio.play();
    setTimeout(() => {
      att[i].classList.remove('playing');
    }, 100);
  })();
});
