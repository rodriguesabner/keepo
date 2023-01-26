import React from 'react'
import {
  Si500Px,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiOnlyfans,
  SiTwitch,
  SiTwitter,
  SiYoutube,
  SiFacebook,
  SiWhatsapp,
  SiDiscord,
  SiSpotify,
  SiFigma,
  SiClubhouse,
  SiNpm,
  SiInternetexplorer,
  SiJira
} from 'react-icons/si'

const FormatIcon = ({ name, color }: { name: string, color: string }): JSX.Element => {
  const sizeIcon = 20

  const renderIcon = (): JSX.Element | undefined => ({
    github: <SiGithub size={sizeIcon} color={color}/>,
    email: <SiGmail size={sizeIcon} color={color}/>,
    youtube: <SiYoutube size={sizeIcon} color={color}/>,
    onlyFans: <SiOnlyfans size={sizeIcon} color={color}/>,
    twitter: <SiTwitter size={sizeIcon} color={color}/>,
    twitch: <SiTwitch size={sizeIcon} color={color}/>,
    '500px': <Si500Px size={sizeIcon} color={color}/>,
    instagram: <SiInstagram size={sizeIcon} color={color}/>,
    linkedin: <SiLinkedin size={sizeIcon} color={color}/>,
    facebook: <SiFacebook size={sizeIcon} color={color}/>,
    whatsapp: <SiWhatsapp size={sizeIcon} color={color}/>,
    discord: <SiDiscord size={sizeIcon} color={color}/>,
    spotify: <SiSpotify size={sizeIcon} color={color}/>,
    figma: <SiFigma size={sizeIcon} color={color}/>,
    clubhouse: <SiClubhouse size={sizeIcon} color={color}/>,
    npm: <SiNpm size={sizeIcon} color={color}/>,
    site: <SiInternetexplorer size={sizeIcon} color={color}/>,
    jira: <SiJira size={sizeIcon} color={color}/>
  })[name]

  return (
        <>
            {renderIcon()}
        </>
  )
}

export default FormatIcon
