import frog_video from './assets/videos/frog.mp4'
import useTimeout from './hooks/useTimeout'

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
