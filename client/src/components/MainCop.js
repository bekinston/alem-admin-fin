import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'

export const MainCop = () => {

  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', phone: '', headname: '', companyname:''
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

  const sendHandler = async () => {
    try {
      if(form.email != '' && form.phone != '' && form.headname != '' && form.companyname !=''){
        const data = await request('/api/telegram/send', 'POST', {...form})
        message(data.message)
      }
      else(
        message("Заполните все данные")
      )


    } catch (e) {}
  }

  return(

    <div className = "copbg row  z-depth-1">


          <center><h5 className="head1">Заявка на сотрудничество</h5></center>


              <center><p>Данная форма предназначена для дистрибьюторов, независимых режиссеров которые хотят провести онлайн прокат своих фильмов</p></center>
              <input placeholder="ФИО руководителя" type="text" name="headname" onChange={changeHandler} required></input>
              <input placeholder="Название компании"type="text" name="companyname" onChange={changeHandler} required/>
              <input placeholder="Контактный телефон" type="text" name="phone" onChange={changeHandler} required/>
              <input placeholder="E-mail" name="email" type="text" onChange={changeHandler}  required/>
              <center><button className = "action z-depth-1" onClick={sendHandler}>Отправить</button></center>






    </div>

  )
}
