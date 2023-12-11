import { Plus } from "@phosphor-icons/react";
import Button from "../../components/Button";
import Movie from "../../components/Movies";
import * as S from "./style";
import { api } from "../../config/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface IMovie {
  created_at: string;
  description: string;
  id: number;
  tags_names: string;
  rating: number;
  title: string;
  updated_at: string;
  user_id: number;
}

const Home = () => {
  const [movies, setmovies] = useState<IMovie[] | undefined>(undefined);
  const data = async () => {
    try {
      const response = await api.get("movies");
      setmovies(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <S.ContainerHome>
      <S.ContainerTitle>
        <h1>Meus filmes</h1>
        <Link to="/newmovie">
          <Button
            background="#FF859B"
            width="207px"
            height="48px"
            icon={<Plus size={20} color="#000" weight="thin" />}
          >
            Adicionar
          </Button>
        </Link>
      </S.ContainerTitle>

      <S.ContainerMovies>
        {movies &&
          movies.map((movie) => {
            return (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Movie
                  title={movie.title}
                  descrition={movie.description}
                  rating={movie.rating}
                  tags={movie.tags_names}
                />
              </Link>
            );
          })}
      </S.ContainerMovies>
    </S.ContainerHome>
  );
};

export default Home;
