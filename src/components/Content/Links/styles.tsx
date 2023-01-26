import styled from 'styled-components'
import settings from '../../../config/settings.json'

export const Layout = styled.li`
  background-color: ${settings.app.card_color};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  height: 84px;
  display: flex;
  flex-direction: row;

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    width: 100%;
  }
`

export const Title = styled.h6`
  color: ${settings.app.card_text_color};
  font-size: 0.875rem;
  font-weight: bold;
`

export const Emoji = styled.h3`
  color: ${settings.app.card_text_color};
  font-size: 32px;
  font-weight: bold;
  padding: 0 10px;
`

export const Description = styled.p`
  color: ${settings.app.card_text_color};
  font-size: 13px;
  opacity: .6;
`
