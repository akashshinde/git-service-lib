export class GitSource {
  url: string;
  secretType: SecretType;
  secretContent: any;
  constructor(url: string,
                secretType: SecretType,
                secretContent: any) {
        this.url = url;
        this.secretType = secretType ? secretType : SecretType.NO_AUTH;
        this.secretContent = secretContent;
    }
}

export enum SecretType {
    NO_AUTH,
    BASIC_AUTH,
    SSH,
    PERSONAL_ACCESS_TOKEN,
    OAUTH,
}
