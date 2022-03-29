import ImageGallery from 'react-image-gallery';
import React from 'react';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

class AwardImages extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default AwardImages;


// import ImageGallery from 'react-image-gallery';
// import React from 'react';
// import award1 from '../images/Awards/award_1.png';
// import award2 from '../images/Awards/award_2.png';
// import award3 from '../images/Awards/award_3.png';

// const images = [
//   {
//     original: award1,
//     height:"10",
//     width:"50"
//   },
//   {
//     original: award2,
//     width:"10",
//     height: 50
//   },
//   {
//     original: award3,
//   },
// ];

// const AwardImages = () => {
//   return ( 
//     <div className="awardimgs">
//       <ImageGallery items={images} height="20px" />;
//     </div>
//    );
// }
 
// export default AwardImages;