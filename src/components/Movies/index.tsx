import { IMovie } from "./types";
import * as S from "./style";
import Rating from "../../utils/Rating";

const Movies = ({ title, rating, descrition, tags }: IMovie) => {
  return (
    <S.ContainerMovie>
      <h1>{title}</h1>
      <span>{Rating(rating)}</span>
      <S.Description>{descrition}</S.Description>
      <S.ContainerTag>
        {tags.split(", ").map((tag, index) => (
          <S.Tags key={index}>{tag}</S.Tags>
        ))}
      </S.ContainerTag>
    </S.ContainerMovie>
  );
};

export default Movies;
