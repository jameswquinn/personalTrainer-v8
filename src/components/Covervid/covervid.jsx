import { h, Component, render } from "preact";
import { Link } from 'preact-router/match';
import "./styles.css"

class CoverVid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            videoSrc: "http://techslides.com/demos/sample-videos/small.mp4",
            imgSrc: require("../../img/cropped_landing_page.png").src 
                
        };
    }

    componentDidMount() {
        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ) {
            this.setState({ isMobile: true });
        }
    }

    renderContent() {
        if (this.state.isMobile) {
            return <img src={this.state.imgSrc} alt="#" />;
        } else {
            return (
                <video
                    src={this.state.videoSrc}
                    autoplay
                    loop
                    playsinline
                    muted
                    poster={this.state.imgSrc}
                />
            );
        }
    }

    render() {
        return <div class="covervid">{this.renderContent()}</div>;
    }
}

export default CoverVid;