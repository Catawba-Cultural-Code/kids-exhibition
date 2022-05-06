import frog_video from './assets/videos/frog.mp4'
import { useEffect, useCallback, useRef } from 'react'

// React hook for delaying calls with time
// returns callback to use for cancelling

const useTimeout = (
  callback, // function to call. No args passed.
  // if you create a new callback each render, then previous callback will be cancelled on render.
  timeout // delay, ms (default: immediately put into JS Event Queue)
) => {
  const timeoutIdRef = useRef()
  const cancel = useCallback(() => {
    const timeoutId = timeoutIdRef.current
    if (timeoutId) {
      timeoutIdRef.current = undefined
      clearTimeout(timeoutId)
    }
  }, [timeoutIdRef])

  useEffect(() => {
    timeoutIdRef.current = setTimeout(callback, timeout)
    return cancel
  }, [callback, timeout, cancel])

  return cancel
}
const Modal = ({ onClose }) => {
  useTimeout(onClose, 5 * 1000)
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div
        style={{
          width: '90%',
          height: '90%',
          backgroundColor: 'white',
          borderRadius: '10px',
          overflow: 'hidden',
          position: 'relative',
          display: 'grid',
          placeItems: 'center',
          boxShadow: '2px 2px 2px rgba(0,0,0,0.8)',
        }}
      >
        <video
          src={frog_video}
          style={{ width: '100%', position: 'absolute' }}
          loop={true}
          autoPlay={true}
        />
        <h1
          style={{
            fontFamily: "'Noto Sans', sans-serif",
            fontSize: '10em',
            position: 'absolute',
            zIndex: 5,
            color: 'whitesmoke',
            textShadow: '2px 2px 2px rgba(0,0,0,0.8)',
          }}
        >
          araray
        </h1>
      </div>
    </div>
  )
}
export default Modal
