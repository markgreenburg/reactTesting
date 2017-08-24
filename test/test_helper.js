import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
// import react to parse jsx in renderComponent
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// 1.) Set up testing environment to run like a browser in the CLI using jsdom
// Note: This is explicitly an anti-pattern per jsdom readme
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// 2.) Build renderComponent helper that should render a given React component
const renderComponent = (ComponentClass, props = {}, state = {}) => {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  // returns jqery object that can be used for doing jquery things
  return $(ReactDOM.findDOMNode(componentInstance));
};

// 3.) Builder helper for simulating events
// 3.1 Add simulate function to jQuery
$.fn.simulate = function(eventName, value) {
  // If value passed in, update the jQuery selector's value to the passed value
  if (value) {
    this.val(value);
  }
  // See https://facebook.github.io/react/docs/test-utils.html#simulate
  // for reference on using Simulate from React's test utils
  // 'this' refers to array of elements, need to pick top-level div
  TestUtils.Simulate[eventName](this[0]);
}

// 4.) Set up chai-jquery
chaiJquery(chai, chai.util, $);

// Make helpers available to test scripts
export { renderComponent, expect };