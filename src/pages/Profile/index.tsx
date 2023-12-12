import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./style";
import {
  ArrowLeft,
  Camera,
  EnvelopeSimple,
  LockSimple,
  User,
} from "@phosphor-icons/react";
import { useAuth } from "../../Context/AuthContext";
import { api } from "../../config/api";
import { useEffect, useState } from "react";
import { verifyCampVoid } from "../../helpers/verifyCampVoid";
import { validEmail } from "../../helpers/validEmail";
import { IError } from "../SignIn/types";

const Profie = () => {
  const { user, getBase64, avatar } = useAuth();
  const [imageSelected, setImageSelected] = useState<null | File>(null);
  const [name, setName] = useState<string>(user?.name || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [errorCamp, setErrorCamp] = useState<IError>({
    campVoid: false,
    emailFormat: false,
  });

  const navigate = useNavigate();
  const backHome = () => {
    navigate("/home");
  };

  const isImage = (file: File) => {
    const acceptedImageTypes = ["image/jpeg", "image/png"];
    return file && acceptedImageTypes.includes(file.type);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file && isImage(file)) {
      setImageSelected(file);
    } else {
      console.error("Selecione um arquivo de imagem válido.");
    }
  };

  const uploadImage = async () => {
    try {
      if (imageSelected) {
        const base64 = await readFile(imageSelected);

        const response = await api.post(
          "createavatar",
          { base64 },
          { timeout: 1000 }
        );

        return console.log("Imagem enviada com sucesso.", response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const readFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(new Error("Failed to read file as base64."));
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleUpdateUser = async () => {
    if (
      !verifyCampVoid(name, setErrorCamp) &&
      !verifyCampVoid(email, setErrorCamp) &&
      !validEmail(email, setErrorCamp)
    ) {
      try {
        const response = await api.put("updateuser", {
          nameUser: name,
          emailUser: email,
          passwordUser: currentPassword,
          old_password: newPassword,
        });
        console.log("oi");
        console.log(response);
        uploadImage();
        console.log(response);
      } catch (e) {
        console.log("erro ao tentar logar", e);
      }
    }
  };

  useEffect(() => {
    getBase64();
  }, []);

  return (
    <S.Container>
      <S.HeaderProfile>
        <S.ContainerBack>
          <ArrowLeft
            onClick={backHome}
            style={{ cursor: "pointer" }}
            size={20}
            color="#FF859B"
            weight="thin"
          />
          <p>Voltar</p>
        </S.ContainerBack>
      </S.HeaderProfile>
      <S.UploadContainer>
        <S.UploadButton>
          {avatar ? (
            <>
              <S.UploadImage
                src={`data:image/jpeg;base64,${avatar}`}
                alt="Imagem Selecionada"
              />
              <S.UploadInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <>
              <S.ContainerCamera>
                <Camera size={48} color="#312E38" weight="thin" />
              </S.ContainerCamera>
              <S.UploadInput type="file" accept="image/*" />
            </>
          )}
        </S.UploadButton>
      </S.UploadContainer>
      <S.ContainerInput>
        <Input
          icon={<User size={20} color="#948F99" weight="bold" />}
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          icon={<EnvelopeSimple size={20} color="#948F99" weight="bold" />}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Input
          icon={<LockSimple size={20} color="#948F99" weight="bold" />}
          type="password"
          placeholder="Senha atual"
          className="input_password"
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Input
          icon={<LockSimple size={20} color="#948F99" weight="bold" />}
          type="password"
          placeholder="Nova senha"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </S.ContainerInput>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}
      >
        <Button
          width={"485px"}
          height={"40px"}
          background="#FF859B"
          onClick={handleUpdateUser}
        >
          Salvar
        </Button>
      </div>
    </S.Container>
  );
};

export default Profie;
