import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../Home"
import Flexbox from "../Flexbox"
import Grid from "../Grid"
import * as S from "./styles"

const App = () => (
  <BrowserRouter>
    <S.Wrapper>
      <S.Title>CSS Grid Demo</S.Title>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/flexbox" component={Flexbox} />
        <Route path="/grid" component={Grid} />
      </Switch>
      <S.ButtonWrapper>
        <S.Link to="/">
          <S.Button>Layout</S.Button>
        </S.Link>

        <S.Link to="/flexbox">
          <S.Button>Flexbox</S.Button>
        </S.Link>

        <S.Link to="/grid">
          <S.Button>CSS Grid</S.Button>
        </S.Link>
      </S.ButtonWrapper>
    </S.Wrapper>
  </BrowserRouter>
)

export default App
