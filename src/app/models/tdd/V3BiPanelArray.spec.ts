import { V3BiPanelArray } from '../V3BiPanelArray';
import { V3BiPanelBase } from '../V3BiPanelBase';

describe('V3BiPanelArray', () => {
  let panels: V3BiPanelBase[];

  beforeEach(() => {
    panels = [
      new V3BiPanelBase('panel1', 'panel 1 label', 'panel 1 description', 1, '/panel1'),
      new V3BiPanelBase('panel2', 'panel 2 label', 'panel 2 description', 2, '/panel2')
    ];
  });

  it('should create an instance with a non-empty array', () => {
    const panelArray = new V3BiPanelArray(panels);
    expect(panelArray).toBeTruthy();
    expect(panelArray.items).toEqual(panels);
  });

  it('should create an instance with an empty array', () => {
    const panelArray = new V3BiPanelArray([]);
    expect(panelArray).toBeTruthy();
    expect(panelArray.items).toEqual([]);
  });

  it('should return the correct array of items', () => {
    const panelArray = new V3BiPanelArray(panels);
    expect(panelArray.items).toEqual(panels);
  });

  it('should update the array of items when set', () => {
    const panelArray = new V3BiPanelArray([]);

    panelArray.items = panels;
    expect(panelArray.items).toEqual(panels);
  });

  it('should handle setting an empty array', () => {
    const panelArray = new V3BiPanelArray(panels);
    panelArray.items = [];
    expect(panelArray.items).toEqual([]);
  });
});
