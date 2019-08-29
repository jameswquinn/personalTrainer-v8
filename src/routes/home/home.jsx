/** @jsx h */
import {  h, Component, render, Fragment } from "preact";
import "./styles.css"
import CoverVid from "../../components/Covervid/covervid";
import ViewportIcon from "../../components/ViewportIcon/viewportIcon"
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            videoSrc: "http://techslides.com/demos/sample-videos/small.mp4",
            imgSrc: require("../../img/cropped_landing_page.png").src

        };
    }

    render() {
        return (
            <Fragment>
                <header>
                <ViewportIcon />
                <CoverVid />
                </header>
            </Fragment>
        );
    }
}