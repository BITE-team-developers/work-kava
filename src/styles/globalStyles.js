import { css } from '@emotion/react';
import { theme } from './theme';

import ttfRegular from '../fonts/Inter-Regular.ttf';
import ttfBold from '../fonts/Inter-Bold.ttf';
import ttfImpact from '../fonts/impact.ttf';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
    src: url('${ttfRegular}') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 700;
    font-style: normal;
    src: url('${ttfBold}') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Impact';
    font-weight: 400;
    font-style: normal;
    src: url('${ttfImpact}') format('truetype');
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
