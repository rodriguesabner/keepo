import styled from 'styled-components'
import settings from '../../config/settings.json'

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
`

export const WrapperProfile = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const Avatar = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;
`

export const FullName = styled.h3`
  margin-top: 13px;
  width: 186.59px;
  font-size: 1.5rem;
  line-height: 2rem;
  display: inline-block;
  white-space: pre-line;
  font-family: 'Poppins', sans-serif;
`

export const Job = styled.h1`
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  line-height: 3rem;
  font-weight: 600;
  width: 100%;
  padding: 2em 0 0 0;
`

export const SupportingText = styled.h5`
  margin-top: 16px;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
`

export const ButtonUser = styled.a`
  cursor: pointer;
  color: ${settings.app.card_text_color};
  background-color: ${settings.app.card_color};
  border-radius: 6.25rem;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  padding: 1rem 1.5rem;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1rem;
  text-decoration: none;
  margin-top: 2em;
`
