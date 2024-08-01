
/****************************************V3BiImageBase*****************************************************/
export class V3BiUserBase {
  username: string;
  firstName: string;
  lastName: string;
  organization: string;
  email:string;
  role: string;
  // @ts-ignore
  password: string;
  preferredLanguage: string;


  constructor(username: string, firstName: string, lastName: string, organization: string, email: string, preferredLanguage: string, role: string) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.organization = organization;
    this.email = email;
    this.preferredLanguage = preferredLanguage;
    this.role = role;
  }


}

