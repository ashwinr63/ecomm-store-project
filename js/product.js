// changing the image element by clicking the next image

const bigImg = document.querySelector(`#bigimg`);
const theGallery = document.querySelector(`#gallery`);
const setThumb = function (event) {
    // target refers to what was under the mouse when this event occurred
    const whichOne = event.target;
  
    // Exit immediately if what we clicked was not a .thumb
    //if (!whichOne.matches(`.thumb`)) return
  
    if (whichOne.matches(`.thumb`)) {
      // Getting the data required to load up the big image
      let imgSrc = whichOne.getAttribute(`src`);
      let imgAlt = whichOne.getAttribute(`alt`);
      // Update the big image's attributes
      bigImg.setAttribute(`src`, imgSrc);
      bigImg.setAttribute(`alt`, imgAlt);
    }
  
  }
  
  // Listen to the entire gallery for a click
  theGallery.addEventListener(`click`, setThumb);
  
 
  // Select all of the thumbnails
  const theThumbs = document.querySelectorAll('.thumb');
  
  const makeClickable = function (whichOne) {
  
    const setThumb = function(event) {
  
      // Getting the data required to load up the big image
      let imgSrc = whichOne.getAttribute(`src`);
      let imgAlt = whichOne.getAttribute(`alt`);
  
      // Update the big image's attributes
      bigImg.setAttribute(`src`, imgSrc);
      bigImg.setAttribute(`alt`, imgAlt);
    }
  
    whichOne.addEventListener(`click`, setThumb);
  }
  
  // For each of the thumbnails selected, run the makeClickable function
  theThumbs.forEach(makeClickable);