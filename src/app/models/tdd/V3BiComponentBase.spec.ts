import { V3BiComponentBase } from '../V3BiComponentBase';
import {
  mockComponent_basic, mockComponent_empty_alert, mockComponent_empty_label, mockComponent_no_alert,
  mockComponent_no_description, mockComponent_no_image, mockComponent_no_label,
  mockComponent_no_parent
} from "../mock/mock-V3BiComponentBase";

describe('V3BiComponentBase', () => {
  let component: V3BiComponentBase;

  beforeEach(() => {
  });

  it('should create an instance with all attributes', () => {
    const component = mockComponent_basic;
    expect(component).toBeTruthy();
    expect(component.reference).toBe(mockComponent_basic.reference);
    expect(component.parentComponent).toBe(mockComponent_basic.parentComponent);
    expect(component.description).toBe(mockComponent_basic.description);
    expect(component.image).toBe(mockComponent_basic.image);
    expect(component.labels).toEqual(mockComponent_basic.labels);
    expect(component.alerts).toEqual(mockComponent_basic.alerts);
  });

  it('should set optional parent to undefined if not provided', () => {
    const minimalComponent = mockComponent_no_parent;
    expect(minimalComponent.parentComponent).toBeUndefined();
  });

  it('should set optional description to undefined if not provided', () => {
    const minimalComponent = mockComponent_no_description;
    expect(minimalComponent.description).toBeUndefined();
  });
  it('should set optional image to undefined if not provided', () => {
    const minimalComponent = mockComponent_no_image;
    expect(minimalComponent.image).toBeUndefined();
  });
  it('should set optional label to undefined if not provided', () => {
    const minimalComponent = mockComponent_no_label;
    expect(minimalComponent.labels).toBeUndefined();
  });

  it('should set optional alert to undefined if not provided', () => {
    const minimalComponent = mockComponent_no_alert;
    expect(minimalComponent.alerts).toBeUndefined();
  });
  it('should set empty label', () => {
    const minimalComponent = mockComponent_empty_label;
    expect(minimalComponent.labels?.length).toBe(0);
  });

  it('should set empty alert', () => {
    const minimalComponent = mockComponent_empty_alert;
    expect(minimalComponent.alerts?.length).toBe(0);
  });
});
