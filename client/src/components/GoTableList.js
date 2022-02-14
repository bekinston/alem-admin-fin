import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import {GoTable} from '../components/GoTable'

export const GoTableList = () => {
  const [users, setUsers] = useState([])
  const {loading, request} = useHttp()


  const fetchUsers = useCallback(async () => {
    try {
      const fetched = await request('/api/go', 'GET', null, {

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
      {!loading && <GoTable users={users} />}
    </>
  )
}
