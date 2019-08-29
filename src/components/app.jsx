/** @jsx h */
import { h, Component, render, Fragment } from "preact";
import { Router } from "preact-router";
import AsyncRoute from 'preact-async-route';

import "./styles/global.css"
import Nav from  "./Nav/nav";
import Home from "../routes/home/home";
 

class App extends Component {
    render() {
        return (
            <div id="root" >
                <Nav />
                <Router>
                    <Home path="/" />
                    <AsyncRoute
                        path="/about"
                        getComponent={() =>
                            import('../routes/about/about').then(module => module.default)
                        }
                    />
                    <AsyncRoute
                        path="/profile/:optional?/:params?"
                        getComponent={() =>
                            import('../routes/profile/profile').then(module => module.default)
                        }
                    />
                    <AsyncRoute
                        path="/contact"
                        getComponent={() =>
                            import('../routes/contact/contact').then(module => module.default)
                        }
                    />
                </Router>
            </div>
        );
    }
}
render(<App />, document.body);