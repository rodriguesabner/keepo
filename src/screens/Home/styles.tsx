import styled from 'styled-components'

export const Layout = styled.div`
  padding-top: 1em;
  padding-bottom: 2em;

  @media (min-width: 768px) {
    max-width: min(601px, 100%);
    margin: 0 auto;
    overflow: auto;
  }
`
