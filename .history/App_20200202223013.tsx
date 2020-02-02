import React, { useState } from 'react';

import imageSource from './images.jpeg';
import StyledView from './src/components/StyledView';

export default function App() {
  const [sliderNum, setSliderNum] = useState<number>(0); //slider values
  const [imageSize, setImageSize] = useState<number>(150); //default image height
  const [toggleSlider, setToggleSlider] = useState<boolean>(false); //disable or enable slider
  const [seconds, setSeconds] = useState<number>(0); //seconds for a timer

  //set Slider values
  const setSliderValue = (value: number) => {
    //parse slider value to float number and set 2 decimal values
    const sliderValue = parseFloat(value.toFixed(2));

    //Sum of slider value and default image height of 150
    const totalImgSize = sliderValue + 150;

    //set values to a state
    setSliderNum(sliderValue);
    setImageSize(totalImgSize);
  };

  const stopWatch = () => {
    const sec = new Date().getSeconds();

    //If 30 seconds, then disable slider
    if (sec === 30) {
      setToggleSlider(true);
    }

    //if less then 30 seconds then enable slider
    if (sec === 0) {
      setToggleSlider(false);
    }

    //save seconds for display
    setSeconds(sec);
  };

  //executes every 1 seconds
  setInterval(stopWatch, 1000);

  //Message
  const message = `Slider will be ${
    toggleSlider ? `enabled` : `disabled`
  } after 30 seconds`;

  return <StyledView />;
}
