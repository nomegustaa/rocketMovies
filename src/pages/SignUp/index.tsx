import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  ArrowLeft,
  EnvelopeSimple,
  LockSimple,
  User,
} from "@phosphor-icons/react";
import * as S from "./style";
import { FormEvent, useState } from "react";
import { api } from "../../config/api";
import { verifyCampVoid } from "../../helpers/verifyCampVoid";
import { validEmail } from "../../helpers/validEmail";
import { IError } from "../SignIn/types";
import MessageError from "../../components/MessageError";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<IError>({
    campVoid: false,
    emailFormat: false,
  });

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    if (
      !verifyCampVoid(email, setError) &&
      !validEmail(email, setError) &&
      !verifyCampVoid(password, setError)
    ) {
      try {
        setIsLoading(true);
        const response = await api.post("/createUser", {
          nameUser: name,
          emailUser: email,
          passwordUser: password,
        });
        setIsLoading(false);
        console.log(response);
        if (response.status === 201) {
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        }
      } catch (e) {
        console.log(e);
        setIsLoading(false);
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
          {error.emailFormat && (
            <MessageError message="Preencha com um email válido" />
          )}
          <Input
            type="password"
            placeholder="Senha"
            icon={<LockSimple size={20} color="#948F99" weight="bold" />}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.campVoid && (
            <MessageError message="Preencha todos os campos" />
          )}

          <Button
            isLoading={isLoading}
            background="#FF859B"
            width="340px"
            height="56px"
            onClick={handleForm}
          >
            Cadastrar
          </Button>
        </S.FormLogin>

        <S.ContainerBack>
          <ArrowLeft
            size={20}
            color="#FF859B"
            weight="thin"
            style={{ cursor: "pointer" }}
          />
          <p>Voltar para o login</p>
        </S.ContainerBack>
      </S.ContainerLogin>

      <S.ContainerImage />
    </S.Container>
  );
};

export default SignUp;
