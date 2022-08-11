import React from "react";
import * as S from "./styles";

interface PageProps {
  children: JSX.Element;
  header?: JSX.Element;
}

const Page = ({ children, header }: PageProps) => {
  return (
    <S.Container>
      {header && <S.Header>{header}</S.Header>}
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
export default Page;
