import layer_0 from './assets/layers/layer_0.png'
import layer_1 from './assets/layers/layer_1.png'
import layer_2 from './assets/layers/layer_2.png'
import layer_3 from './assets/layers/layer_3.png'
import layer_4 from './assets/layers/layer_4.png'
import { Background } from './Background'

const Layout = ({ children }) => {
  return (
    <div
      className='App'
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
      }}
    >
      <Background layers={[layer_0, layer_1, layer_2, layer_3, layer_4]} />
      <div
        style={{
          position: 'absolute',
          height: '100vh',
          width: '100vw',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
