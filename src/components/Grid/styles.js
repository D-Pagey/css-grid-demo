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

export const GridWrapper = styled(Div)`
  border-color: red;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 70px 1fr 1fr 40px;
  height: 600px;
  width: 85%;
`

export const HeaderOne = styled(Div)`
  grid-column: 1 / 3;
  grid-row: 1 / 1;
`

export const Stepper = styled(Div)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

export const Content = styled(Div)`
  grid-column: 2 / 3;
  grid-row: 2 / 4;
`

export const HeaderTwo = styled(Div)`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
`

export const SummaryWrapper = styled(Div)`
  grid-column: 3 / 4;
  grid-row: 1 / 4;
`

export const SummaryText = styled(Div)`
  grid-column: 3 / 4;
  grid-row: 4 / 5;
`
