import * as S from "./style";

const MessageError = ({ message }: { message: string }) => {
  return <S.MessageError>{message}</S.MessageError>;
};

export default MessageError;
