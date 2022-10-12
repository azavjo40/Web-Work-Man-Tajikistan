export interface IOutPutUser {
  _id: string;
  username: string;
  name: string;
  roles: Array<string>;
  dateCreated: boolean;
  image?: string;
  isAds: boolean;
}

export interface IOutPutAuth {
  access_token: string;
}

export interface IOutPutAds {
  title: string;
  city: string;
  description: string;
  userId: string;
  skils: string[];
  images: string[];
  isPublish: boolean;
  dateCreated?: string;
  _id: string;
}

export interface IAdsApi {
  ads: IOutPutAds;
  user: IOutPutUser;
}
