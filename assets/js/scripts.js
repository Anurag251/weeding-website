const sideNavBtn = document.querySelector(".side-nav-btn");
const sideNavcloseBtn = document.querySelector(".side-nav-close-btn");
const sideNav = document.querySelector(".side-nav");
const background = document.querySelector(".background");
const sticky = document.querySelector("header");
const categoriesSec = document.querySelector(".categories-sec");

window.onscroll = () => {
  if (this.scrollY > 280) {
    sticky.classList.add("sticky");
    if (categoriesSec) {
      categoriesSec.style.top = "70px";
    }
  } else {
    sticky.classList.remove("sticky");
    if (categoriesSec) {
      categoriesSec.style.top = "10px";
    }
  }
};

if (sideNav) {
  sideNavBtn.addEventListener("click", () => {
    sideNavBtn.classList.toggle("active");
    sideNav.classList.toggle("active");
    background.classList.toggle("active");
  });

  sideNavcloseBtn.addEventListener("click", () => {
    sideNavBtn.classList.remove("active");
    sideNav.classList.remove("active");
    background.classList.remove("active");
  });

  background.addEventListener("click", () => {
    sideNavBtn.classList.remove("active");
    sideNav.classList.remove("active");
    background.classList.remove("active");
  });
}

const customButtons = document.querySelectorAll(".custom-button");
const bobble = document.querySelectorAll(".bob");

if (customButtons[0] !== undefined || customButtons[0] !== null) {
  customButtons.forEach((customButton, idx) => {
    customButton.addEventListener("click", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;

      console.log(e);

      bobble[idx].style.left = `${x}px`;
      bobble[idx].style.top = `${y}px`;

      bobble[idx].classList.add("active");

      setTimeout(() => {
        bobble[idx].classList.remove("active");
      }, 1000);
    });
  });
}

const faqBtns = document.querySelectorAll(".faq-btn");
const faqBtnImg = document.querySelectorAll(".faq-btn-img");
const faqBtnDesc = document.querySelectorAll(".faq-btn-desc");

if (faqBtns[0] !== undefined || faqBtns[0] !== null) {
  faqBtns.forEach((faqBtn, idx) => {
    faqBtn.addEventListener("click", () => {
      faqBtnImg[idx].classList.toggle("active");
      faqBtnDesc[idx].classList.toggle("active");
    });
  });
}

const moreImageBtn = document.querySelector("#more-images-btn");
const moreImagePopup = document.querySelector(".vendor-more-images");
const moreImageClose = document.querySelector(".close-more-images-btn");
const moreImageBg = document.querySelector(".more-images-bg");

if (moreImageBtn) {
  moreImageBtn.addEventListener("click", () => {
    moreImagePopup.classList.add("active");
  });

  moreImageClose.addEventListener("click", () => {
    moreImagePopup.classList.remove("active");
  });

  moreImageBg.addEventListener("click", () => {
    moreImagePopup.classList.remove("active");
  });
}

// wizard form
const inputGroups = document.querySelectorAll(".input-groups");

if (inputGroups[0] !== undefined) {
  const innerGroup = document.querySelector(".inner-group");
  const nextBtn = document.querySelectorAll("#next-btn");
  const prevBtn = document.querySelectorAll("#prev-btn");
  let dividedValue = [];
  let listOfValue = [];
  let lastValue = 0;

  inputGroups.forEach((inputGroup, idx) => {
    innerGroup.style.width = `${idx + 1}00%`;

    let length = idx + 1;
    let divide = 100 / length;

    listOfValue[idx] = divide;
  });

  lastValue = listOfValue.slice(-1).pop();

  dividedValue[0] = 0;

  for (let i = 0; i < inputGroups.length; i++) {
    dividedValue[i + 1] = dividedValue[i] + lastValue;

    let target = inputGroups[i].getAttribute("id");

    const removeAttribute = () => {
      inputGroups[i].setAttribute("id", "");

      setErrorEmail(null);
      setErrorContactNumber(null);
      setErrorPanNumber(null);
    };

    if (target === "errorOccered") {
      innerGroup.style.transform = `translateX(-${dividedValue[i]}%)`;

      setTimeout(removeAttribute, 3000);
    }
  }

  nextBtn.forEach((nBtn, idx) => {
    let newIdx = idx + 1;
    nBtn.addEventListener("click", (e) => {
      e.preventDefault();
      innerGroup.style.transform = `translateX(-${dividedValue[newIdx]}%)`;
    });
  });

  prevBtn.forEach((pBtn, idx) => {
    pBtn.addEventListener("click", (e) => {
      e.preventDefault();
      innerGroup.style.transform = `translateX(-${dividedValue[idx]}%)`;
    });
  });
}

let formInputLabels = document.querySelectorAll(".form-input-label");
let line = document.querySelectorAll(".line");

const getData = (data) => {
  formInputLabels.forEach((formInputLabel, idx) => {
    let dataAttributeName = data.getAttribute("name");
    let labelAttributeName = formInputLabel.getAttribute("for");

    if (dataAttributeName === labelAttributeName) {
      if (data.getAttribute("name") === dataAttributeName) {
        if (data.value.length) {
          formInputLabel.classList.add("shrink");
          if (line[0]) {
            line[idx].classList.add("shrink");
          }
        } else {
          formInputLabel.classList.remove("shrink");
          if (line[0]) {
            line[idx].classList.remove("shrink");
          }
        }
      }
    }
  });
};

const templateEditPage = document.querySelector(".template-edit-page");

if (templateEditPage) {
  // templateEditNavigator2
  const templateEditNavigator2 = document.querySelector(
    ".template-edit-navigator ul #btn2"
  );
  const editAbout = document.querySelectorAll(".editAbout input");

  editAbout.forEach((input) => {
    input.addEventListener("change", (e) => {
      if (e.target.value) {
        templateEditNavigator2.classList.add("done");
      } else {
        templateEditNavigator2.classList.remove("done");
      }
    });
  });

  // templateEditNavigator3
  const templateEditNavigator3 = document.querySelector(
    ".template-edit-navigator ul #btn3"
  );
  const editPhotos1 = document.querySelector(".editPhotos .swiper-slide");
  const editPhotos2 = document.querySelector(
    ".editPhotos .gallery-all-images .item"
  );

  if (editPhotos1 !== null || editPhotos2 !== null) {
    templateEditNavigator3.classList.add("done");
  } else {
    templateEditNavigator3.classList.remove("done");
  }

  // templateEditNavigator4
  const templateEditNavigator4 = document.querySelector(
    ".template-edit-navigator ul #btn4"
  );
  const editStory = document.querySelector(".editStory input");

  editStory.addEventListener("change", (e) => {
    if (e.target.value) {
      templateEditNavigator4.classList.add("done");
    } else {
      templateEditNavigator4.classList.remove("done");
    }
  });

  // templateEditNavigator5
  const templateEditNavigator5 = document.querySelector(
    ".template-edit-navigator ul #btn5"
  );
  const editVideo = document.querySelector(".editVideo .wedding-video");

  if (editVideo !== null) {
    templateEditNavigator5.classList.add("done");
  } else {
    templateEditNavigator5.classList.remove("done");
  }

  // templateEditNavigator6
  const templateEditNavigator6 = document.querySelector(
    ".template-edit-navigator ul #btn6"
  );
  const editWeddingParty = document.querySelector(
    ".editWeddingParty .wedding-party-list .item"
  );

  if (editWeddingParty !== null) {
    templateEditNavigator6.classList.add("done");
  } else {
    templateEditNavigator6.classList.remove("done");
  }
}

let mouse = document.querySelector(".cursor");
let mainButtons1 = document.querySelectorAll("a");
let mainButtons2 = document.querySelectorAll("li");
let mainButtons3 = document.querySelectorAll("button");
let mainButtons4 = document.querySelectorAll("p");
let mainButtons5 = document.querySelectorAll("#mainButton");
let mainButtons6 = document.querySelectorAll("input");

mouse.addEventListener("click", () => {
  mouse.classList.add("clicked");
});

const bigPointer = () => {
  mouse.classList.add("active");
};

const mediamPointer = () => {
  mouse.classList.remove("active");
  mouse.classList.remove("small-pointer");
};

const smallPointer = () => {
  mouse.classList.add("small-pointer");
};

mainButtons1.forEach((mainButton) => {
  mainButton.addEventListener("mouseover", () => {
    bigPointer();
  });
  mainButton.addEventListener("mouseout", () => {
    mediamPointer();
  });
});
mainButtons2.forEach((mainButton) => {
  mainButton.addEventListener("mouseover", () => {
    bigPointer();
  });
  mainButton.addEventListener("mouseout", () => {
    mediamPointer();
  });
});
mainButtons3.forEach((mainButton) => {
  mainButton.addEventListener("mouseover", () => {
    bigPointer();
  });
  mainButton.addEventListener("mouseout", () => {
    mediamPointer();
  });
});
mainButtons4.forEach((mainButton) => {
  mainButton.addEventListener("mouseover", () => {
    smallPointer();
  });
  mainButton.addEventListener("mouseout", () => {
    mediamPointer();
  });
});
mainButtons5.forEach((mainButton) => {
  mainButton.addEventListener("mouseover", () => {
    bigPointer();
  });
  mainButton.addEventListener("mouseout", () => {
    mediamPointer();
  });
});
mainButtons6.forEach((mainButton) => {
  mainButton.addEventListener("mouseover", () => {
    bigPointer();
  });
  mainButton.addEventListener("mouseout", () => {
    mediamPointer();
  });
});

document.addEventListener("mousemove", (e) => {
  let x = e.x;
  let y = e.y;

  mouse.style.top = y + "px";
  mouse.style.left = x + "px";
});

const productDetails = document.querySelector(".product-details");

if (productDetails) {
  const allImages = document.querySelectorAll(".all-images #mainButton");
  const mainImage = document.querySelector("#mainImage img");

  allImages.forEach((img) => {
    img.addEventListener("click", () => {
      $(img).addClass("active").siblings().removeClass("active");
      const imgSrc = img.getAttribute("src");
      mainImage.setAttribute("src", imgSrc);
    });
  });
}

const feedCards = document.querySelectorAll(".feed-card");
const imageSections = document.querySelectorAll(".images-sections");

if (feedCards[0] !== undefined) {
  feedCards.forEach((feedCard, idx) => {
    const images = feedCard.querySelectorAll(".images-sections img");
    const hiddenImageSec = feedCard.querySelector(".hidden-image");
    const hiddenImage = feedCard.querySelector(".hidden-image img");
    const imageCloseBtn = feedCard.querySelector("#imageCloseBtn");
    const bgForClose = feedCard.querySelector(".bg-for-close");

    const optionBtn = feedCard.querySelector(".option-btn");
    const options = feedCard.querySelector(".options");

    optionBtn.addEventListener("click", () => {
      optionBtn.classList.toggle("active");
      options.classList.toggle("active");
    });

    if (images.length === 1) {
      imageSections[idx].classList.add("onlyOne");
    }

    if (images.length === 2) {
      imageSections[idx].classList.add("onlyTwo");
    }

    if (images.length === 3) {
      imageSections[idx].classList.add("onlyThree");
    }

    if (images.length === 4) {
      imageSections[idx].classList.add("onlyFour");
    }

    if (images.length === 5) {
      imageSections[idx].classList.add("onlyFive");
    }

    images.forEach((image) => {
      image.addEventListener("click", () => {
        const imageUrl = image.getAttribute("src");

        hiddenImage.setAttribute("src", imageUrl);

        hiddenImageSec.classList.add("active");
      });
    });

    imageCloseBtn.addEventListener("click", () => {
      hiddenImageSec.classList.remove("active");
    });

    bgForClose.addEventListener("click", () => {
      hiddenImageSec.classList.remove("active");
    });
  });
}

const allCustomBtn = document.querySelectorAll(".custom-button");

allCustomBtn.forEach((customBtn) => {
  customBtn.addEventListener("click", () => {
    customBtn.classList.toggle("activeLoading");
    customBtn.setAttribute("disabled", "disabled");
  });
});

const filterBtn = document.querySelector(".filter-btn");
if (filterBtn) {
  const categories = document.querySelector(".categories-sec");
  const cateClose = document.querySelector(".cate-close");

  filterBtn.addEventListener("click", () => {
    categories.classList.add("active");
  });

  cateClose.addEventListener("click", () => {
    categories.classList.remove("active");
  });
}

/* Storing user's device details in a variable*/
let details = navigator.userAgent;

console.log(navigator.platform);

/* Creating a regular expression
      containing some mobile devices keywords
      to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details
      it returns boolean value*/
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
  mouse.style.display = "none";
} else {
  mouse.style.display = "block";
}
