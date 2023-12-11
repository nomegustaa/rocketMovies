import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { ArrowLeft } from "@phosphor-icons/react";

const BackToHome = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/home");
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
      <p onClick={backHome}>Voltar</p>
    </S.ContainerBack>
  );
};

export default BackToHome;
