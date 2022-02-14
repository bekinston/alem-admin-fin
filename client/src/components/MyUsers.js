import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import {UserList} from '../components/UserList'

export const MyUsers = () => {
  const [users, setUsers] = useState([])
  const {loading, request} = useHttp()


  const fetchUsers = useCallback(async () => {
    try {
      const fetched = await request('/api/auth', 'GET', null, {

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
      {!loading && <UserList users={users} />}
    </>
  )
}
