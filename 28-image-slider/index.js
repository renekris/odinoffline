(() => {
  let imageArray = [];
  let elImageArray = [];
  let elNavigationArray = [];

  class Image {
    constructor(source, title, alt) {
      this.source = source;
      this.title = title;
      this.alt = alt;
    }
  }

  // DOM CACHE
  const elButtonLeft = Array.from(document.getElementsByClassName('button-left'))[0];
  const elButtonRight = Array.from(document.getElementsByClassName('button-right'))[0];
  const elSlider = Array.from(document.getElementsByClassName('image-slider'))[0];
  const elNavigation = Array.from(document.getElementsByClassName('navigation-dots'))[0];

  // EVENT LISTENERS
  elButtonLeft.addEventListener('click', () => slideMove('left'));
  elButtonRight.addEventListener('click', () => slideMove('right'));

  // AUTO SLIDE EVERY 5000ms
  document.addEventListener('DOMContentLoaded', () => slideTimer(5000));

  createImages();
  initiateSlide();
  displayNavigation();


  async function slideTimer(ms) {
    while (true) {
      await sleep(ms);
      slideMove('right');
    }
  }

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  //#region IMAGES
  function createImage(source, title, alt) {
    imageArray.push(new Image(source, title, alt));
    return imageArray;
  }

  function createImages() {
    createImage(
      'https://wallpapercave.com/wp/wp9160759.jpg',
      'Forest',
      'Picture of a forest',
    );
    createImage(
      'https://www.pixel4k.com/wp-content/uploads/2018/10/crops-sunset-lake-4k_1540131385.jpg',
      'Nature',
      'Image of nature',
    );
    createImage(
      'https://wallpapercave.com/wp/wp9161057.jpg',
      'Night',
      'Night',
    );
    createImage(
      'https://www.pixel4k.com/wp-content/uploads/2019/03/mountains-landscape-dark-nature-4k_1551643707.jpg.webp',
      'Mountains',
      'Picture of mountains',
    );
  }
  //#endregion IMAGES

  function slideMove(side) {
    const currentImageIndex = getCurrentImageIndex();
    const previousImageIndex = getPreviousImageIndex(currentImageIndex);
    const nextImageIndex = getNextImageIndex(currentImageIndex);

    elButtonRight.disabled = true;
    elButtonLeft.disabled = true;
    if (side === 'left') {
      slideMoveLeft(currentImageIndex, previousImageIndex);
    } else if (side === 'right') {
      slideMoveRight(currentImageIndex, nextImageIndex);
    }
  }

  function slideMoveLeft(currentImageIndex, previousImageIndex) {
    slideToImage(currentImageIndex, previousImageIndex);
    elImageArray[currentImageIndex].classList.add('middle-to-right');
    elImageArray[currentImageIndex].addEventListener('animationend', (e) => endOfAnimation(e));

    elImageArray[previousImageIndex].classList.add('left-to-middle');
  }

  function slideMoveRight(currentImageIndex, nextImageIndex) {
    slideToImage(currentImageIndex, nextImageIndex);
    elImageArray[currentImageIndex].classList.add('middle-to-left');
    elImageArray[currentImageIndex].addEventListener('animationend', (e) => endOfAnimation(e));

    elImageArray[nextImageIndex].classList.add('right-to-middle');
  }

  function slideToImage(currentImageIndex, targetIndex) {
    console.log(`Moving from ${currentImageIndex} to ${targetIndex}`);
    elImageArray[currentImageIndex].dataset.active = false;
    elImageArray[targetIndex].dataset.active = true;

    elImageArray[currentImageIndex].className = 'image invisible-image';
    elImageArray[targetIndex].className = 'image';

    elNavigationArray[currentImageIndex].dataset.active = false;
    elNavigationArray[targetIndex].dataset.active = true;
  }

  function getCurrentImageIndex() {
    return elImageArray.findIndex(elImage => {
      return elImage.dataset.active == 'true';
    });
  }

  function getNextImageIndex(currentIndex) {
    let nextImageIndex = currentIndex + 1;
    if (nextImageIndex >= elImageArray.length) nextImageIndex = 0;
    return nextImageIndex;
  }

  function getPreviousImageIndex(currentIndex) {
    let previousImageIndex = currentIndex - 1;
    if (previousImageIndex < 0) previousImageIndex = elImageArray.length - 1;
    return previousImageIndex;
  }

  function endOfAnimation(e) {
    elButtonLeft.disabled = false;
    elButtonRight.disabled = false;

    e.target.className = 'image invisible-image';
    e.target.removeEventListener('animationend', endOfAnimation);
  }


  function initiateSlide() {
    for (let i = 0; i < imageArray.length; i++) {
      const imageData = imageArray[i];
      const elImage = elSlider.appendChild(document.createElement('img'));
      elImage.src = imageData.source;
      elImage.title = imageData.title;
      elImage.alt = imageData.alt;
      elImage.dataset.active = false;
      elImage.className = 'image invisible-image';
      elImageArray.push(elImage);
    }

    // display the first image
    elImageArray[0].dataset.active = true;
    elImageArray[0].classList.remove('invisible-image');

  }

  function displayNavigation() {
    elNavigation.innerHTML = '';

    for (let i = 0; i < elImageArray.length; i++) {
      const elButton = elNavigation.appendChild(document.createElement('button'));
      elButton.addEventListener('click', () => slideToImage(getCurrentImageIndex(), i));
      elButton.classList.add('navigation-button');
      if (i === 0) {
        elButton.dataset.active = true;
      } else {
        elButton.dataset.active = false;
      }
      elNavigationArray.push(elButton);
    }
  }


})();
