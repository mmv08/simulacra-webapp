import { useTheme } from "next-themes"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 46px;
  height: 20px;
  position: relative;
  background-color: transparent;
`

const ToggleVisual = styled.span<{ darkTheme: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.4s;
  border-radius: 100px;
  width: 100%;
  padding: 2px;
  border: 1px solid var(--text);

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    background-color: var(--text);
    transition: 0.4s;
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none' viewBox='0 0 32 32'%3E%3Cpath fill='% #EFEEEC' d='M16 4a1.714 1.714 0 110 3.429A1.714 1.714 0 0116 4zM24.485 7.515a1.714 1.714 0 11-2.424 2.424 1.714 1.714 0 012.424-2.424zM7.429 16A1.714 1.714 0 104 16a1.714 1.714 0 003.429 0zM26.286 14.286a1.714 1.714 0 110 3.428 1.714 1.714 0 010-3.428zM9.94 24.485a1.714 1.714 0 10-2.425-2.424 1.714 1.714 0 002.424 2.424zM24.485 22.06a1.714 1.714 0 11-2.424 2.425 1.714 1.714 0 012.424-2.424zM16 24.571A1.714 1.714 0 1116 28a1.714 1.714 0 010-3.429zM9.94 7.515a1.714 1.714 0 10-2.425 2.424 1.714 1.714 0 002.424-2.424zM22 16a6 6 0 11-12 0 6 6 0 0112 0z'/%3E%3C/svg%3E%0A");

    ${(props) =>
      props.darkTheme &&
      `
        background-color: var(--text);
    content: "";
    transform: translateX(26px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none' viewBox='0 0 32 32'%3E%3Cpath fill='% 141414' d='M25.955 16.163a8 8 0 01-10.91-10.91C9.97 5.732 6 10.005 6 15.206c0 5.523 4.477 10 10 10 5.2 0 9.474-3.97 9.955-9.044z'/%3E%3C/svg%3E%0A");
    `}
  }
`

const Label = styled.label`
  display: block;
  width: 100%;
  height: 100%;

  &:focus {
    outline: 1px solid blue;
  }
`

const Input = styled.input`
  display: block;
  position: absolute;
  width: 100%;
  height: 15px;
  opacity: 0;
  top: 0;
  left: 0;
  cursor: pointer;
`

function ThemeToggler(): React.ReactElement {
  const { theme, setTheme } = useTheme()
  const darkTheme = theme === "dark"

  return (
    <Wrapper>
      <Label htmlFor="toggleTheme" title="Toggle theme">
        <ToggleVisual
          role="checkbox"
          aria-checked={darkTheme}
          tabIndex={0}
          onKeyPress={() => setTheme(theme === "light" ? "dark" : "light")}
          className="toggleTheme"
          darkTheme={darkTheme}
        />
      </Label>
      <Input
        id="toggleTheme"
        name="theme"
        tabIndex={-1}
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </Wrapper>
  )
}

export { ThemeToggler }
