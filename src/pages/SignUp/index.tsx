import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  ArrowLeft,
  EnvelopeSimple,
  LockSimple,
  User,
} from "@phosphor-icons/react";
import * as S from "./style";

const SignUp = () => {
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
          />
          <Input
            placeholder="E-mail"
            icon={<EnvelopeSimple size={20} color="#948F99" weight="bold" />}
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={<LockSimple size={20} color="#948F99" weight="bold" />}
          />
          <Button
            background="#FF859B"
            width="340px"
            height="56px"
            value="Cadastrar"
          />
        </S.FormLogin>

        <div>
          <ArrowLeft size={20} color="#948F99" weight="thin" />
          <p>Voltar para o login</p>
        </div>
      </S.ContainerLogin>

      <S.ContainerImage />
    </S.Container>
  );
};

export default SignUp;
