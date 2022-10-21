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
  elButtonLeft.addEventListener('click', () => slideMoveLeft());
  elButtonRight.addEventListener('click', () => slideMoveRight());

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

  function slideMoveRight() {
    elButtonRight.disabled = true;
    let currentImageIndex = getCurrentImageIndex();
    if (currentImageIndex === -1) currentImageIndex = 0;
    let nextImageIndex = currentImageIndex + 1;

    elImageArray[currentImageIndex].dataset.active = false;
    elImageArray[currentImageIndex].className = 'image middle-to-left';
    elImageArray[currentImageIndex].addEventListener('animationend', (e) => endOfAnimation(e, elButtonRight));

    // avoid out of array index on the next image
    if (nextImageIndex >= elImageArray.length) {
      nextImageIndex = 0;
    }
    elImageArray[nextImageIndex].dataset.active = true;
    elImageArray[nextImageIndex].classList.remove('invisible-image', 'middle-to-left');
    elImageArray[nextImageIndex].classList.add('right-to-middle');
  }

  function getCurrentImageIndex() {
    return elImageArray.findIndex(elImage => {
      return elImage.dataset.active == 'true';
    });
  }

  function endOfAnimation(e, button) {
    button.disabled = false;
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
