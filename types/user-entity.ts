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

export interface UserLoginResponse {
  status: "success" | "fail";
  token: string;
  user: Omit<UserEntity, "id">;
}
