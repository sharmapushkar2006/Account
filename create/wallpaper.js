// Images are taken from web. For removal of any image please contact me. I will remove it as soon as possible.
const setWallpaper = () => {
  const arr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
  const randomIndex = Math.floor(Math.random() * arr.length);
  const selectedImage = arr[randomIndex];
  const url = "../Assets/"+selectedImages;

  document.body.style.backgroundColor = '#f4f7ff';
  document.body.style.backgroundImage = `linear-gradient(135deg, rgba(27, 27, 29, 0.29), rgba(19, 20, 22, 0.33)), url('${url}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.minHeight = '100vh';
};

setWallpaper();
