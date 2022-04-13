
// import aa from "D:/React Application/LEO/Front/src/Components/Gallery_View/award_1.png";

// import img1 from "../images/Awards/award_1.png";
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-gallery-carousel';
import Carousel from 'react-image-carousel';


function GalleryView(p) {

  const datas = p.data;


  // console.log(n);
  // {
  //   data.map((item, index) => {
  //     return (
  //       <div className="galview">
  //         <Carousel>

  //           <div>

  //             <img
  //               src={item.image}
  //               // alt={item.caption}
  //               className="carousel-image"
  //               // style={{
  //               //   borderRadius: radius,
  //               //   objectFit: slideImageFit ? slideImageFit : "cover",
  //               // }}
  //             />
  //             {/* <img src={img1} />
  //                 <p className="legend">Legend 1</p> */}
  //           </div>
  //           {/* <div>
  //                 <img src="assets/2.jpeg" />
  //                 <p className="legend">Legend 2</p>
  //             </div>
  //             <div>
  //                 <img src="assets/3.jpeg" />
  //                 <p className="legend">Legend 3</p>
  //             </div> */}
  //         </Carousel>
  //       </div>
  //     );

  //   }
  //   );
  // }

  let images = [
    'cover3.jpg',
    'award_1.png'
  ];
  return (
    <div className="my-carousel">
      {/* <Carousel images={images}
        thumb={true}
        loop={true}
        autoplay={3000} /> */}

      <h3>hjkhk</h3>

    </div>
  );
}

export default GalleryView;
