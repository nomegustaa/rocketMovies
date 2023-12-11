import { Clock } from "@phosphor-icons/react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import { api } from "../../config/api";
import { useEffect, useState } from "react";
import { IMovie } from "../Home";
import { useAuth } from "../../Context/AuthContext";
import Rating from "../../utils/Rating/";
import BackToHome from "../../utils/BackToHome";

const Movie = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [movie, setMovie] = useState<IMovie[]>();

  const movieById = async () => {
    try {
      const response = await api.get(`moviesById/${id}`);
      setMovie(response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    movieById();
  }, []);

  return (
    <S.ContainerNewMovie>
      <BackToHome />

      {movie &&
        movie.map((movieById) => {
          return (
            <div key={movieById.id}>
              <div>
                <h1>{movieById.title}</h1>
                <span>{Rating(movieById.rating)}</span>
              </div>
              <S.ContainerUser>
                <img src="imagem" alt="imagem do usuário" />
                <p>Adicionado por {user?.name}</p>
                <Clock size={20} color="#FF859B" weight="thin" />
                <p>{movieById.created_at}</p>
              </S.ContainerUser>
              <S.ContainerMarker>
                {movieById.tags_names.split(", ").map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </S.ContainerMarker>
              <S.DescriptionMovie>{movieById.description}</S.DescriptionMovie>
            </div>
          );
        })}
    </S.ContainerNewMovie>
  );
};

export default Movie;
