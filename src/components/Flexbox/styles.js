import styled from "styled-components"

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 1250px;
`

export const Subtitle = styled.h2`
  align-self: flex-start;
  font-size: 1.25rem;
  margin-left: 2rem;
`

const Div = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  padding: 20px;
`

export const FlexWrapper = styled(Div)`
  border-color: red;
  display: flex;
  height: 600px;
  justify-content: space-between;
  width: 85%;
`

export const LeftBox = styled(Div)`
  border-color: orange;
  display: flex;
  flex-direction: column;
  flex-basis: 400px;
  flex-grow: 1;
  margin-right: 25px;
`

export const Header = styled(Div)`
  height: 70px;
`

export const ContentWrapper = styled(Div)`
  border-color: blue;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin: 20px 0;
`

export const Stepper = styled(Div)`
  border-color: black;
  height: 40%;
  width: 175px;
`

export const Content = styled(Div)`
  border-color: black;
  flex-grow: 1;
  margin-left: 20px;
`

export const RightBox = styled(Div)`
  border-color: orange;
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
`

export const SummaryWrapper = styled(Div)`
  flex-grow: 1;
`

export const SummaryCopy = styled(Div)`
  height: 40px;
  margin-top: 20px;
`
