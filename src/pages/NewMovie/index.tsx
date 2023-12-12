import { CheckCircle, Plus, X, XCircle } from "@phosphor-icons/react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./style";
import { api } from "../../config/api";
import { useState } from "react";
import { IError } from "../SignIn/types";
import { verifyCampVoid } from "../../helpers/verifyCampVoid";
import MessageError from "../../components/MessageError";
import { useNavigate } from "react-router-dom";
import BackToHome from "../../utils/BackToHome";

const NewMovie = () => {
  const navigate = useNavigate();
  const [nameMovie, setNameMovie] = useState<string>("");
  const [ratingMovie, setRatingMovie] = useState<string>("");
  const [obsMovie, setObsMovie] = useState<string>("");
  const [addMark, setAddMarke] = useState<string>("");
  const [markers, setMarkers] = useState<string[]>([]);

  const [isMark, setIsMark] = useState<boolean>(false);
  const [errorCamp, setErrorCamp] = useState<IError>({
    campVoid: false,
  });

  const handleCreateMovie = async () => {
    if (
      !verifyCampVoid(nameMovie, setErrorCamp) &&
      !verifyCampVoid(ratingMovie, setErrorCamp) &&
      !verifyCampVoid(obsMovie, setErrorCamp)
    ) {
      try {
        await api.post("createmovie", {
          title: nameMovie,
          description: obsMovie,
          rating: Number(ratingMovie),
          tags: markers,
        });
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleMark = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (addMark.trim() !== "") {
      setMarkers((prevent) => [...prevent, addMark]);
      setAddMarke("");
    }
  };

  const handleRemoveMark = (indexToRemove: number) => {
    setMarkers((prevent) =>
      prevent.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <S.ContainerNewMovie>
      <BackToHome text="Voltar" route="home" />
      <h1>Novo Filme</h1>
      <S.ContainerInput>
        <div>
          <Input
            placeholder="Titulo"
            onChange={(e) => setNameMovie(e.target.value)}
          />
          {errorCamp.campVoid && (
            <MessageError message="Digite o nome do filme" />
          )}
        </div>
        <div>
          <Input
            type="number"
            placeholder="Sua nota(de 0 a 5)"
            onChange={(e) => setRatingMovie(e.target.value)}
          />
          {errorCamp.campVoid && (
            <MessageError message="Digite uma nota do filme" />
          )}
        </div>
      </S.ContainerInput>
      <div style={{ margin: "40px 0" }}>
        <S.Textarea
          name="obs"
          id="obs"
          cols={30}
          rows={10}
          placeholder="Observações"
          onChange={(e) => setObsMovie(e.target.value)}
        ></S.Textarea>
        {errorCamp.campVoid && (
          <MessageError message="Digite um observação sobre o filme" />
        )}
      </div>

      <h3>Marcadores</h3>

      <S.ContainerMarker>
        {markers.map((item, index) => (
          <S.Marker key={index}>
            <>
              <p key={index}>{item}</p>
              <X
                size={20}
                color="#FF859B"
                weight="thin"
                onClick={() => handleRemoveMark(index)}
              />
            </>
          </S.Marker>
        ))}
        <S.AddMarker onClick={() => setIsMark(!isMark)}>
          {isMark ? (
            <>
              <Input
                value={addMark}
                onChange={(e) => setAddMarke(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <CheckCircle size={32} color="#01F707" onClick={handleMark} />
              <XCircle
                size={32}
                color="#FF0000"
                onClick={() => {
                  setIsMark(false);
                  setAddMarke("");
                }}
              />
            </>
          ) : (
            <div>
              <p>Novo Marcador</p>
              <Plus size={20} color="#FF859B" weight="thin" />
            </div>
          )}
        </S.AddMarker>
      </S.ContainerMarker>

      <S.ContainerButtons>
        <Button width="100%" height="56px" background="#0D0C0F">
          Excluir Filme
        </Button>
        <Button
          width="100%"
          height="56px"
          background="#FF859B"
          onClick={handleCreateMovie}
        >
          Salvar Alterações
        </Button>
      </S.ContainerButtons>
    </S.ContainerNewMovie>
  );
};

export default NewMovie;
