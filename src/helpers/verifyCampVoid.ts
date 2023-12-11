import { IError } from "../pages/SignIn/types";

export const verifyCampVoid = (
  camp: string,
  setError: React.Dispatch<React.SetStateAction<IError>>
) => {
  if (camp.trim() === "") {
    setError({ campVoid: true });
    return true;
  }
  setError({ campVoid: false });
  return false;
};
