import {V3BiComponentBase} from "../V3BiComponent";

describe('V3BiComponentBase Tests', () => {

  it('should assign the provided reference string', () => {
    const component = new V3BiComponentBase('ref123');
    expect(component.reference).toBe('ref123');
  });

  it('should assign the provided parentComponent string', () => {
    const component = new V3BiComponentBase('ref123', 'parentComp');
    expect(component.parentComponent).toBe('parentComp');
  });

  it('should set parentComponent to undefined if not provided', () => {
    const component = new V3BiComponentBase('ref123');
    expect(component.parentComponent).toBeUndefined();
  });

  it('should assign the provided description string', () => {
    const component = new V3BiComponentBase('ref123', undefined, 'This is a description');
    expect(component.description).toBe('This is a description');
  });

  it('should set description to undefined if not provided', () => {
    const component = new V3BiComponentBase('ref123');
    expect(component.description).toBeUndefined();
  });

  it('should assign the provided image string', () => {
    const component = new V3BiComponentBase('ref123', undefined, undefined, 'image.png');
    expect(component.image).toBe('image.png');
  });

  it('should set image to undefined if not provided', () => {
    const component = new V3BiComponentBase('ref123');
    expect(component.image).toBeUndefined();
  });

  it('should assign the provided labels array', () => {
    const component = new V3BiComponentBase('ref123', undefined, undefined, undefined, ['label1', 'label2']);
    expect(component.labels).toEqual(['label1', 'label2']);
  });

  it('should set labels to undefined if not provided', () => {
    const component = new V3BiComponentBase('ref123');
    expect(component.labels).toBeUndefined();
  });

  it('should assign the provided alerts array', () => {
    const component = new V3BiComponentBase('ref123', undefined, undefined, undefined, undefined, ['alert1', 'alert2']);
    expect(component.alerts).toEqual(['alert1', 'alert2']);
  });

  it('should set alerts to undefined if not provided', () => {
    const component = new V3BiComponentBase('ref123');
    expect(component.alerts).toBeUndefined();
  });

});
