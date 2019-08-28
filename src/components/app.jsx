/** @jsx h */
import { h, Component, render, Fragment } from "preact";

class App extends Component {
    render() {
        return (
            <Fragment>
                <span>Hello</span> 
                <span>world!</span>
            </Fragment>
        );
    }
}

render(<App />, document.body);