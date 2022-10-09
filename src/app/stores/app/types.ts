export interface IOutPutUser {
  _id: string;
  username: string;
  name: string;
  roles: Array<string>;
  dateCreated: boolean;
  isAds: boolean;
}

export interface IOutPutAuth {
  access_token: string;
}
