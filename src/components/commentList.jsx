import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
    const commentList = props.comments.map((comment) => {
        return <li key={comment}>{comment}</li>
    });

    return (
        <ul className="comment-list">
            {commentList}
        </ul>
    );
}

const mapStateToProps = (state) => ({ comments: state.comments });

export default connect(mapStateToProps)(CommentList);