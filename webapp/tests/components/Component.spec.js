
import { assert } from 'chai';
import { JSDOM } from 'jsdom'
const { document } = (new JSDOM(`...`)).window;

import Component from '../../src/scripts/components/Component/Component'

describe('Component class', () => {
  it('should component instance has render method', () => {
    const component = new Component();
    assert.exists(component.render)
  });
  
  it('should a component element render into another html element', () => {
    let componentDiv = new Component();
    let htmlContainerElement = document.createElement('div');
    componentDiv.elem = document.createElement('div');
    componentDiv.render(htmlContainerElement);
    assert.isTrue(htmlContainerElement.hasChildNodes(componentDiv.elem))
  });
})

