import { IMovie } from "./types";
import * as S from "./style";
import { Star } from "@phosphor-icons/react";

const Movie = ({ title, rating, descrition, tags }: IMovie) => {
  const totalStar = 5;
  const ratingMovie = () => {
    const starts = [];
    for (let i = 1; i <= totalStar; i++) {
      const isFilld = i <= rating;
      starts.push(
        <Star
          size={20}
          color="#FF859B"
          weight={isFilld ? "fill" : "thin"}
          key={i}
        />
      );
    }
    return starts;
  };

  return (
    <S.ContainerMovie>
      <h1>{title}</h1>
      <span>{ratingMovie()}</span>
      <S.Description>{descrition}</S.Description>
      <S.ContainerTag>
        <S.Tags>{tags}</S.Tags>
      </S.ContainerTag>
    </S.ContainerMovie>
  );
};

export default Movie;
