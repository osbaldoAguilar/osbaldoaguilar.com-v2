const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const canvasCtx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');

const faceDetector = new window.FaceDetector();
console.log(video, canvas, faceCanvas, faceDetector);

// write a function that will populate the user video;

async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
    });
    console.log(stream);
    video.srcObject = stream;
    await video.play();
    // size the canvas to be the same size as the video 
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    const canvasWidth = video.videoWidth;
    const canvasHeight =  video.videoHeight;
    console.log(videoWidth, videoHeight, canvasWidth, canvasHeight);
}

async function detect() {
    const faces = await faceDetector.detect(video);
    console.log(faces);
    // ask browser when the next animation frame is, and tell it to run detect for us
    requestAnimationFrame(detect);
}
populateVideo().then(detect);