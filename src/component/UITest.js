import React from 'react';
import TodoInput from './TodoInput';
class UiTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                UI test
                <h1>{this.props.inputValue}</h1>
                <br/>
                <TodoInput
                    inputValue={this.props.inputValue}

                />
            </div>
        );
    }
}

UiTest.propTypes = {};

export default UiTest;