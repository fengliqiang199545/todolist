import React from 'react';

class TodoInputTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.inputValue}/>
            </div>
        );
    }
}

TodoInputTest.propTypes = {};

export default TodoInputTest;