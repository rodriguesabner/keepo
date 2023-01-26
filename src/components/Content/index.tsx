import React, { useEffect, useState } from 'react'
import settings from '../../config/settings.json'
import Links from './Links'
import { ContentProps } from '../../interfaces/Content'
import { ContentWrapper } from './styles'
import Divider from './Divider'
import Video from './Video'
import Social from '../Social'

const Content = (): JSX.Element => {
  const [items, setItems] = useState<ContentProps[]>([])

  useEffect(() => {
    setUpItems()
  }, [])

  const setUpItems = (): void => {
    const contents: ContentProps[] = settings.content
    const contentsLinkGallery = contents.filter((c) => c.type === 'link-gallery')

    const indexes: any[] = contents
      .map((c, i) => c.type === 'link-gallery' ? i : null)
      .filter((i) => i !== null)

    contents.forEach((item, index) => {
      if (item.type === 'link-gallery') {
        contents[indexes[0]].linkGalleryItems = contentsLinkGallery
      }
    })

    setItems(contents)
  }

  const renderContentByType = (content: ContentProps): JSX.Element | undefined => {
    switch (content.type) {
      case 'link':
        return <Links item={content} />
      case 'video':
        return <Video item={content} />
      case 'divider':
        return <Divider item={content} />
      case 'social':
        return <Social />
      default:
        return undefined
    }
  }

  return (
      <ContentWrapper>
        {items.map((content) => (
          renderContentByType(content)
        ))}
      </ContentWrapper>
  )
}

export default Content
