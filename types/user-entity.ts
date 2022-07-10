import { ServiceResponse } from "./services";

export interface UserLoginForm {
  email: string;
  password: string;
}

export interface UserEntity extends UserLoginForm {
  id: string;
  name: string;
}

export interface UserRegistrationForm extends UserLoginForm {
  name: string;
  passwordConfirm?: string;
}

export interface UserRegistrationResponse extends ServiceResponse {}

export interface UserLoginResponse extends ServiceResponse {
  token: string;
  user: Omit<UserEntity, "id">;
}
