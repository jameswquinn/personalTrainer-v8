/** @jsx h */
import {  h, Component, render, Fragment } from "preact";
import "./styles.css"
import CoverVid from "../../components/Covervid/covervid";
import ViewportIcon from "../../components/ViewportIcon/viewportIcon"
export default class Home extends Component {

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