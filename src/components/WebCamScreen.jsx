import {useEffect, useRef} from 'react';

import Webcam from "react-webcam";

const WebCamScreen = ({videoConstraints, onStream}) => {
  const webcamRef = useRef(null);
  const intervalId = useRef(null);

  useEffect(() => {
    console.log('mount');
    intervalId.current = window.setInterval(() => {
      onStream && onStream(webcamRef.current.getScreenshot());
    }, 1000);

    return () => {
      console.log('unmount');
      if(intervalId.current) {
        window.clearInterval(intervalId.current);
        intervalId.current = null;
      }
    }
  }, []);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={window.outerWidth}
        height={window.outerWidth}
        videoConstraints={videoConstraints}
      />
    </>
  );
}

export default WebCamScreen;