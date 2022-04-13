
import { Grid } from '@material-ui/core';
import president from "./Exco & Dir/Randunu.jpg";
import secretary from "./Exco & Dir/Rajinee.png";
import vp from "./Exco & Dir/Sanka.jpg"
import treasurer from "./Exco & Dir/Nethmi.jpg"
import asecretary from "./Exco & Dir/Melissa.png"
import atreasurer from "./Exco & Dir/Sanduni.jpg"
import { SocialMediaIconsReact } from 'social-media-icons-react';

import SocialMediaIcons from "./socialMedia"
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const ExcoDir = () => {

    const images = importAll(require.context('./Exco & Dir', false, /\.(png|jpe?g|svg)$/));


    // const president = 'Randunu.jpg';
    return (
        <div className="exco">

            <h1 style={{ fontSize: '45px' }}>Executive Board 2021/22</h1>
            {/* <div id="president">
                <img src={president} height='280px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                <h2>President</h2>
                <h3>Leo Randunu Rupasinghe</h3>
            </div> */}


            {/* <Grid container justify="center" alignItems="center" spacing={1}>
                <Grid item xs={16} sm={8} md={5}>
                    <img src={secretary} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h2>Secretary</h2>
                    <h3>Leo Rajinee Mahaushadhee</h3>
                </Grid>
                
                <Grid item xs={8} sm={8} md={5}>
                    <img src={vp} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h2>Vice President</h2>
                    <h3>Leo Sanka Samarasekara</h3>
                </Grid>
            </Grid> */}

            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={12} sm={8} md={4}>
                    <h2>Secretary</h2>
                    <img src={secretary} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h3>Leo Rajinee Mahaushadhee</h3>
                    <SocialMediaIcons fb = "https://www.facebook.com/rajinee98" linkedIn = "https://www.linkedin.com/in/rajinee/"/>
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    <h2>President</h2>
                    <img src={president} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h3>Leo Randunu Rupasinghe</h3>
                    <SocialMediaIcons fb = "https://www.facebook.com/randunu.rupasinghe" linkedIn = "https://www.linkedin.com/in/randunu-rupasinghe-140059235/"/>
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    <h2>Vice President</h2>
                    <img src={vp} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h3>Leo Sanka Samarasekara</h3>
                    <SocialMediaIcons fb = "https://www.facebook.com/sanka.samarasekara.1" linkedIn = "https://www.linkedin.com/in/sanka-prabath-samarasekara-449b7a20b/"/>
             </Grid>
            </Grid>
            <br/><br/>
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={12} sm={8} md={4}>
                    <h2>Treasurer</h2>
                    <img src={treasurer} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h3>Leo Nethmi Sarada</h3>
                    <SocialMediaIcons fb = "https://www.facebook.com/aish.aish.7165" linkedIn = "https://www.linkedin.com/in/nethmi-sarada-b18924201/"/>
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    <h2>Asst. Secretary</h2>
                    <img src={asecretary} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h3>Leo Melissa Handapangoda</h3>
                    <SocialMediaIcons fb = "https://www.facebook.com/melissa.handapangoda" linkedIn = "https://www.linkedin.com/in/melissa-handapangoda-530503200/"/>
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    <h2>Asst. Treasurer</h2>
                    <img src={atreasurer} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h3>Leo Sanduni Maheshika</h3>
                    <SocialMediaIcons fb = "https://www.facebook.com/randunu.rupasinghe" linkedIn = "https://www.linkedin.com/in/randunu-rupasinghe-140059235/"/>
                </Grid>
            </Grid>
<br/>
            {/* <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="twitter"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(26,166,233,1)"
                url="https://some-website.com/my-social-media-url" size="48" />, */}
            {/* document.getElementById('root')); */}
        </div>
    );
}

export default ExcoDir;