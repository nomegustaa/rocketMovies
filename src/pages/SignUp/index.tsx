import Input from "../../components/Input";
import Button from "../../components/Button";
import { EnvelopeSimple, LockSimple, User } from "@phosphor-icons/react";
import * as S from "./style";
import { FormEvent, useState } from "react";
import { verifyCampVoid } from "../../helpers/verifyCampVoid";
import { validEmail } from "../../helpers/validEmail";
import { IError } from "../SignIn/types";
import MessageError from "../../components/MessageError";
import { useAuth } from "../../Context/AuthContext";
import BackToHome from "../../utils/BackToHome";

const SignUp = () => {
  const { signUp, loading, error } = useAuth();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorCamp, setErrorCamp] = useState<IError>({
    campVoid: false,
    emailFormat: false,
  });

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    if (
      !verifyCampVoid(email, setErrorCamp) &&
      !validEmail(email, setErrorCamp) &&
      !verifyCampVoid(password, setErrorCamp)
    ) {
      try {
        signUp(name, email, password);
        console.log(error);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <S.Container>
      <S.ContainerLogin>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Crie sua conta</h3>

        <S.FormLogin>
          <Input
            placeholder="Nome"
            icon={<User size={20} color="#948F99" weight="bold" />}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="E-mail"
            icon={<EnvelopeSimple size={20} color="#948F99" weight="bold" />}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorCamp.emailFormat && (
            <MessageError message="Preencha com um email válido" />
          )}
          <Input
            type="password"
            placeholder="Senha"
            icon={<LockSimple size={20} color="#948F99" weight="bold" />}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorCamp.campVoid && (
            <MessageError message="Preencha todos os campos" />
          )}

          <Button
            isLoading={loading}
            background="#FF859B"
            width="340px"
            height="56px"
            onClick={handleForm}
          >
            Cadastrar
          </Button>
        </S.FormLogin>

        <S.ContainerBack>
          <BackToHome text="Voltar para login" route="" />
        </S.ContainerBack>
        {error && <MessageError message="Email já existe, tente outro" />}
      </S.ContainerLogin>

      <S.ContainerImage />
    </S.Container>
  );
};

export default SignUp;
