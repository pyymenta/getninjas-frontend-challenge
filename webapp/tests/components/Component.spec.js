
import { assert } from 'chai';
import { JSDOM } from 'jsdom';
import Component from '../../src/scripts/components/Component/Component';

const { document } = (new JSDOM('...')).window;

describe('Component class', () => {
  it('should component instance has render method', () => {
    const component = new Component();
    assert.exists(component.render);
  });

  it('should a component element render into another html element', () => {
    const componentDiv = new Component();
    const htmlContainerElement = document.createElement('div');
    componentDiv.elem = document.createElement('div');
    componentDiv.render(htmlContainerElement);
    assert.isTrue(htmlContainerElement.hasChildNodes(componentDiv.elem));
  });
});
