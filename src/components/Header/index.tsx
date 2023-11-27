import Input from "../Input";
import * as S from "./style";
const Header = () => {
  return (
    <S.ContainerHader>
      <h1>RocketMovies</h1>
      <div style={{ width: "60%" }}>
        <Input placeholder="Pesquise pelo titulo" />
      </div>

      <S.ContainerUser>
        <S.User>
          <span>Nome do usuário</span>
          <span>Sair</span>
        </S.User>

        <S.AvatarUser>{/* <Input /> */}</S.AvatarUser>
      </S.ContainerUser>
    </S.ContainerHader>
  );
};

export default Header;
