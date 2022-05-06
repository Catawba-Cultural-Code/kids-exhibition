import sprite from './assets/frogpack_spritesheets/frog_hop_strip6.png'
import { useState } from 'react'
import { useInterval } from './useInterval'

const Frog = ({ FPS = 24, frames = 6, onPress }) => {
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
      onClick={onPress}
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
export default Frog
