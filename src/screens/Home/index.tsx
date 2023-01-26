import React from 'react'
import { Layout } from './styles'
import Profile from '../../components/Profile'
import Content from '../../components/Content'

const Home = (): JSX.Element => {
  return (
        <Layout>
            <Profile />
            <Content />
        </Layout>
  )
}

export default Home
