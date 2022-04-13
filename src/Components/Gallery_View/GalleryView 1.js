import React from 'react';
import ReactImagesCarousel from 'react-images-carousel';
import abc1 from "../images/cover.jpg";
import abc from "./award_1.png";

export function GalleryView() {

    const sliderData = [
      abc1, abc ];

    return (<div>
      {/* <img src = {abc1}/> */}
        <ReactImagesCarousel images={sliderData} />
    </div>
    )
}
export default GalleryView;