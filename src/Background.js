import { ImageLayer } from './ImageLayer'

export const Background = ({ layers }) => {
  return (
    <>
      {layers.map((o, i) => {
        return <ImageLayer key={i} url={o} />
      })}
    </>
  )
}
