import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { ArrowLeft } from "@phosphor-icons/react";

interface IText {
  text: string;
  route: string;
}

const BackToHome = ({ text, route }: IText) => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate(`/${route}`);
  };
  return (
    <S.ContainerBack>
      <ArrowLeft
        onClick={backHome}
        style={{ cursor: "pointer" }}
        size={20}
        color="#FF859B"
        weight="thin"
      />
      <p onClick={backHome}>{text}</p>
    </S.ContainerBack>
  );
};

export default BackToHome;
