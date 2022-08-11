import styled from "styled-components/native";
import { spacing } from "../../shared/theme";

export const Container = styled.View``;

export const ContentUserName = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  margin-bottom: ${spacing.n8}px;
`;

export const ContentFlatList = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const HeaderCard = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ContentDescription = styled.View`
  margin-top: ${spacing.n6}px;
`;

export const ContentImage = styled.View`
  margin-top: ${spacing.n8}px;
  justify-content: flex-end;
`;

export const ContainerCards = styled.View`
  max-width: 45%;

  border-radius: ${spacing.n8}px;
  justify-content: space-between;
`;

export const ContentButtons = styled.View`
  padding-top: ${spacing.n12}px;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

export const ContentHeaderPage = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`;
