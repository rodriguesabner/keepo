import React from 'react'
import { Emoji, Layout, Title } from './styles'
import { ContentProps } from '../../../interfaces/Content'

const Links = ({ item }: { item: ContentProps }): JSX.Element => {
  return (
        <Layout>
            <a href={item.url} target={'_blank'} rel="noreferrer">
                <Title>
                    {item.title}
                </Title>

                <Emoji>
                    {(item.emoji != null || item.emoji !== '') && item.emoji}
                </Emoji>
            </a>
        </Layout>
  )
}

export default Links
