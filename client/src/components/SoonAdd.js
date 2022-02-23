import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import axios from 'axios'

export const SoonAdd = () => {
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()

  const [udir, setUdir] = useState({
    sdir:null
  })

  const [udiruri, setUdiruri] = useState({
    sdiruri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const dirchangeHandler = event => {
    setUdir({sdir: event.target.files[0]})
  }

  const dirupload = async() => {
    const formData = new FormData()

    formData.append(
      "MyFile",
      udir.sdir,
      udir.sdir.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUdiruri({sdiruri:d})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }


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

        if(form.photo=='https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'){
          message("Добавьте фото")
        }else{
          const data = await request('/api/soon/addsoon', 'POST', {...form})
          message(data.message)
          if(data.message == "Интересное добавлено"){
            window.location.reload(false)
          }
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

    <div className="input-field" hidden>
      <p style={{marginLeft:50}}>Фото</p>
      <center><input
        placeholder="url фотографии"
        id="photo"
        type="text"
        name="photo"
        onChange={changeHandler}
        value={form.photo = udiruri.sdiruri}
        className="box-input"
      /></center>
    </div>

    <div className="input-field">
      <p className="center">Баннер</p>
      <center><img src = {udiruri.sdiruri} className = "images responsive-img" style = {{width:150, height:270}}></img></center>
      <center><input type="file" onChange = {dirchangeHandler} className = "box-input"/></center>

      <center><button className="loginu-btn center z-depth-1 center" onClick = {dirupload}>Загрузить фото</button></center>
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
      <p style={{marginLeft:50}}>URL клиента</p>
      <center><input
        id="desc"
        placeholder="URL"
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
