import React, { useState } from 'react'
import { Share } from 'phosphor-react'
import { Button, Layout } from './styles'
import ModalShare from '../Share/ModalShare'
import ModalQRCode from '../Share/ModalQrCode'

const Header = (): JSX.Element => {
  const [openModalShare, setOpenModalShare] = useState(false)
  const [openQrCodeModal, setOpenQrCodeModal] = useState(false)

  const shareProfile = (): void => {
    setOpenModalShare(true)
  }

  const handleOpenQrCodeModal = (): void => {
    setOpenModalShare(false)
    setOpenQrCodeModal(true)
  }

  const handleCloseQrCodeModal = (): void => {
    setOpenQrCodeModal(false)
  }

  return (
        <Layout>
            <ModalShare
                open={openModalShare}
                onClose={() => setOpenModalShare(false)}
                onCallQrCode={handleOpenQrCodeModal}
            />
            <ModalQRCode open={openQrCodeModal} onClose={handleCloseQrCodeModal}/>

            <Button onClick={() => shareProfile()}>
                <Share size={24} />
            </Button>
        </Layout>
  )
}

export default Header
