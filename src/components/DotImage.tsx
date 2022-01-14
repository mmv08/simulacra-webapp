import styled from "@emotion/styled"

const DotImage = styled.img`
  position: absolute;
  border-radius: 50px;
  transform: scale(0.1);
  width: 100px;
  height: 100px;
  transition: transform 0.1s ease-in, border-width 0.1s ease-in-out, border-color 0.1s ease-in-out;
  border: 50px solid var(--text);

  &:hover {
    border-radius: 5px;
    transform: scale(1);
    border-width: 0;
    border-color: transparent;
  }
`

export { DotImage }
