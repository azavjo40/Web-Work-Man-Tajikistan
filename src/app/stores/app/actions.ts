import { IOutPutUser } from 'src/app/stores/app/types';

export class SetUser {
  static readonly type = '[App] set user';
  constructor(public user: IOutPutUser | null) {}
}
