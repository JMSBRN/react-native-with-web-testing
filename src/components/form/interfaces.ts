export interface UserState {
    username: string;
    password: string;
    email: string;
}

export interface FormInputs {
    name: string;
    placeholder: string;
    secureTextEntry?: boolean;
    pattern: RegExp;
  }