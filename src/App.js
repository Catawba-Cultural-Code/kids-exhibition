import layer_0 from './assets/layers/layer_0.png'
import layer_1 from './assets/layers/layer_1.png'
import layer_2 from './assets/layers/layer_2.png'
import layer_3 from './assets/layers/layer_3.png'
import layer_4 from './assets/layers/layer_4.png'

const ImageLayer = ({ url }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        height: '100vh',
        width: '100vw',
      }}
    />
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
      <div style={{ position: 'absolute', height: '100vh', width: '100vw' }}>
        <p style={{ backgroundColor: 'red' }}>Test</p>
      </div>
    </div>
  )
}

export default App
