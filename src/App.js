import layer_0 from './assets/layers/layer_0.png'
import layer_1 from './assets/layers/layer_1.png'
import layer_2 from './assets/layers/layer_2.png'
import layer_3 from './assets/layers/layer_3.png'
import layer_4 from './assets/layers/layer_4.png'
import sprite from './assets/frogpack_spritesheets/frog_hop_strip6.png'
import { useState } from 'react'
import { useInterval } from './useInterval'
import { ImageLayer } from './ImageLayer'

const Frog = ({ FPS = 24, frames = 6 }) => {
  const [{ height, width }, setDimensions] = useState({ height: 0, width: 0 })
  const [{ x, y }, setPosition] = useState({ x: -10, y: 80 })
  const [frame, setFrame] = useState(0)
  useInterval(() => {
    setFrame((i) => (i + 1) % frames)
  }, 500)
  const handleLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img
    setDimensions({
      height: offsetHeight,
      width: offsetWidth / frames,
    })
  }
  useInterval(() => {
    setPosition((pos) => {
      return {
        x: pos.x + 0.1,
        y: pos.y,
      }
    })
  }, 1000 / FPS)
  const handlePress = () => {
    console.log('frog')
  }
  return (
    <div
      style={{
        width,
        height,
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center',
        transform: 'scale(3)',
        position: 'absolute',
        left: `${x}vw`,
        top: `${y}vh`,
        cursor: 'pointer',
      }}
      onClick={handlePress}
    >
      <img
        style={{ position: 'relative', left: -frame * width }}
        alt='frog'
        onLoad={handleLoad}
        src={sprite}
      />
    </div>
  )
}
function App() {
  return (
    <div
      className='App'
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
      }}
    >
      <ImageLayer url={layer_0} />
      <ImageLayer url={layer_1} />
      <ImageLayer url={layer_2} />
      <ImageLayer url={layer_3} />
      <ImageLayer url={layer_4} />
      <div
        style={{
          position: 'absolute',
          height: '100vh',
          width: '100vw',
        }}
      >
        <p style={{ backgroundColor: 'red' }}>Test</p>
        <Frog />
      </div>
    </div>
  )
}

export default App
