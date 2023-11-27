import { IButton } from "./types";
import * as S from "./style";

const Button = ({ width, height, background, children, icon }: IButton) => {
  return (
    <S.Button width={width} height={height} background={background}>
      {icon}
      {children}
    </S.Button>
  );
};

export default Button;
