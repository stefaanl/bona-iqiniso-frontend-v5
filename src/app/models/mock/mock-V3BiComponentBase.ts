import { V3BiComponentBase } from '../V3BiComponentBase';

export const mockComponent_basic: V3BiComponentBase = new V3BiComponentBase(
    'component-reference',
    'parent-reference',
    'description-reference',
    'image-reference',
    ['label1-reference', 'label2-reference'],
    ['alert1-reference', 'alert2-reference']
  );
export const mockComponent_no_parent: V3BiComponentBase = new V3BiComponentBase(
    'component-reference',
    undefined,
    'description-reference',
    'image-reference',
    ['label3-reference', 'label4-reference'],
    ['alert3-reference', 'alert4-reference']
  );
export const mockComponent_no_description: V3BiComponentBase = new V3BiComponentBase(
    'component-reference',
    'parentComponenht3',
    undefined,
    'image-reference',
    ['label5-reference', 'label6-reference'],
    ['alert5-reference', 'alert6-reference']
  );
export const mockComponent_no_image: V3BiComponentBase = new V3BiComponentBase(
  'component-reference',
  'parentReference',
  'descriptionReference',
  undefined,
  ['label9-reference', 'label10-reference'],
  ['alert9-reference', 'alert10-reference']
);
export const mockComponent_no_label: V3BiComponentBase = new V3BiComponentBase(
  'component5',
  'parentReference',
  'descriptionReference',
  'image-reference',
  undefined,
  ['alert9-reference', 'alert10-reference']
);
export const mockComponent_empty_label: V3BiComponentBase = new V3BiComponentBase(
  'component-reference',
  'parent-Reference',
  'description-Reference',
  'image-reference',
  [],
  ['alert9-reference', 'alert10-reference']
);
export const mockComponent_no_alert: V3BiComponentBase = new V3BiComponentBase(
  'component5',
  'parentReference',
  'descriptionReference',
  'image-reference',
  ['label9-reference', 'label10-reference']
);
export const mockComponent_empty_alert: V3BiComponentBase = new V3BiComponentBase(
  'component-reference',
  'parent-Reference',
  'description-Reference',
  'image-reference',
  ['label9-reference', 'label10-reference'],
  []
);
