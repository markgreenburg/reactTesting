import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { comment: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ comment: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }
    
    render() {
        return (
            <form
                className="comment-box"
                onSubmit={this.handleSubmit}>
                <h4>Add A Comment</h4>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.comment} />
                <div>
                    <button action="submit">Submit Component</button>
                </div>
            </form>
        );
    }
}

// Traditionally, would define a mapDispatchToProps function and pass as second
// param to connect(), but instead import * as actions from ../actions and pass
// that instead.
// This makes each action available at this.props.
export default connect(null, actions)(CommentBox);