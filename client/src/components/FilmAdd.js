import React, {useContext, useEffect, useState, useCallback} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
let names = [];

export const FilmAdd = () => {

  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    name: '', promo: '', cost: 0
  })

  const [checked, setChecked] = useState({
    enabled:false
  })


  const fetchNames = useCallback(async () => {
    try {
      if(names.length>0){
        names = [];
      }

      const fetched = await request('/api/go/other/', 'GET', null, {

      })
      for(let i = 0; i < fetched.length; i++){
        names.push({label:fetched[i].name});
      }
      console.log(names)
    } catch (e) {}
  }, [request])

  useEffect(() => {
    fetchNames();
  }, [fetchNames])




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
      <center><Autocomplete
          onChange={(event, value) => setForm({name: value.label})}
          id="combo-box-demo"
          options={names}
          sx={{ width: '91%', padding:-10}}
          renderInput={(params) => <TextField {...params} />}
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
