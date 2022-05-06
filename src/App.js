import Frog from './Frog'
import Layout from './Layout'
import { useState } from 'react'
import Modal from './Modal'
function App() {
  const [showModal, setShowModal] = useState(false)
  const handlePress = () => {
    setShowModal((bool) => !bool)
  }

  return (
    <Layout>
      <Frog onPress={handlePress} />
      {showModal ? <Modal onClose={handlePress} /> : null}
    </Layout>
  )
}

export default App
