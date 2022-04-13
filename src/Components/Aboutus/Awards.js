// import GalleryView from '../Gallery_View/GalleryView';
import GalleryView from '../Gallery_View/GalleryView';
import awards from '../images/Awards/awards_bg.png';
import img1 from '../images/Awards/award_1.png';
import img2 from '../images/Awards/award_2.png';
import img3 from '../images/Awards/award_3.png';
import img4 from '../images/Awards/award_4.png';
import img5 from '../images/Awards/award_5.png';
import img6 from '../images/Awards/award_6.png';
import img7 from '../images/Awards/award_7.png';
// import AwardImages from './award_img.js';


const Awards = () => {
    const images = [{
        image: img1,
        caption:"",
      },
      {
        image: img2,
        caption:"",
      },
      {
        image: img3,
        caption:"",
      },
      {
        image: img4,
        caption:"",
      },
      {
        image: img5,
        caption:"",
      },
      {
        image: img6,
        caption:"",
      },
      {
        image: img7,
        caption:"",
      },
  ];

  const datas = ["a","b","c","d"];
    return (
        <div className="awards" >
            <p>
                <ul  style={{ textAlign: "left", fontSize:"25px" }}>
                    <li>Annual District Conference of Leo District 306 C2 - Invenzo’20
                        <ul>
                            <li>Most Outstanding New Leo Club of the year</li>
                            <li>1st Runner Up	- Most Outstanding University Club</li>
                            <li>Best Project for Senior Citizen Development - Project සෙනෙහසේ අත්වැල </li>
                        </ul>
                    </li>
                    {/* <GalleryView/> */}
                    <GalleryView images = {images}/>
                    {/* <AwardImages/> */}
                    <br />
                    <li>Crystal Awards – Lions Awards for Leos 2019/20
                        <ul>
                            <li>Winner		- Net Growth in Membership</li>
                            <li>2nd Runner Up	- International Observations</li>
                            <li>District Governors Special Appreciation Award (Leo Uvin Hewawasam) </li>
                            <li>2nd Runners Up	- Leo who Sponsored Highest Number of Members
                                (Leo Vishma Viraj)</li>
                            <li>Lions Club International President’s Appreciation (Leo Poornima Dilrukshi)</li>
                        </ul>
                    </li>
                    <br />
                    <li>Lions Club International President’s Appreciation (Leo Poornima Dilrukshi)
                        <ul>
                            <li>Winner		 - Net Growth in Membership (Omega Category)</li>
                            <li>Winner		 - Leo who Sponsored Highest Number of Members
                                (Leo Randunu Rupasinghe)</li>
                            <li>1st Runner Up	 - Highest Participation for Lions District Events</li>
                            <li>1st Runner Up	 - Best Orientation Program for New Leos</li>
                            <li>2nd Runner Up	 - International Observations</li>
                        </ul>
                    </li>
                    <br />
                </ul>
            </p>
        </div>
    );
}

export default Awards;