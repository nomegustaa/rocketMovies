import Input from "../../components/Input";
import Button from "../../components/Button";
import { EnvelopeSimple, LockSimple } from "@phosphor-icons/react";
import * as S from "./style";

const SignIn = () => {
  return (
    <S.Container>
      <S.ContainerLogin>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Faça seu login</h3>

        <S.FormLogin>
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
            value="Entrar"
          />
        </S.FormLogin>

        <p>criar conta</p>
      </S.ContainerLogin>

      <S.ContainerImage />
    </S.Container>
  );
};

export default SignIn;
