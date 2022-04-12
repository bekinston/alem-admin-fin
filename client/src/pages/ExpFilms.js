import React, {useContext, useEffect, useState, useCallback} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {FilmTableList} from '../components/FilmTableList'
import {GoTableList} from '../components/GoTableList'
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
let names = [];

export const ExpFilms = () =>{

  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    name: ''
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

  const [data, SetData] = useState({
    name:'',
    year:'',
    country:'',
    genres:'',
    time:'',
    desc:'',
    filmuri:'',
    filmlogo:'',
    bannerhor:'',
    bannerver:'',
    trailer:''
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


  async function searchHandler(){
    try {
        const dat = await request('/api/go/searchfilm', 'POST', {...form})
        message(dat.message)
        SetData({
          name:"Название: " + dat.ready.name,
          year:"Год: " + dat.ready.year,
          country:"Страны: " + dat.ready.country,
          genres:"Жанры: " + dat.ready.genres,
          time:"Продолжительность: " + dat.ready.time + " минут",
          desc:"Описание: " + dat.ready.desc,
          filmuri:"Фильм: " + dat.ready.filmuri,
          filmlogo:"Логотип: " + dat.ready.filmlogo,
          bannerhor:"Баннер вертикальный: " + dat.ready.bannerhor,
          bannerver:"Баннер горизонтальный: " + dat.ready.bannerver,
          trailer:"Трейлер: " + dat.ready.trailer,
        })
    } catch (e) {}
  }

    return(
      <div className = "row">


      <div className = "col s5 offset-s1 fscard card  grey lighten-5 ">
        <center><p>Ожидающие фильмы</p></center>
        <div className = "scard">
        <FilmTableList/>
        </div>
      </div>

      <div className = "col s5 card fscard grey lighten-5">

        <center><p>Фильмы в прокате</p></center>
        <div className = "scard">
        <GoTableList/>
        </div>
      </div>




        <div className = "col s10 offset-s1 center" style={{ marginTop:20}}>



          <div className = "card" style={{padding:20}}>
          <center><h5 className="head">Поиск фильма</h5></center>
            <center><Autocomplete
                onChange={(event, value) => setForm({name: value.label})}
                id="combo-box-demo"
                options={names}
                sx={{ width: '91%', padding:-10}}
                renderInput={(params) => <TextField {...params} />}
            /></center>
            <button onClick={searchHandler} className="login1-btn z-depth-1" style={{marginTop:20}}>Искать</button>
          </div>

        </div>
        <div className = "col s10 offset-s1 black-text ">
          <div className = "card "  style = {{padding:60}}>
            <p>{data.name}</p>
            <p>{data.year}</p>
            <p>{data.country}</p>
            <p>{data.genres}</p>
            <p>{data.time}</p>
            <p>{data.desc}</p>
            <p>{data.filmuri}</p>
            <p>{data.filmlogo}</p>
            <p>{data.bannerhor}</p>
            <p>{data.bannerver}</p>
            <p>{data.trailer}</p>
          </div>

        </div>


      </div>
    )






}
