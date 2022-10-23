(() => {
  let imageArray = [];
  let elImageArray = [];

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
  const elNavigation = Array.from(document.getElementsByClassName('button-left'))[0];

  // EVENT LISTENERS
  elButtonLeft.addEventListener('click', () => slideMove('left'));
  elButtonRight.addEventListener('click', () => slideMove('right'));

  createImages();
  initiateSlide();


  //#region IMAGES
  function createImage(source, title, alt) {
    imageArray.push(new Image(source, title, alt));
    return imageArray;
  }

  function createImages() {
    createImage(
      'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-620x349.jpg',
      'Beach',
      'Picture of a beach',
    );
    createImage(
      'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg',
      'Nature',
      'Image of nature',
    );
    createImage(
      'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Download-620x349.jpg',
      'Rocks on the beach',
      'Picture of rocks',
    );
    createImage(
      'https://www.pixelstalk.net/wp-content/uploads/2016/07/Desktop-hd-wallpaper-nature-1080p-620x349.jpg',
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
    elImageArray[currentImageIndex].dataset.active = false;
    elImageArray[currentImageIndex].className = 'image middle-to-right';
    elImageArray[currentImageIndex].addEventListener('animationend', (e) => endOfAnimation(e));

    elImageArray[previousImageIndex].dataset.active = true;
    elImageArray[previousImageIndex].classList.remove('invisible-image', 'middle-to-right');
    elImageArray[previousImageIndex].classList.add('left-to-middle');
  }

  function slideMoveRight(currentImageIndex, nextImageIndex) {
    elImageArray[currentImageIndex].dataset.active = false;
    elImageArray[currentImageIndex].className = 'image middle-to-left';
    elImageArray[currentImageIndex].addEventListener('animationend', (e) => endOfAnimation(e));

    elImageArray[nextImageIndex].dataset.active = true;
    elImageArray[nextImageIndex].classList.remove('invisible-image', 'middle-to-left');
    elImageArray[nextImageIndex].classList.add('right-to-middle');
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



})();
