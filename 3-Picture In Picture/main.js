const videoElement = document.getElementById("video");
const btn = document.getElementById("button");

//Prompt to select media stream , pass to video element ,  then play
async function selectMediaStream() {
    try {
     const mediaStream = await navigator.mediaDevices.getDisplayMedia();   
     videoElement.srcObject = mediaStream;
     videoElement.onloadedmetadata = () => {
        videoElement.play();
     }
    } catch (error) {
        prompt("Error!")
    }
}
button.addEventListener('click', async() => {
   //Disable Button
   button.disabled = true;
   await videoElement.requestPictureInPicture();
   button.disabled = false ;
});
selectMediaStream();