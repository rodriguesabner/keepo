import React, { useEffect, useState } from 'react'
import { Item, Layout, SocialMediaWrapper } from './styles'
import settings from '../../config/settings.json'
import { SocialInfoProps } from '../../interfaces/Config'
import FormatIcon from './FormatIcon'

const Social = (): JSX.Element => {
  const [config, setConfig] = useState<SocialInfoProps[]>([])

  useEffect(() => {
    const arr = []
    const socialContent = settings.content.filter((c) => c.type === 'social').map((c) => c.items).flat()
    for (const elem of socialContent) {
      arr.push({
        ...elem,
        icon: <FormatIcon
            // @ts-expect-error
            name={elem.name.toLowerCase()}
            color={settings.app.card_text_color}
        />
      })
    }

    // @ts-expect-error
    setConfig(arr)
  }, [])

  return (
        <Layout>
            <SocialMediaWrapper>
                {config.map((item: any, index) => (
                    <Item key={index}>
                        <a href={item.url} target={'_blank'} rel="noreferrer">
                            {item.icon}
                        </a>
                    </Item>
                ))}
            </SocialMediaWrapper>
        </Layout>
  )
}

export default Social
