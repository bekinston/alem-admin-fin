import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'

export const Auth = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })


  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }


  const loginHandler = async () => {
    try {
        const data = await request('/api/auth/login', 'POST', {...form})
        auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className="row">
          <div className="card-content black-text">
            <center><h5 className="head1">Авторизация</h5></center>
            <div>

              <div className="input-field">
                <input
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  value={form.email}
                  onChange={changeHandler}
                />
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  value={form.password}
                  onChange={changeHandler}
                />
              </div>

            </div>
          </div>
          <div className="center card-action">

            <button
              className="modal-close login1-btn z-depth-1"
              style={{marginRight: 10}}
              disabled={loading}
              onClick={loginHandler}
            >
              Вход
            </button>

          </div>

    </div>
  )
}
