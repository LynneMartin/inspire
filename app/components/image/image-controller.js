import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
  let image = is.Image
  document.querySelector('bg-image').setAttribute('background', image.getTemplate())
  document.querySelector('img-credit').innerHTML = `<p><i class="fas fa-camera"></i> ${image.site}</p>`

}
//NOTE Clock code below

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let session = 'AM'
  m = checkTime(m);
  s = checkTime(s);

  if (h <= 12) {
    document.querySelector('welcome').innerText = 'God Morgon!'
  } else if (h <= 18) {
    document.querySelector('welcome').innerText = 'God Eftermiddag!'
  } else {
    document.querySelector('welcome').innerText = 'God Kväll!'
  }

  if (h === 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  document.querySelector('clock').innerHTML = <h1> class="big">${h}:${m} ${session}</h1>

  function checkTime(i) {
    if (i < 10) { i = "0" + i }; //STUB Adds 0 in front of numbers < 10
    return i;
  }

}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImage)
    _is.getImage()
    startTime()
  }

  getImage() {
    _is.getImage()
  }

}

//REVIEW check syntax above, especially in the first document.querySelector

