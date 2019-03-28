import React from "react"
import Layout from "../../assets/layout.png"
import * as S from "./styles"

const Home = () => (
  <S.Wrapper>
    <S.Subtitle>The layout we are planning to build:</S.Subtitle>
    <S.Image src={Layout} alt="layout" />
  </S.Wrapper>
)

export default Home
