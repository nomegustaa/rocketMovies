import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Input from "../Input";
import * as S from "./style";
const Header = () => {
  const { user, logout, avatar } = useAuth();
  const curretnPath = window.location.pathname;
  if (
    curretnPath === "/" ||
    curretnPath === "/signUp" ||
    curretnPath === "/profile"
  ) {
    return null;
  }

  return (
    <S.ContainerHader>
      <h1>RocketMovies</h1>
      <div style={{ width: "60%" }}>
        <Input placeholder="Pesquise pelo titulo" />
      </div>

      <S.ContainerUser>
        <S.User>
          <Link to="/profile">
            <S.NameUser>{user?.name}</S.NameUser>
          </Link>
          <S.Logout onClick={logout}>Sair</S.Logout>
        </S.User>

        {avatar ? (
          <S.AvatarUser>
            <S.UploadImage src={`data:image/jpeg;base64,${avatar}`} />
          </S.AvatarUser>
        ) : (
          <S.notAvatarUser />
        )}
      </S.ContainerUser>
    </S.ContainerHader>
  );
};

export default Header;
