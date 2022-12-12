import React from 'react'
import { Layout } from './styles'
import Profile from '../components/Profile'
import Social from '../components/Social'

const Home = (): JSX.Element => {
  return (
        <Layout>
            <Profile />
            <Social />
        </Layout>
  )
}

export default Home
