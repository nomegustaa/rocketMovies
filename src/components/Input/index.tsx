interface IInput extends React.ComponentProps<"input"> {
  icon?: ReactNode;
}

import * as S from "./style";
import { ReactNode } from "react";
const Input = ({ icon, ...props }: IInput) => {
  return (
    <S.ContainerInput>
      {icon && <div>{icon}</div>}
      <S.Input type="text" {...props} />
    </S.ContainerInput>
  );
};

export default Input;
