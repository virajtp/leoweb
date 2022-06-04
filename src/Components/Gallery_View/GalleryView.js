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
            width={p.width}
            height={p.heights}
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots= {p.dots}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={p.thumbnails}
            thumbnailWidth="50px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "100%",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default GalleryView;
