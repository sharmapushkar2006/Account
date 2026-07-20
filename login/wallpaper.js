//Images are taken from web. For removal of any image please contact me. I will remove it as soon as possible. 
const setWallpaper =()=>{
    var arr=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg'];
    var randomIndex = Math.floor(Math.random() * arr.length);
    var selectedImage = arr[randomIndex];  
    var url='./assets/'+selectedImage;
    console.log(url);
    document.body.style.backgroundImage = "url('" + url + "')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.minHeight = '100vh'; 
}
setWallpaper();