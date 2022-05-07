import Frog from './Frog'
import Layout from './Layout'
import socketIOClient from 'socket.io-client'
import { useEffect, useState } from 'react'
import Modal from './Modal'
function App() {
  const [showModal, setShowModal] = useState(false)
  const handlePress = () => {
    setShowModal((bool) => !bool)
  }
  useEffect(() => {
    const socket = socketIOClient({
      protocols: ['http'],
    })
    socket.on('fromAPI', (data) => console.log(data))
  }, [])
  return (
    <Layout>
      <Frog onPress={handlePress} />
      {showModal ? <Modal onClose={handlePress} /> : null}
    </Layout>
  )
}

export default App
