type TSignUpFormError = {
  name?: string[];
  email?: string[];
  pw?: string[];
};

type TLoginFormError = {
  email?: string[];
  pw?: string[];
};

export interface ILoginFormError {
  email?: string[];
  pw?: string[];
}

export interface ISignUpFormError {
  name?: string[];
  email?: string[];
  pw?: string[];
}
