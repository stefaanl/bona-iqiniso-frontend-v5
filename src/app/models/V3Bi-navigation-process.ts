// V3Bi-navigation-process.ts

//====================================================================================================================================
export class V3BiNavigationProcessBase {
  reference: string;
  title: string;
  description: string;
  image: string;
  nodes: V3BiNavigationProcessNode[];
  links: V3BiNavigationProcessLink[];

  constructor(reference: string, title?: string, description?: string, image?: string, nodes?: V3BiNavigationProcessNode[], links?: V3BiNavigationProcessLink[]) {
    this.reference = reference;
    this.title = title || '';
    this.description = description || '';
    this.image = image || '';
    this.nodes = nodes || [];
    this.links = links || [];
  }



  // Methods
  addNode(key: string, name: string, loc: { x: number; y: number }, size: { width: number; height: number }, angle?: number, group?: string, isGroup?: boolean, rgba?: { r: number; g: number; b: number; a: number }, angularRouting?: string): void {
    const node = new V3BiNavigationProcessNode(key, name, loc, size, angle, group, isGroup, rgba, angularRouting);
    this.nodes.push(node);
  }
  addGroup(key: string, name?: string, rgba?: { r: number; g: number; b: number; a: number }) {
    const node =  new V3BiNavigationProcessNode(key, name || '', undefined, { width: 0, height: 0 }, undefined, undefined, true, rgba, undefined);
    this.nodes.push(node);
  }

  addNodeInGroup(key: string, name: string, loc: { x: number; y: number }, group: string, size?: { width: number; height: number }, angle?: number, rgba?: { r: number; g: number; b: number; a: number }) {
    const node =  new V3BiNavigationProcessNode(key, name, loc, size, angle, group, false, rgba);
    this.nodes.push(node);
  }

  addNodeNotInGroup(key: string, name: string, loc: { x: number; y: number }, size?: { width: number; height: number }, angle?: number, rgba?: { r: number; g: number; b: number; a: number }) {
    const node =  new V3BiNavigationProcessNode(key, name, loc, size, angle, undefined, false, rgba);
    this.nodes.push(node);
  }
  addLink(from: string,to: string): void {
    const link = new V3BiNavigationProcessLink(from, to);
    this.links.push(link);
  }

  toString(): string {
    const str = `reference: ${this.reference}, title: ${this.title}, description: ${this.description}, image: ${this.image}, nodes: [${this.nodes.map(node => node.toString()).join(',')}], links: [${this.links.map(link => link.toString()).join(',')}] `;
    //console.log("V3BiNavigationProcessBase.toString(): ", str);
    return str;
  }
}
//====================================================================================================================================
export class V3BiNavigationProcessNode {
  key: string;
  name: string;
  size: { width: number; height: number };
  loc: { x: number; y: number };
  angle: number | undefined;
  group: string | undefined
  isGroup: boolean | undefined;
  rgba: { r: number; g: number; b: number; a: number } | undefined;
  angularRouting: string | undefined;


  constructor(key: string = '', name: string = '', loc: { x: number; y: number } = { x: 0, y: 0 },
              size?: { width: number; height: number }, angle?: number | undefined, group?: string | undefined,
              isGroup?: boolean | undefined,
              rgba?: { r: number; g: number; b: number; a: number } | undefined,
              angularRouting?: string | undefined) {
    this.key = key;
    this.name = name;
    this.loc = loc;
    this.size = size || { width: 150, height: 50 };
    this.angle = angle || undefined;
    this.group = group|| undefined;
    this.isGroup = isGroup || false;
    this.rgba = rgba || undefined;
    this.angularRouting = angularRouting || undefined;
  }


 //toString
  toString(): string {
    const str = `key: ${this.key},
    name: ${this.name}, loc: (${this.loc?.x},${this.loc?.y}), size: (${this.size?.width},${this.size?.height}), angle: ${this.angle}, group: ${this.group}, isGroup: ${this.isGroup}, rgba: (${this.rgba?.r},${this.rgba?.g},${this.rgba?.b},${this.rgba?.a}), angularRouting: ${this.angularRouting}`;
    //console.log("V3BiNavigationProcessNode.toString(): ", str);
    return str;
  }
}
//====================================================================================================================================
export class V3BiNavigationProcessLink {
  from: string;
  to: string;
  readonly relationship: string = 'Dependency'; // Constant value

  constructor(from?: string, to?: string) {
    this.from = from || '';
    this.to = to || '';
    // Since relationship is a constant value, it's set in its declaration and not in the constructor
  }

   //toString
  toString(): string {
    const str = `from: ${this.from}, to: ${this.to}, relationship: ${this.relationship}`;
    return str;
  }
}
