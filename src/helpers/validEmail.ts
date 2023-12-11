import { IError } from "../pages/SignIn/types";

export const validEmail = (
  email: string,
  setError: React.Dispatch<React.SetStateAction<IError>>
) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailRegex.test(email);
  if (!isValid) {
    setError({ emailFormat: true });
    return true;
  }
  setError({ emailFormat: false });
  return false;
};
