let audio = new Audio("images/448081__breviceps__tic-toc-click.wav");
let audio1 = new Audio("images/454711__eflexmusic__short-uplifting-orchestral-cue-mixed-compressed.wav");
let audio2 = new Audio("images/351521__zagi2__scene-2.wav");
let audio3 = new Audio("images/338229__fachii__button-hover.wav");
let audio4 = new Audio("images/524427__tsgroovz__vinylpop.wav");
let audio5 = new Audio("images/57687__sound-master__button-1.wav");

audio2.play();




class PhotoElement {
  constructor(url, description, category) {
    this.url = url;
    this.description = description;
    this.category = category;
  }
}

const UI = {
  arrowLeft: document.querySelector(".arrow.left"),
  arrowRight: document.querySelector(".arrow.right"),
  galleryItem: document.querySelector(".galleryItem"),
  index: document.querySelector(".index"),
  description: document.querySelector(".description"),
  thumbGallery: document.querySelector(".thumbGallery"),
  autoSlideButton: document.querySelector(".autoButton")
}

function addThumbGallery() {
  for (let i in context.photos) {
    UI.thumbGallery.innerHTML += `<div onmouseover="audio4.play()" onclick="showPhotoByIndex(${i}); audio.play();" class="thumb"style="background-image: url('${context.photos[i].url}');"></div>`;
  }

}

const context = {
  photos: (photos = []),
  currentPhotoIndex: 0,
};

function initGallery() {
  photos.push(
    new PhotoElement(
      "https://images.sharefaith.com/images/3/1529682303354_0/slide-02.jpg",
      "MOVIES"
    )
  );

  photos.push(
    new PhotoElement(
      "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2013/ThorDarkWorld_2194942100-TDW0NNG1._V362444527_SX1080_.jpg",
      "Thor"
    )
  );

  photos.push(
    new PhotoElement(
      "https://i.gadgets360cdn.com/large/star-trek-discovery-season-2-pike-burnham-c_1547203264096.jpg?output-quality=80&output-format=webp",
      "Star Trek"
    )
  );

  photos.push(
    new PhotoElement(
      "https://media.vanityfair.com/photos/5ce426161c0b0773cacd1123/master/w_1600%2Cc_limit/star-wars-feature-vf-2019-summer-embed-07.jpg",
      "Star Wars"
    )
  );

  photos.push(
    new PhotoElement(
      "https://www.bosshunting.com.au/wp-content/uploads/2020/09/mandalorianconceptartpic.jpeg",
      "Mandalorian"
    )
  );

  photos.push(
    new PhotoElement(
      "https://cdn.vox-cdn.com/thumbor/zh057g0zmZvDfer_2xFTETpWPZQ=/0x0:2000x1000/1220x813/filters:focal(840x340:1160x660):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60665623/GotG2Bluray.0.jpg",
      "Guardians of the Galaxy"
    )
  );

  photos.push(
    new PhotoElement(
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F01%2Fim2-fx-0740-2000.jpg",
      "Iron Man"
    )
  );

  photos.push(
    new PhotoElement(
      "https://cdn.vox-cdn.com/thumbor/Qy8nZsKDwBshuDFZuaDOFn4vMSQ=/0x0:1600x800/1220x813/filters:focal(983x234:1239x490):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/53525043/tron.0.jpg",
      "Tron"
    )
  );

  photos.push(
    new PhotoElement(
      "https://www.rollingstone.com/wp-content/uploads/2018/07/aqua.jpg?resize=1800,1200&w=1200",
      "Aquaman"
    )
  );

  photos.push(
    new PhotoElement(
      "https://i2.wp.com/kakuchopurei.com/wp-content/uploads/2018/12/doctor-strange-infinity-war.jpeg?fit=1200%2C903&ssl=1",
      "Doctor Strange"
    )
  );

  photos.push(
    new PhotoElement(
      "https://www.turn-on.de/media/cache/article_images/media/cms/2017/04/Facebook-Transformers.DE-.jpg?763189",
      "Transformers"
    )
  );

  photos.push(
    new PhotoElement(
      "https://i.ytimg.com/vi/53-ZHiDv65k/maxresdefault.jpg",
      "Transformers"
    )
  );

  photos.push(
    new PhotoElement(
      "https://assets.media-platform.com/gizmodo/dist/images/2019/12/20/191223_avatar.jpg",
      "Avatar"
    )
  );

  
 
  addThumbGallery();
  showPhotoByIndex(context.currentPhotoIndex);
  
}

function showPhotoByIndex(photoIndex) {
  const photo = context.photos[photoIndex];
  anime();
  UI.index.innerHTML = `${photoIndex+1} / ${context.photos.length}`;
  UI.description.innerHTML = photo.description;

  UI.galleryItem.src = photo.url;
}

UI.arrowRight.addEventListener("click", showNextPhoto);  

function showNextPhoto() {
  
  
  context.currentPhotoIndex++;
  if (context.currentPhotoIndex > context.photos.length - 1)
    context.currentPhotoIndex = 0;

  showPhotoByIndex(context.currentPhotoIndex);
}

UI.arrowLeft.addEventListener("click", () => {

  context.currentPhotoIndex--;
  if (context.currentPhotoIndex < 0)
    context.currentPhotoIndex = context.photos.length - 1;
  showPhotoByIndex(context.currentPhotoIndex);
});

initGallery();

function anime() {
  if (UI.galleryItem.classList.contains("a2")) {
    UI.galleryItem.classList.remove("a2");
    UI.galleryItem.classList.add("a3");
  } else if (UI.galleryItem.classList.contains("a3")) {
    UI.galleryItem.classList.remove("a3");
    UI.galleryItem.classList.add("a2");
  } else {
    UI.galleryItem.classList.add("a3");
  }
}

let slideInterval;

function autoSlide() {
  slideInterval = setInterval(() => {
    if(autoSlideOn) {
      showNextPhoto();
    } else {
      return showNextPhoto(0);
    }
  }, 3500);
}

let autoSlideOn = false;

UI.autoSlideButton.addEventListener("click", function() {
  audio5.play();
  audio1.play();
  if (!autoSlideOn) {
    autoSlideOn = true;
    UI.autoSlideButton.style.backgroundColor = "#7FFF00"; 
    UI.autoSlideButton.style.color = " #ffffff"; 
    autoSlide();
  } else {
    autoSlideOn = false;
    UI.autoSlideButton.style.backgroundColor = "#111111";
    UI.autoSlideButton.style.color = "#F11111"; 
    clearInterval(slideInterval)
    audio1.pause();
  }
});