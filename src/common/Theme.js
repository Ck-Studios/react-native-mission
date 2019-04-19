import React from "react";
import styled from "styled-components/native";

export const GrayColor = '#35353c';
export const LightGrayColor = '#787878';
export const PinkColor = '#ff24b2';

export const RowView = styled.View`
  flex-direction: row;
`;

export const ContentDivider = styled.View`
  flex: ${({flex}) => flex ? flex : 1};
`;