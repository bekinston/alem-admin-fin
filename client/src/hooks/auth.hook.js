import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)
  const [admin, setAdmin] = useState(false)



  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken)
    setUserId(id)
    if (id == "61f7ad515860b2c1e1befbbc"){
      setAdmin(true)
    }



    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken
    }))
  }, [])


  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setAdmin(false)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token) {
      login(data.token, data.userId)
    }
    setReady(true)

  }, [login])


  return { login, logout, token, userId, ready, admin }
}
