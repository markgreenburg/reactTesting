import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/commentList';

describe('comment list', () => {
  let component;
  beforeEach(() => {
    const props = { comments: ['new comment', 'second comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('renders an <li> for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('renders each comment provided', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('second comment');
  });
});