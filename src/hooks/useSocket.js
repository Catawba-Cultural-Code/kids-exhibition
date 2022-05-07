import { createContext, useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    const sock = io({
      protocols: ['http'],
    })
    setSocket(sock)
    return () => sock.disconnect()
  }, [])
  return socket == null ? null : (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

const useSocket = () => {
  return useContext(SocketContext)
}

export default useSocket
