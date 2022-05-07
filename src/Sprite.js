import { useState } from 'react'
import useInterval from './hooks/useInterval'

const Sprite = ({ pos: { x, y }, cols = 6, onPress, sprite }) => {
  const [{ height, width }, setDimensions] = useState({ height: 0, width: 0 })
  const [frame, setFrame] = useState(0)
  useInterval(() => {
    setFrame((i) => (i + 1) % cols)
  }, 500)
  const handleLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img
    setDimensions({
      height: offsetHeight,
      width: offsetWidth / cols,
    })
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
      onClick={onPress}
    >
      <img
        style={{ position: 'relative', left: -frame * width }}
        alt='sprite'
        onLoad={handleLoad}
        src={sprite}
      />
    </div>
  )
}
export default Sprite
