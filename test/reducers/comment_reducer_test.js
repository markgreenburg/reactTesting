import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comment_reducer';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('commentReducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles SAVE_COMMENT action type', () => {
    const commentData = {
      type: SAVE_COMMENT,
      payload: 'this is a new comment',
    };
    expect(commentReducer([], commentData)).to.eql(['this is a new comment']);
  });
})