import { IOutPutUser } from 'src/app/stores/app/types';

export class SetUser {
  static readonly type = '[App] set user';
  constructor(public user: IOutPutUser | null) {}
}

export class SetLanguage {
  static readonly type = '[App] set language';
  constructor(public language: string | null) {}
}

export class SetAds {
  static readonly type = '[App] set ads';
  constructor(public data: any) {}
}
