import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useMessage} from '../hooks/message.hook'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import scr from '../images/specs/android.png'



export const CreatePage = () => {

  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const navigate = useNavigate();




  const [disabled, setDisabled] = useState({
    disable:false
  })

  const [dirname, setDirname] = useState({
    direction:'',
    urlfilm:''
  })

  const dir = event => {
    setDirname({direction: event.target.value, urlfilm: event.target.value})
  }

  const dirHandler = async() => {
    const data = await request('/api/upload/create', 'POST', {...dirname})
    message(data.message)
    console.log(data)
  }




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
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      udir.sdir,
      udir.sdir.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUdiruri({sdiruri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [uact1, setUact1] = useState({
    sact1:null
  })

  const [uact1uri, setUact1uri] = useState({
    sact1uri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const act1changeHandler = event => {
    setUact1({sact1: event.target.files[0]})
  }

  const act1upload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      uact1.sact1,
      uact1.sact1.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUact1uri({sact1uri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [uact2, setUact2] = useState({
    sact2:null
  })

  const [uact2uri, setUact2uri] = useState({
    sact2uri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const act2changeHandler = event => {
    setUact2({sact2: event.target.files[0]})
  }

  const act2upload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      uact2.sact2,
      uact2.sact2.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUact2uri({sact2uri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [uact3, setUact3] = useState({
    sact3:null
  })

  const [uact3uri, setUact3uri] = useState({
    sact3uri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const act3changeHandler = event => {
    setUact3({sact3: event.target.files[0]})
  }

  const act3upload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      uact3.sact3,
      uact3.sact3.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUact3uri({sact3uri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [uact4, setUact4] = useState({
    sact4:null
  })

  const [uact4uri, setUact4uri] = useState({
    sact4uri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const act4changeHandler = event => {
    setUact4({sact4: event.target.files[0]})
  }

  const act4upload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      uact4.sact4,
      uact4.sact4.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUact4uri({sact4uri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [uact5, setUact5] = useState({
    sact5:null
  })

  const [uact5uri, setUact5uri] = useState({
    sact5uri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const act5changeHandler = event => {
    setUact5({sact5: event.target.files[0]})
  }

  const act5upload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      uact5.sact5,
      uact5.sact5.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUact5uri({sact5uri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [uact6, setUact6] = useState({
    sact6:null
  })

  const [uact6uri, setUact6uri] = useState({
    sact6uri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const act6changeHandler = event => {
    setUact6({sact6: event.target.files[0]})
  }

  const act6upload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      uact6.sact6,
      uact6.sact6.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUact6uri({sact6uri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [uact7, setUact7] = useState({
    sact7:null
  })

  const [uact7uri, setUact7uri] = useState({
    sact7uri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const act7changeHandler = event => {
    setUact7({sact7: event.target.files[0]})
  }

  const act7upload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      uact7.sact7,
      uact7.sact7.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUact7uri({sact7uri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [uact8, setUact8] = useState({
    sact8:null
  })

  const [uact8uri, setUact8uri] = useState({
    sact8uri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const act8changeHandler = event => {
    setUact8({sact8: event.target.files[0]})
  }

  const act8upload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      uact8.sact8,
      uact8.sact8.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUact8uri({sact8uri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [uact9, setUact9] = useState({
    sact9:null
  })

  const [uact9uri, setUact9uri] = useState({
    sact9uri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const act9changeHandler = event => {
    setUact9({sact9: event.target.files[0]})
  }

  const act9upload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      uact9.sact9,
      uact9.sact9.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUact9uri({sact9uri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }


    const [uact10, setUact10] = useState({
      sact10:null
    })

    const [uact10uri, setUact10uri] = useState({
      sact10uri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
    })

    const act10changeHandler = event => {
      setUact10({sact10: event.target.files[0]})
    }

    const act10upload = async() => {
      const formData = new FormData()
      setDisabled({disable:true})

      formData.append(
        "MyFile",
        uact10.sact10,
        uact10.sact10.name
      )

      await axios.post("api/upload/upload", formData)
      .then((response) => {
        let d = response.data.upload.Location
        setUact10uri({sact10uri:d})
        setDisabled({disable:false})

        console.log(d)
      }, (error) => {
        console.log(error)
      })
    }


  const [ulogo, setUlogo] = useState({
    slogo:null
  })

  const [ulogouri, setUlogouri] = useState({
    slogouri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const ulchangeHandler = event => {
    setUlogo({slogo: event.target.files[0]})
  }

  const ulupload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      ulogo.slogo,
      ulogo.slogo.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUlogouri({slogouri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [ubannerver, setUbannerver] = useState({
    sbannerver:null
  })

  const [ubannerveruri, setUbannerveruri] = useState({
    sbannerveruri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const bannerverchangeHandler = event => {
    setUbannerver({sbannerver: event.target.files[0]})
  }

  const bannerverupload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      ubannerver.sbannerver,
      ubannerver.sbannerver.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUbannerveruri({sbannerveruri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [ubannerhor, setUbannerhor] = useState({
    sbannerhor:null
  })

  const [ubannerhoruri, setUbannerhoruri] = useState({
    sbannerhoruri:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
  })

  const bannerhorchangeHandler = event => {
    setUbannerhor({sbannerhor: event.target.files[0]})
  }

  const bannerhorupload = async() => {
    const formData = new FormData()
    setDisabled({disable:true})

    formData.append(
      "MyFile",
      ubannerhor.sbannerhor,
      ubannerhor.sbannerhor.name
    )

    await axios.post("api/upload/upload", formData)
    .then((response) => {
      let d = response.data.upload.Location
      setUbannerhoruri({sbannerhoruri:d})
      setDisabled({disable:false})

      console.log(d)
    }, (error) => {
      console.log(error)
    })
  }

  const [film, setFilm] = useState({
    onscreen:'',
    name:'',
    year:'',
    country:'',
    genres:'',
    time:'',
    desc:'',
    filmlogo:'',
    bannerhor:'',
    bannerver:'',
    filmuri:'',
    trailer:'',
    director:'',
    actor1:'',
    actor2:'',
    actor3:'',
    actor4:'',
    actor5:'',
    actor6:'',
    actor7:'',
    actor8:'',
    actor9:'',
    actor10:'',
    directorp:'',
    actor1p:'',
    actor2p:'',
    actor3p:'',
    actor4p:'',
    actor5p:'',
    actor6p:'',
    actor7p:'',
    actor8p:'',
    actor9p:'',
    actor10p:''
    })



    useEffect(() => {
      message(error)
      clearError()
    }, [error, message, clearError])

    useEffect(() => {
      window.M.updateTextFields()
    }, [])




    const changeHandler = event => {
      setFilm({ ...film, [event.target.name]: event.target.value})
    }

  const pressHandler = async()=> {
    try {

      if(film.onscreen == '' || film.name == '' || film.year == ''
                              || film.country == '' || film.genres == ''
                               || film.time == '' || film.desc == ''
                                || film.filmlogo == 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg' || film.bannerhor == 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'
                                  || film.bannerver == 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg' || film.director == ''
                                    || film.directorp == 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg' || film.actor1 == ''
                                      || film.actor1p == 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg'){
        message('Заполните все поля')
      }else{
        const data = await request('/api/film/generate', 'POST', {...film}, {Authorization:`Bearer ${auth.token}`})
        message(data.message)
        navigate('/films')
      }




    } catch (e) {

    }

  }



  const uploadtest = async() => {
    const d = "1"
    const data = await request('/api/upload/uploadvideo', 'POST', {d})
  }



  const [disablep, setDisablep] = useState({sdisaplep:false})

  const setDisablec = () => {

  }




  return (
    <div className="row">
      <div className="col s10 offset-s1" style={{paddingTop: '2rem'}}>


        <div style = {{padding:20}}>
          <h5 className = "head center">Создание фильма</h5>
          <p className = "center">* Для создания фильма заполните все поля последовательно</p>
        </div>

        <div className = "card cards" style={{borderRadius:10}}>

          <h5 className = "head center">Путь на диск</h5>


          <div className="input-field">
            <p style={{marginLeft:50}}>Название фильма на латиннице (после ввода сразу нажмите "Создать путь")</p>
            <center><input
              placeholder="Введите название фильма на латиннице"
              id="dirname"
              type="text"
              name="dirname"
              required
              className="box-input"
              onChange = {dir}
              value = {dirname.direction}
            /></center>

          <input hidden name ="dir" value = {film.dir = dirname.direction} onChange={changeHandler}/>
          <button style={{marginLeft:50}} onClick={dirHandler} className="login1-btn center z-depth-1 center">Создать путь </button>
          </div>

        </div>

        <div className = "card cards">

          <h5 className = "head center">Количество дней в прокате</h5>

          <center><div className = "radio-field">
            <div onChange={changeHandler} value = {film.onscreen}>


              <div className = "radio1">
                <p style = {{width:300}}>
                  <label>
                    <input  name="onscreen" type="radio" value="30"/>
                    <span className = "radio">30 дней</span>
                  </label>
                </p>
              </div>

              <div className = "radio2">
                <p>
                  <label>
                    <input name="onscreen" type="radio" value="45"/>
                    <span className = "radio">45 дней</span>
                  </label>
                </p>
              </div>
              <p className = "hidden">123</p>
                </div>
          </div></center>



          </div>


        <div className = "card cards">

          <h5 className = "head center">Основные данные</h5>

          <div className="input-field">
            <p style={{marginLeft:50}}>Название фильма</p>
            <center><input
              placeholder="Введите название"
              id="name"
              required
              type="text"
              name="name"
              className="box-input"
              onChange = {changeHandler}
              value = {film.name}
            /></center>
          </div>

          <div className="input-field">
            <p style={{marginLeft:50}}>Год</p>
            <center><input
              placeholder="Введите год"
              id="year"
              type="Number"
              required
              name="year"
              className="box-input"
              onChange = {changeHandler}
              value = {film.year}
            /></center>
          </div>

          <div className="input-field">
            <p style={{marginLeft:50}}>Страны</p>
            <center><input
              placeholder="Введите страны"
              id="country"
              type="text"
              required
              name="country"
              className="box-input"
              onChange = {changeHandler}
              value = {film.country}
            /></center>
          </div>

          <div className="input-field">
            <p style={{marginLeft:50}}>Жанры</p>
            <center><input
              placeholder="Введите Жанры"
              id="genres"
              type="text"
              required
              name="genres"
              className="box-input"
              onChange = {changeHandler}
              value = {film.genres}
            /></center>
          </div>

          <div className="input-field">
            <p style={{marginLeft:50}}>Продолжительность</p>
            <center><input
              placeholder="Введите продолжительность в минутах"
              id="time"
              type="text"
              name="time"
              required
              className="box-input"
              onChange = {changeHandler}
              value = {film.time}
            /></center>
          </div>

          <div className="input-field">
            <p style={{marginLeft:50}}>Описание</p>
            <center><input
              placeholder="Введите краткое описание фильма"
              id="desc"
              type="text"
              name="desc"
              required
              className="box-input"
              onChange = {changeHandler}
              value = {film.desc}
              style = {{marginBottom:40}}
            /></center>
          </div>

        </div>

        <div className = "row">

          <h5 className = "head center" style={{marginTop:50}}>Действующие лица</h5>
          <p className = "center" style = {{marginTop:25}}>Рекомендуемый размер: 512 x 512</p>


            <div className = "scrolling-wrapper">
            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Режиссёр</p>

                    <center><img src = {udiruri.sdiruri} className = "personimg"/></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="director"
                      type="text"
                      name="director"
                      required
                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.director}
                    /></center>

                    <div className="input-field">
                      <p className="center">Фото режиссёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {dirchangeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "directorp" value={film.directorp = udiruri.sdiruri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {dirupload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
            </div>

            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Актёр</p>

                    <center><img src = {uact1uri.sact1uri} className = "personimg"></img></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="actor1"
                      type="text"
                      name="actor1"
                      required

                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.actor1}
                    /></center>

                    <div className="input-field">
                      <p className = "center">Фото актёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {act1changeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "actor1p" value={film.actor1p = uact1uri.sact1uri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {act1upload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
            </div>

            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Актёр</p>

                    <center><img src = {uact2uri.sact2uri} className = "personimg"></img></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="actor2"
                      type="text"
                      name="actor2"
                      required

                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.actor2}
                    /></center>

                    <div className="input-field">
                      <p className = "center">Фото актёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {act2changeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "actor1p" value={film.actor2p = uact2uri.sact2uri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {act2upload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
            </div>

            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Актёр</p>

                    <center><img src = {uact3uri.sact3uri} className = "personimg"></img></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="actor3"
                      type="text"
                      name="actor3"
                      required

                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.actor3}
                    /></center>

                    <div className="input-field">
                      <p className = "center">Фото актёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {act3changeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "actor3p" value={film.actor3p = uact3uri.sact3uri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {act3upload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
            </div>

            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Актёр</p>

                    <center><img src = {uact4uri.sact4uri} className = "personimg"></img></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="actor4"
                      type="text"
                      name="actor4"
                      required

                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.actor4}
                    /></center>

                    <div className="input-field">
                      <p className = "center">Фото актёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {act4changeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "actor4p" value={film.actor4p = uact4uri.sact4uri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {act4upload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
            </div>

            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Актёр</p>

                    <center><img src = {uact5uri.sact5uri} className = "personimg"></img></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="actor5"
                      type="text"
                      name="actor5"
                      required

                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.actor5}
                    /></center>

                    <div className="input-field">
                      <p className = "center">Фото актёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {act5changeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "actor1p" value={film.actor5p = uact5uri.sact5uri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {act5upload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
            </div>

            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Актёр</p>

                    <center><img src = {uact6uri.sact6uri} className = "personimg"></img></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="actor6"
                      type="text"
                      name="actor6"
                      required

                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.actor6}
                    /></center>

                    <div className="input-field">
                      <p className = "center">Фото актёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {act6changeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "actor1p" value={film.actor6p = uact6uri.sact6uri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {act6upload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
            </div>

            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Актёр</p>

                    <center><img src = {uact7uri.sact7uri} className = "personimg"></img></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="actor7"
                      type="text"
                      name="actor7"
                      required

                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.actor7}
                    /></center>

                    <div className="input-field">
                      <p className = "center">Фото актёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {act7changeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "actor1p" value={film.actor7p = uact7uri.sact7uri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {act7upload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
            </div>

            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Актёр</p>

                    <center><img src = {uact8uri.sact8uri} className = "personimg"></img></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="actor8"
                      type="text"
                      name="actor8"
                      required

                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.actor8}
                    /></center>

                    <div className="input-field">
                      <p className = "center">Фото актёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {act8changeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "actor1p" value={film.actor8p = uact8uri.sact8uri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {act8upload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
            </div>

            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Актёр</p>

                    <center><img src = {uact9uri.sact9uri} className = "personimg"></img></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="actor9"
                      type="text"
                      name="actor9"
                      required

                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.actor9}/></center>

                    <div className="input-field">
                      <p className = "center">Фото актёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {act9changeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "actor1p" value={film.actor9p = uact9uri.sact9uri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {act9upload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
            </div>

            <div className = "fcard">
              <div className = "card cards1" style = {{padding:10, marginTop:10}}>
                  <div className="input-field">
                    <p className="center">Актёр</p>

                    <center><img src = {uact10uri.sact10uri} className = "personimg"></img></center>

                    <center><input
                      placeholder="Имя Фамилия"
                      id="actor10"
                      type="text"
                      name="actor10"
                      required

                      className="box-input center"
                      onChange = {changeHandler}
                      value = {film.actor10}
                    /></center>

                    <div className="input-field">
                      <p className = "center">Фото актёра</p>
                      <center><input type="file" disabled={disabled.disable} onChange = {act10changeHandler} className = "box-input"/></center>
                      <center><input type="text" hidden name = "actor10p" value={film.actor10p = uact10uri.sact10uri} className = "box-input" onChange = {changeHandler}/></center>
                      <center><button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {act10upload}>Загрузить фото</button></center>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>

        <div className = "row">

        <div className = "col s12 m6 l6">
          <div className = "cardu card center">

            <div className="input-field center">
              <p className = "phead">Баннер вертикальный</p>
              <p>Рекомендуемый размер: 1080 x 1920</p>
              <img src = {ubannerveruri.sbannerveruri} style={{height:250,width:170, marginBottom:20}} className = "responsive-img bannerimg"/>
              <center><input type="file" disabled={disabled.disable} onChange = {bannerverchangeHandler} className = "box-input" style ={{marginTop:25}}/></center>
              <center><input type="text" hidden name = "bannerver" value={film.bannerver = ubannerveruri.sbannerveruri} className = "box-input" onChange = {changeHandler}/></center>
              <button disabled={disabled.disable} className="loginu-btn center z-depth-1 " onClick = {bannerverupload}>Загрузить баннер</button>
            </div>
          </div>
        </div>


          <div className = "col s12 m6 l6">
            <div className = "cardu card center">
              <div className="input-field">
                <p className = "phead">Баннер горизонтальный</p>
                <p>Рекомендуемый размер: 1920 x 1080</p>
                <img src = {ubannerhoruri.sbannerhoruri}style={{height:250, marginBottom:20}}  alt="Баннер" className="responsive-img bannerimg"/>
                <center><input type="file" disabled={disabled.disable}  onChange = {bannerhorchangeHandler} className = "box-input" style ={{marginTop:25}}/></center>
                <center><input type="text" hidden  name = "bannerhor" value={film.bannerhor = ubannerhoruri.sbannerhoruri} className = "box-input" onChange = {changeHandler}/></center>
                <button className="loginu-btn center z-depth-1" disabled={disabled.disable} onClick = {bannerhorupload}>Загрузить баннер</button>
              </div>

            </div>
          </div>


          <div className = "col s12">
            <div className = "cardu card center">
              <div className="input-field">
                <p className = "phead">Логотип фильма</p>
                <p>Рекомендуемый размер: 1024 x 1024</p>
                <img src = {ulogouri.slogouri} style={{height:250,width:250, marginBottom:20}} alt="Логотип" className = "responsive-img bannerimg"/>
                <center><input type="file" disabled={disabled.disable} onChange = {ulchangeHandler} className = "box-inp1" /></center>
                <center><input type="text" hidden name = "filmlogo" value={film.filmlogo = ulogouri.slogouri} className = "box-input" onChange = {changeHandler}/></center>
                <button disabled={disabled.disable} className="loginu-btn center z-depth-1 center" onClick = {ulupload} style={{marginBottom:20}}>Загрузить логотип</button>
                  <input type="text" name="trailer" value = {film.trailer = 'https://storage.yandexcloud.net/alemuploads/' + dirname.urlfilm +"/" + dirname.urlfilm + 'trailer.mp4'} onChange = {changeHandler} hidden/>
                  <input type="text" name="filmuri" value = {film.filmuri = 'https://storage.yandexcloud.net/alemuploads/' + dirname.urlfilm +"/" + dirname.urlfilm + 'film.mp4'} onChange = {changeHandler} hidden/>

              </div>

            </div>
          </div>

          <div className = "col s12 m6 l6">
            <div className = "cardu card center">

              <div className="input-field center">
                <p className = "phead">Трейлер</p>
                <p>формат файла .mp4</p>
                  <form action="https://storage.yandexcloud.net/alemuploads/" method="post" encType="multipart/form-data">

                    <input type="input" name="key" value = {dirname.urlfilm +"/" + dirname.urlfilm + 'trailer.mp4'} hidden />
                    <center><input type="file" name="file" className="box-input" /></center>
                    <button type="submit" name="submit" className="loginu-btn center z-depth-1 " >Загрузить трейлер</button>

                  </form>
              </div>
            </div>
          </div>


            <div className = "col s12 m6 l6">
              <div className = "cardu card center">
                <div className="input-field">
                  <p className = "phead">Фильм</p>
                  <p>формат файла .mp4</p>
                    <form action="https://storage.yandexcloud.net/alemuploads/" method="post" encType="multipart/form-data">
                      <input type="input" name="key" value = {dirname.urlfilm +"/" + dirname.urlfilm + 'film.mp4'} hidden />
                          <center><input type="file" name="file" className="box-input" /></center>
                          <center><button type="submit" name="submit" className = "loginu-btn center z-depth-1"  >Загрузить Фильм</button></center>
                    </form>
                </div>

              </div>
            </div>



        </div>

        <div className = "row">


        </div>









          <div className = "center">

            <button onClick={pressHandler} className="loginm-btn center z-depth-1 center" style = {{marginBottom:40}} disabled={disablep.setDisablep}>Загрузить фильм</button>

          </div>

      </div>
    </div>
  )
}
