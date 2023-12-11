import { IButton } from "./types";
import * as S from "./style";

const Button = ({
  width,
  height,
  background,
  children,
  icon,
  isLoading,
  ...props
}: IButton) => {
  return (
    <S.Button
      width={width}
      height={height}
      background={background}
      disabled={isLoading}
      {...props}
    >
      {icon}
      {isLoading ? <span className="loader"></span> : children}
    </S.Button>
  );
};

export default Button;
