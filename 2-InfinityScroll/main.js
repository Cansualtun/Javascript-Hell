const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false ;
let totalImages = 0 ;
let photosArray = [];

function displayPhotos () {
    imagesLoaded = 0 ;
    totalImages = photosArray.length;
    console.log('total images', totalImages);
    photosArray.forEach((photos)=> {
    //Create a 
    const item = document.createElement('a');
    item.setAttribute('href' , photos.links.html);
    item.setAttribute('target' , '_blank');
    //Create Img 
    const img = document.createElement('img');
    img.setAttribute('src' , photos.urls.regular);
    img.setAttribute('alt' , photos.alt_description);
    //Event listener , check when each is finished loading
    img.addEventListener('load', imageLoaded());
    //Put the image inside <a> and then image-container
    img.classList.add("imgexample");
    item.appendChild(img);
    imageContainer.appendChild(item);
    });
}

// Api Info
const count = 10 ;
const apiKey = "gO_g37MGwJFp8ajVotB8XXp7uTxwDa80l4Rur6UsCTM";
const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Check if all images were loaded
function imageLoaded(){
    imagesLoaded++;
    console.log(imagesLoaded);
    if(imagesLoaded === totalImages){
        ready = true;
        console.log('ready = ', ready)
    }
}
//Fetch 
async function getPhotos () {
 try {
    const response = await fetch(url);
    photosArray = await response.json();
    displayPhotos();
} catch (error) {
    alert("this api not working!");
 }
}
// Check to see if scrolling near bottom of page , Load More Photos
window.addEventListener('scroll', ()=> {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
      ready = false ; 
      getPhotos();
    }
})
getPhotos();
