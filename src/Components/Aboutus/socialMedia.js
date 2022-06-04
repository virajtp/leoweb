import { SocialIcon } from 'react-social-icons';

const SocialMediaIcons = (props) => {

    function CreateIcon(props) {
        const icon = props.icon;
        const url = props.url;
    
        // return <SocialMediaIconsReact
        // borderColor="rgba(0,0,0,0.25)"
        // icon="twitter"
        // iconColor="rgba(255,255,255,1)"
        // backgroundColor="rgba(26,166,233,1)"
        // url="https://some-website.com/my-social-media-url" size="24" />
    
        // return <SocialMediaIconsReact
        //     borderColor="rgba(0,0,0,0.25)"
        //     icon={icon}
        //     iconColor="rgba(255,255,255,1)"
        //     backgroundColor="rgba(26,166,233,1)"
        //     url={url}
        //     size="24" />

            return <SocialIcon url={url} />
    
    }
    const fb = props.fb;
    const linkedIn = props.linkedIn;
    return (
        <div className="socialIcons">
            <CreateIcon icon="facebook" url={fb} />
            <CreateIcon icon="linkedin" url={linkedIn} />
        </div>
    );
}

export default SocialMediaIcons;