import React, { useState } from 'react'
import Sprite from './Sprite'
import useInterval from './hooks/useInterval'
import frog_sprite from './assets/frogpack_spritesheets/frog_hop_strip6.png'
import bunny_sprite from './assets/bunny/bunnypack_assets/bunnypack_spritesheets/bunny_run_strip6.png'
const FPS = 20
const Puppeteer = ({ handlePress }) => {
  const [characters, setCharacters] = useState([
    { sprite: frog_sprite, x: 0, y: 80, right: true, name: 'FROG' },
    { sprite: bunny_sprite, x: 100, y: 50, right: false, name: 'BUNNY' },
  ])
  // const [{ x, y }, setPosition] = useState({ x: -10, y: 80 })
  useInterval(() => {
    // setPosition((pos) => {
    //   return {
    //     x: pos.x + 0.1,
    //     y: pos.y,
    //   }
    // })
  }, 1000 / FPS)
  return (
    <>
      {characters.map(({ x, y, sprite, name }) => {
        return (
          <Sprite
            key={name}
            pos={{ x, y }}
            onPress={handlePress}
            cols={6}
            sprite={sprite}
          />
        )
      })}
    </>
  )
}

export default Puppeteer
