import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root {
    color-scheme: light dark;
    --bg: #fcfcfc;
    --fg: #1c1c1c;
    --muted: #6f6f6f;
    --line: #e4e4e4;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #111111;
      --fg: #eeeeee;
      --muted: #8f8f8f;
      --line: #2a2a2a;
    }
  }

  * { box-sizing: border-box; }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--fg);
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    font-size: 15px;
    line-height: 1.6;
  }

  main {
    max-width: 34rem;
    margin: 0 auto;
    padding: 6rem 1.5rem 4rem;
  }

  h1 {
    margin: 0;
    font-size: 15px;
    font-weight: 500;
  }

  p { margin: 0 0 1rem; }

  a {
    color: var(--fg);
    text-decoration: underline;
    text-decoration-color: var(--line);
    text-underline-offset: 3px;
    transition: text-decoration-color 0.15s;
  }

  a:hover { text-decoration-color: var(--fg); }

  a:focus-visible {
    outline: 2px solid var(--fg);
    outline-offset: 3px;
  }

  .muted { color: var(--muted); }

  ul.links {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin: 2rem 0 0;
    padding: 0;
    list-style: none;
  }
`
