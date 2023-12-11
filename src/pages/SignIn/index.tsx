import Input from "../../components/Input";
import Button from "../../components/Button";
import { EnvelopeSimple, LockSimple } from "@phosphor-icons/react";
import * as S from "./style";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import { validEmail } from "../../helpers/validEmail";
import MessageError from "../../components/MessageError";
import { IError } from "./types";
import { verifyCampVoid } from "../../helpers/verifyCampVoid";

const SignIn = () => {
  const { signIn, error, loading } = useAuth();

  const [emailUser, setEmailUser] = useState<string>("");
  const [passwordUser, setPasswordUser] = useState<string>("");

  const [errorCamp, setErrorCamp] = useState<IError>({
    campVoid: false,
    emailFormat: false,
  });

  const handleForm = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (
      !verifyCampVoid(emailUser, setErrorCamp) &&
      !validEmail(emailUser, setErrorCamp) &&
      !verifyCampVoid(passwordUser, setErrorCamp)
    ) {
      try {
        signIn(emailUser, passwordUser);
      } catch (e) {
        console.log("erro ao tentar logar", e);
      }
    }
  };

  return (
    <S.Container>
      <S.ContainerLogin>
        <h1>RocketMovies</h1>
        <S.Description>
          Aplicação para acompanhar tudo que assistir.
        </S.Description>
        <h3>Faça seu login</h3>
        <S.FormLogin>
          <Input
            placeholder="E-mail"
            icon={<EnvelopeSimple size={20} color="#948F99" weight="bold" />}
            onChange={(e) => setEmailUser(e.target.value)}
          />
          {errorCamp.emailFormat && (
            <MessageError message="formato de email inválido" />
          )}
          <Input
            type="password"
            placeholder="Senha"
            icon={<LockSimple size={20} color="#948F99" weight="bold" />}
            onChange={(e) => setPasswordUser(e.target.value)}
          />
          <Button
            isLoading={loading}
            onClick={handleForm}
            background="#FF859B"
            width="340px"
            height="56px"
          >
            Entrar
          </Button>
          {errorCamp.campVoid && (
            <MessageError message="Preencha os campos email e senha" />
          )}
          {error && <MessageError message="Email e senha invalidos" />}
        </S.FormLogin>

        <S.LinkSignUp to="/signUp">criar conta</S.LinkSignUp>
      </S.ContainerLogin>

      <S.ContainerImage />
    </S.Container>
  );
};

export default SignIn;
