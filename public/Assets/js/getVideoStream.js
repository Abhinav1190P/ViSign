
var GetVideoStream = (function () {

    async function _init() {

        const video = document.getElementById('localVideoPlayer');
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frameDataURL = canvas.toDataURL();


        if (frameDataURL.length > 10) {
            sendFrameToPython(frameDataURL)
            async function sendFrameToPython(frameData) {
                const response = await fetch('http://localhost:5000/processframe', {
                    method: 'POST',
                    body: JSON.stringify({ 'image_data':frameData }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const result = await response.json();
                console.log(result);
            }

        }


    }

    return {
        init: _init
    }
})()

