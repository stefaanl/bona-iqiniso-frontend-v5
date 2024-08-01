

/**************************************** Base model (linked to backend) ************************************/
export class V3BiComponentBase {
   reference: string;
   parentComponent: string | undefined;
   description: string | undefined;
   image: string | undefined;
   labels: string[] | undefined;
   alerts: string[] | undefined;

  constructor(reference: string, parentComponent?: string, description?: string, image?: string, labels?: string[], alerts?: string[]) {
    this.reference = reference;
    this.parentComponent = parentComponent || undefined;
    this.description = description || undefined;
    this.image = image || undefined;
    this.labels = labels || undefined;
    this.alerts = alerts || undefined;
  }

}

