import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/commentBox';

describe('commentBox', () => {
  let component;

  beforeEach(() => component = renderComponent(CommentBox));

  it('has a matching class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text works', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows entered text', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });
  
    it('clears input when submitted', () => {
      component.find('textarea').simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
