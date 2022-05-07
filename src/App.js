import { useEffect, useState } from 'react'
import Layout from './Layout'
import Modal from './Modal'
import useSocket from './hooks/useSocket'
import Puppeteer from './Puppeteer'
function App() {
  const [showModal, setShowModal] = useState(false)
  const socket = useSocket()
  const handlePress = () => {
    socket.emit('toAPI', { event: 'START', id: 'FROG' })
    setShowModal((bool) => !bool)
  }
  const closeModal = () => {
    socket.emit('toAPI', { event: 'STOP', id: 'FROG' })
    setShowModal((bool) => !bool)
  }
  useEffect(() => {
    if (socket !== null) {
      socket.on('fromAPI', (data) => console.log(data))
    }
  }, [socket])
  return (
    <Layout>
      <Puppeteer handlePress={handlePress} />
      {showModal ? <Modal onClose={closeModal} /> : null}
    </Layout>
  )
}

export default App
