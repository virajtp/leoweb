// import "./App.css";
// import { Carousel } from "./lib";
// import './gindex.css';
// import aa from "D:/React Application/LEO/Front/src/Components/Gallery_View/award_1.png";
import { Carousel } from 'react-carousel-minimal';
import image from "./award_1.png";

const GalleryView = (p) => {
  const data = p.images;
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={5000}
            width="550px"
            // height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="50px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "650px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default GalleryView;
