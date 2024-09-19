import React, { useState } from 'react';
import "./imageSlider.scss";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

// type ImageSliderProps = {
//     imageUrls: String[]
// }

const ImageSlider = ({ imageUrls }) => {
    const [imageIndex, setImageIndex] = useState(0);
    function showNextImage() {
        setImageIndex(index => {
            if (index ===  imageUrls.length - 1) return 0
            return index + 1
        })
    };
    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    };

    return (
        <div style={{ with: "100%", height: "100%", position: "relative" }} className='div-container'>
            <img src={imageUrls[imageIndex]} alt="" className='slider-image' />
            <button onClick={showPrevImage} className='img-slider-btn' style={{ left: 0 }}><FaArrowAltCircleLeft /></button>
            <button onClick={showNextImage} className='img-slider-btn' style={{ right: 0 }}><FaArrowAltCircleRight /></button>
        </div>
    )
}

export default ImageSlider;