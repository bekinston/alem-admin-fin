import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
import {NavLink, useNavigate} from 'react-router-dom'
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const Create = () => {
  const banks = [
    {label:'АО "First Heartland Bank"', value:'ABNAKZKX'},
    {label:'АО "Дочерний Банк "АЛЬФА-БАНК"', value:'ALFAKZKA'},
    {label:'АО "АТФБанк"', value:'ALMNKZKA'},
    {label:'АО "Altyn Bank" (ДБ China Citic Bank Corporation Limited)', value:'ATYNKZKA'},
    {label:'АО ДБ "БАНК КИТАЯ В КАЗАХСТАНЕ"', value:'BKCHKZKA'},
    {label:'АО "KASPI BANK"', value:'CASPKZKA'},
    {label:'АО "Центральный Депозитарий Ценных Бумаг"', value:'CEDUKZKA'},
    {label:'АО "Ситибанк Казахстан"', value:'CITIKZKA'},
    {label:'АО "Банк Развития Казахстана"', value:'DVKAKZKA'},
    {label:'ЕВРАЗИЙСКИЙ БАНК РАЗВИТИЯ', value:'EABRKZKA'},
    {label:'НАО Государственная корпорация "Правительство для граждан"', value:'EURIKZKA'},
    {label:'АО "Жилстройсбербанк Казахстана"', value:'HCSKKZKA'},
    {label:'АО "Исламский Банк "Al Hilal"', value:'HLALKZKZ'},
    {label:'АО "Народный Банк Казахстана"', value:'HSBKKZKX'},
    {label:'АО "Торгово-промышленный Банк Китая в г. Алматы"', value:'ICBKKZKX'},
    {label:'г.Москва Межгосударственный Банк', value:'INEARUMM'},
    {label:'ДБ АО "Хоум Кредит энд Финанс Банк"', value:'INLMKZKA'},
    {label:'АО "ForteBank"', value:'IRTYKZKA'},
    {label:'АО "Банк ЦентрКредит"', value:'KCJBKZKX'},
    {label:'АО "Казахстанская фондовая биржа"', value:'KICEKZKX'},
    {label:'АО "Банк "Bank RBK"', value:'KINCKZKA'},
    {label:'РГП "Казахстанский центр межбанковских расчетов НБРК"', value:'KISCKZKX'},
    {label:'РГУ "Комитет казначейства Министерства финансов РК"', value:'KKMFKZ2A'},
    {label:'АО "КАЗПОЧТА"', value:'KPSTKZKA'},
    {label:'АО "Банк Kassa Nova" (Дочерний банк АО "ForteBank")', value:'KSNVKZKA'},
    {label:'АО "ДБ "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"', value:'KZIBKZKA'},
    {label:'АО "AsiaCredit Bank (АзияКредит Банк)"', value:'LARIKZKA'},
    {label:'АО ДБ "Национальный Банк Пакистана" в Казахстане', value:'NBPAKZKA'},
    {label:'"Банк-кастодиан АО  "ЕНПФ"', value:'NBPFKZKX'},
    {label:'РГУ Национальный Банк Республики Казахстан', value:'NBRKKZKX'},
    {label:'АО "Нурбанк"', value:'NURSKZKX'},
    {label:'ДБ АО "Сбербанк"', value:'SABRKZKA'},
    {label:'АО "Шинхан Банк Казахстан"', value:'SHBKKZKA'},
    {label:'АО "Capital Bank Kazakhstan"', value:'TBKBKZKA'},
    {label:'АО "Tengri Bank"', value:'TNGRKZKX'},
    {label:'ДО АО Банк ВТБ (Казахстан)', value:'VTBAKZKZ'},
    {label:'АО "Исламский банк "Заман-Банк"', value:'ZAJSKZ22'}
  ]

  const [bik, setBik] = useState('');

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
    console.log(form);
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
                <p style={{marginLeft:50}}>БИК</p>
                <center><Autocomplete
                    onChange={(event, value) => setBik(value.value)}
                    id="combo-box-demo"
                    options={banks}
                    sx={{ width: '92%', padding:-10}}
                    renderInput={(params) => <TextField {...params} />}
                /></center>
                <input hidden={true} value={form.bank = bik}/>
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
