import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import {MyFilmsList} from '../components/MyFilmsList'
import {AuthContext} from '../context/AuthContext'

export const MyFilms = () => {
  const [users, setUsers] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)



  const fetchUsers = useCallback(async () => {
    try {
      const fetched = await request('/api/film/myfilms', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setUsers(fetched)
    } catch (e) {}
  }, [request])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  if (loading) {
    return <Loader/>
  }



  return (
    <>
      {!loading && <MyFilmsList users={users} />}
    </>
  )
}
