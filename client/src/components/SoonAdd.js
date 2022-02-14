import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'

export const SoonAdd = () => {
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    name: '', date: '', photo: '', desc: ''
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


  const addHandler = async () => {
    try {
        const data = await request('/api/soon/addsoon', 'POST', {...form})
        message(data.message)
        if(data.message == "Интересное добавлено"){
          window.location.reload(false)
        }
    } catch (e) {}
  }

  return(
    <div>
    <div className="input-field">
      <p style={{marginLeft:50}}>Заголовок</p>
      <center><input
        placeholder="Введите заголовок"
        id="name"
        type="text"
        onChange={changeHandler}
        value={form.name}
        name="name"
        className="box-input"
      /></center>
    </div>

    <div className="input-field">
      <p style={{marginLeft:50}}>Фото</p>
      <center><input
        placeholder="url фотографии"
        id="photo"
        type="text"
        name="photo"
        onChange={changeHandler}
        value={form.photo}
        className="box-input"
      /></center>
    </div>

    <div className="input-field">
      <p style={{marginLeft:50}}>Дата начала</p>
      <center><input
        id="date"
        type="date"
        name="date"
        onChange={changeHandler}
        value={form.date}
        className="box-input"
      /></center>
    </div>

    <div className="input-field">
      <p style={{marginLeft:50}}>Описание</p>
      <center><input
        id="desc"
        placeholder="Напишите краткое описание"
        type="text"
        name="desc"
        onChange={changeHandler}
        value={form.desc}
        className="box-input"
      /></center>
    </div>


    <center><button
      className="modal-close login1-btn z-depth-1"
      style={{marginRight: 10}}
      onClick={addHandler}
    >
      Выложить
    </button></center>

    </div>
  )
}
