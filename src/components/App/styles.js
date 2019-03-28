import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
  width: 500px;
`

export const Link = styled(NavLink)``

export const Button = styled.button.attrs({
  type: "button"
})`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  cursor: pointer;
  font-size: 1.75rem;
  padding: 10px 20px;
`
