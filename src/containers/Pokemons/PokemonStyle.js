import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
`;

export const ContainerChart = styled.div`
  border-radius: 16px;
  color: #f34f56;
`;

export const WrapperNames = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 20px;
  gap: 15px;
`;

export const Card = styled.div`
  display: flex;
  width: 200px;
  height: 300px;
  flex-direction: column;
  border-radius: 8px;
  background-color: #D1D1D2
`;

export const Subtitle = styled
