import React from 'react';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.inputValue} onChange={this.props.handleInput}/>
                <br/>
                <button onClick={this.props.handleSubmit}>submit</button>
            </div>
        );
    }
}

TodoInput.propTypes = {};

export default TodoInput;