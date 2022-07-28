import styled from "styled-components"

export const LayoutContainer = styled.div`
  margin: 5rem auto;

  display: flex;
  flex-direction: column;

  max-width: 74rem;
  height: calc(100vh - 10rem);

  padding: 2.5rem;

  background: ${({ theme }) => theme["gray-800"]};
  border-radius: 8px;
`
