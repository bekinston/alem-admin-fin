import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'

export const FilmAdd = () => {

  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    name: '', promo: '', cost: 0
  })

  const [checked, setChecked] = useState({
    enabled:false
  })




  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])


  const checkHandler = event => {
    if(checked.enabled == false){
      setChecked({enabled: true})
    }else{
      setChecked({enabled: false})
      setForm({ ...form, promo:'' })

    }
  }



  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }


  const addHandler = async () => {
    try {
        const data = await request('/api/go/addfilm', 'POST', {...form})
        message(data.message)
        if(data.message == "Фильм добавлен"){
          window.location.reload(false)

        }
    } catch (e) {}
  }

  return(
    <div>
    <div className="input-field">
      <p style={{marginLeft:50}}>Фильм</p>
      <center><input
        placeholder="Введите название фильма"
        id="name"
        type="text"
        name="name"
        value={form.name}
        onChange={changeHandler}
        className="box-input"
      /></center>
    </div>

    <div className="input-field">
      <p style={{marginLeft:50}}>Цена (в тенге)</p>
      <center><input
        placeholder="Введите название фильма"
        id="cost"
        type="text"
        name="cost"
        value={form.cost}
        min= "500"
        max = "1500"
        onChange={changeHandler}
        className="box-input"
      /></center>
    </div>

    <div className="input-field">
      <p style={{marginLeft:50}}>
        <label>
          <input type="checkbox" onChange={checkHandler} />
          <span className = "black-text">Промокод</span>
        </label>
      </p>
    </div>

    <div className="input-field">
      <center><input
        placeholder="Введите промокод фильма"
        id="promo"
        type="text"
        onChange={changeHandler}
        value={form.promo}
        disabled={!checked.enabled}
        name="promo"

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
