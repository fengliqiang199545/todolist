import React from 'react';
import '../assets/helloworld.css'
import {CSSTransition} from "react-transition-group";
import {statement} from "@babel/template";
class ChangeCss extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
        };

        this.changeShow = this.changeShow.bind(this);

    }

    changeShow(){
       this.setState({
           show: !this.state.show
       })
    }

    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}

                >
                    <h1>hello world</h1>
                </CSSTransition>
                <button onClick={this.changeShow}>toggle</button>
            </div>
        );
    }
}

ChangeCss.propTypes = {};

export default ChangeCss;