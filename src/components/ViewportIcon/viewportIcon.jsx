import { h, Component, render } from "preact";
import { Link } from 'preact-router/match';
import { styler, spring, listen, pointer, value } from 'popmotion';
import "./styles.css"

class ViewportIcon extends Component {
    shouldComponentUpdate() {
        // do not re-render via diff:
        return false;
    }

    componentWillReceiveProps(nextProps) {
        // you can do something with incoming props here if you need
    }

    componentDidMount() {
        const ball = document.querySelector('.svg')
        const divStyler = styler(ball);
        const ballXY = value({ x: 0, y: 0 }, divStyler.set);

        listen(ball, "mousedown touchstart").start(e => {
            e.preventDefault();
            pointer(ballXY.get()).start(ballXY);
        });

        listen(document, "mouseup touchend").start(() => {
            spring({
                from: ballXY.get(),
                velocity: ballXY.getVelocity(),
                to: { x: 0, y: 0 },
                stiffness: 200,
                mass: 1,
                damping: 10
            }).start(ballXY);
        });
    }

    componentWillUnmount() {
        // component is about to be removed from the DOM, perform any cleanup.
    }

    render() {
        return (
            <div class="viewport-icon svg">
                <svg viewBox="0 0 32 32">
                    <title>arrow</title>
                    <path fill="#f5f5f5" d="M16 32c8.859 0 16-7.141 16-16s-7.141-16-16-16-16 7.141-16 16 7.141 16 16 16z"></path>
                    <path fill="#100" d="M23.955 13.921c-0.271-0.271-0.723-0.362-0.994-0.090l-6.96 5.785-6.96-5.785c-0.271-0.271-0.723-0.271-0.994 0.090-0.271 0.271-0.181 0.723 0.090 0.994l7.412 6.147c0.090 0.090 0.271 0.181 0.452 0.181s0.362-0.090 0.452-0.181l7.412-6.147c0.362-0.271 0.362-0.723 0.090-0.994z"></path>
                </svg>
            </div>
        );
    }
}

export default ViewportIcon;