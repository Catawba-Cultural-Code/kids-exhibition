export const ImageLayer = ({ url }) => {
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
