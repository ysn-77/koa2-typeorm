export interface IUserCreateRequest {
  userName: string;
  password: string;
}
// tslint:disable-next-line: no-empty-interface
export interface IUserLoginRequest extends IUserCreateRequest {}