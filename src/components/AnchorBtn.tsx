import styled from "@emotion/styled"

const AnchorBtn = styled.a`
  text-transform: uppercase;
  padding: 8px 20px;
  border: 1px solid var(--text);
  border-radius: 50px;
  min-height: 24px;
  font-size: 1.25rem;
  color: var(--text);
  background: var(--background);

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

export { AnchorBtn }
