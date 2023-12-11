import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import teste from "../../assets/images/cinemark-login.svg";
import * as S from "./style";
import {
  ArrowLeft,
  Camera,
  EnvelopeSimple,
  LockSimple,
  User,
} from "@phosphor-icons/react";
import { useAuth } from "../../Context/AuthContext";

const Profie = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/home");
  };
  const testeIamge = true;

  return (
    <S.Container>
      <S.HeaderProfile>
        <S.ContainerBack>
          <ArrowLeft
            onClick={backHome}
            style={{ cursor: "pointer" }}
            size={20}
            color="#FF859B"
            weight="thin"
          />
          <p>Voltar</p>
        </S.ContainerBack>
      </S.HeaderProfile>
      <S.UploadContainer>
        <S.UploadButton>
          {testeIamge ? (
            <>
              <S.UploadImage src={teste} alt="Imagem Selecionada" />
              <S.UploadInput type="file" accept="image/*" />
            </>
          ) : (
            <>
              <S.ContainerCamera>
                <Camera size={48} color="#312E38" weight="thin" />
              </S.ContainerCamera>
              <S.UploadInput type="file" accept="image/*" />
            </>
          )}
        </S.UploadButton>
      </S.UploadContainer>
      <S.ContainerInput>
        <Input
          icon={<User size={20} color="#948F99" weight="bold" />}
          placeholder="Nome"
          value={user?.name}
        />
        <Input
          icon={<EnvelopeSimple size={20} color="#948F99" weight="bold" />}
          type="email"
          placeholder="E-mail"
          value={user?.email}
        />
        <br />
        <Input
          icon={<LockSimple size={20} color="#948F99" weight="bold" />}
          type="password"
          placeholder="Senha atual"
          className="input_password"
        />
        <Input
          icon={<LockSimple size={20} color="#948F99" weight="bold" />}
          type="password"
          placeholder="Nova senha"
        />
      </S.ContainerInput>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}
      >
        <Button width={"485px"} height={"40px"} background="#FF859B">
          Salvar
        </Button>
      </div>
    </S.Container>
  );
};

export default Profie;
