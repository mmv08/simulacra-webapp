import styled from "@emotion/styled"

const Button = styled.button`
  padding: 8px 20px;
  border: 1px solid var(--text);
  border-radius: 50px;
  z-index: 50;
  min-height: 24px;
  font-size: 1.25rem;
  color: var(--text);
  background: var(--background);

  &:hover,
  &:disabled,
  &:focus {
    opacity: 0.5;
  }
`

export { Button }
