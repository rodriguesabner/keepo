import React from 'react'
import settings from '../../config/settings.json'
import { Avatar, ButtonUser, FullName, Job, Layout, SupportingText, WrapperProfile } from './styles'

const Profile = (): JSX.Element => {
  const fullName = `${settings.profile_info.firstName} ${settings.profile_info.lastName}`

  return (
        <Layout>
            <WrapperProfile>
                <FullName>
                    {fullName}
                </FullName>

                <Avatar
                    src={settings.profile_info.avatar}
                    alt={fullName}
                    draggable={false}
                />
            </WrapperProfile>

            <div>
                <Job>
                    {settings.profile_info.jobTitle}
                </Job>
                <SupportingText>
                    {settings.profile_info.supporting}
                </SupportingText>
            </div>

            <ButtonUser
                href={settings.profile_info.action.link}
                target={'_blank'}
            >
                {settings.profile_info.action.text}
            </ButtonUser>
        </Layout>
  )
}

export default Profile
