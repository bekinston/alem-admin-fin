import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
import {NavLink, useNavigate} from 'react-router-dom'

export const Create = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const history = useNavigate()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: '', headname:'', description:'', companyname:'', tel:'', iban:'', bank:''
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


  const registerHandler = async () => {
    try {
        const data = await request('/api/auth/register', 'POST', {...form})
        window.location.reload(false)
        message(data.message)

    } catch (e) {}
  }

  return (
    <div className="row">
          <div className="card-content black-text">
            <div>


              <div className="input-field">
                <p style={{marginLeft:50}}>Почта</p>
                <center><input
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name="email"
                  className="box-input"
                  value={form.email}
                  onChange={changeHandler}
                /></center>
              </div>

              <div className="input-field">
                <p style={{marginLeft:50}}>Пароль</p>
                <center>
                  <input
                    placeholder="Введите пароль"
                    id="password"
                    type="password"
                    name="password"
                    className="box-input"
                    value={form.password}
                    onChange={changeHandler}
                  />
                </center>

              </div>

              <div className="input-field">
                <p style={{marginLeft:50}}>Компания</p>
                <center><input
                  placeholder="Введите название компании"
                  id="companyname"
                  type="text"
                  name="companyname"
                  className="box-input"
                  value={form.companyname}
                  onChange={changeHandler}
                /></center>

              </div>

              <div className="input-field">
                <p style={{marginLeft:50}}>Руководитель</p>
                <center><input
                placeholder="Введите ФИО руководителя"
                id="headname"
                type="text"
                className="box-input"
                name="headname"
                value={form.headname}
                onChange={changeHandler}
                /></center>

              </div>

              <div className="input-field">
                <p style={{marginLeft:50}}>Описание</p>
                <center><input
                placeholder="Напишите краткое описание"
                id="description"
                type="text"
                className="box-input"
                name="description"
                value={form.description}
                onChange={changeHandler}
                /></center>

              </div>

              <div className="input-field">
                <p style={{marginLeft:50}}>Телефон</p>
                <center><input
                placeholder="Введите контактный номер"
                id="tel"
                type="text"
                className="box-input"
                name="tel"
                value={form.tel}
                onChange={changeHandler}
                /></center>


              </div>

              <div className="input-field">
                <p style={{marginLeft:50}}>IBAN</p>
                <center><input
                placeholder="Введите IBAN"
                id="iban"
                type="text"
                className="box-input"
                name="iban"
                value={form.iban}
                onChange={changeHandler}
                /></center>


              </div>

              <div className="input-field">
                <p style={{marginLeft:50}}>Банк</p>
                <center><input
                placeholder="Введите код банка"
                id="bank"
                className="box-input"
                type="text"
                name="bank"
                value={form.bank}
                onChange={changeHandler}
                /></center>


              </div>



            </div>
          </div>
          <div className="center card-action">

            <button
              className="modal-close login1-btn z-depth-1"
              style={{marginRight: 10}}
              disabled={loading}
              onClick={registerHandler}
            >
              Создать
            </button>

          </div>

    </div>
  )
}
