import styled from 'styled-components'
import settings from '../../config/settings.json'

export const Layout = styled.div`
  width: 100%;
  display: flex;
  padding: 2em 0;
`

export const SocialMediaWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
`

export const Item = styled.li`
  margin-right: 18px;
  background-color: ${settings.app.card_color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :last-child {
    margin-right: 0;
  }
`
