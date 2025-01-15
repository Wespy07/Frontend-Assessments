console.log('Youtube auto pause is working')

const videoBox = document.querySelector('video')

const autoPlayPause = () => {

    if (videoBox) {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          videoBox.pause();
        //   console.log('video paused')
        } else {
            videoBox.play();
            // console.log('video resumed')
        }
      });
    }
};

autoPlayPause()