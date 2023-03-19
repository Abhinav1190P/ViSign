
var GetVideoStream = (function () {

    async function _init() {
        console.log("HEllo")
        const video = document.getElementById('localVideoPlayer');
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frameDataURL = canvas.toDataURL();
        console.log(frameDataURL)
    }

    return {
        init: _init
    }
})()

