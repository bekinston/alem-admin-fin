import React, {useState} from 'react';
import axios from "axios";

export const SoonAdd = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [logouri, setLogouri] = useState('');
  const [file1, setFile1] = useState(
      {logo:null}
  );
  const handleFile1 = event =>{
    setFile1({logo: event.target.files[0]});
  }
  const sendFile1 = async() => {
      setDisabled(true);
    const formData = new FormData()
    formData.append(
        "MyFile",
        file1.logo,
        file1.logo.name
    )
    await axios.post("api/upload/soon", formData)
        .then((response) => {
          setLogouri(response.data.upload.Location);
          setDisabled(false);
        }, (error) => {
          console.log(error)
        })
  }

    const [contenturi, setContenturi] = useState('');
    const [file2, setFile2] = useState(
        {content:null}
    );
    const handleFile2 = event =>{
        setFile2({content: event.target.files[0]});
    }
    const sendFile2 = async() => {
        setDisabled(true);
        const formData = new FormData()
        formData.append(
            "MyFile",
            file2.content,
            file2.content.name
        )
        await axios.post("api/upload/soon", formData)
            .then((response) => {
                setContenturi(response.data.upload.Location);
                setDisabled(false);
            }, (error) => {
                console.log(error)
            })
    }

  const [data, setData] = useState({
    isVideo:'false',
    name:'',
    logo:'',
    content:'',
    desc:'',
    url:'',
    state:'go'
  });

  const changeHandler = event => {
    if(event.target.name === 'isVideo'){
      setChecked(!checked);
    }
    setData({...data, [event.target.name]: event.target.value});
  }


  const confirmHandler = async() => {
      await axios.post("api/soon/addsoon", {...data})
          .then((response) => {
              console.log(response);
              setDisabled(false);
              window.location.reload();
          }, (error) => {
              console.log(error)
          })
  }






  return(
      <>
          <div className="input-field">
              <p style={{marginLeft:50}}>Заголовок(не обязательно)</p>
              <center><input
                  placeholder="Заголовок"
                  type="text"
                  required
                  name="name"
                  className="box-input"
                  onChange = {changeHandler}
              /></center>
          </div>

        <p style={{marginLeft:35}}>
          <label>
            <input required type="checkbox" name='isVideo' checked={checked} value={checked === true ? ('false') : ('true')} onChange={changeHandler}/>
            <span style={{color:'black'}}>Это видео? *</span>
          </label>
        </p>

          <div className = 'row'>
              <div style={{padding:10, width:'90%', marginLeft:'5%', marginRight:'5%'}} className='card'>
                  <p>Загрузите логотип</p>
                  <div className='center'><img src={logouri} style={{width:50, height:50, borderRadius:25, borderWidth:2, borderColor:'black'}}/></div>
                  <div style={{marginBottom:20}} className='center-block'>
                      <input type='text' hidden value={data.logo=logouri} onChange={changeHandler}/>
                      <input style={{marginTop:15}} type='file' onChange={handleFile1}/>
                      <button className='login-btn right z-depth-1' disabled={disabled} onClick={sendFile1}>загрузить</button>
                  </div>
              </div>

              <div style={{padding:10, width:'90%', marginLeft:'5%', marginRight:'5%'}} className='card'>
                  <p>Загрузите контент</p>
                  <div style={{marginBottom:20}} className='center-block'>
                      <input type='text' hidden value={data.content=contenturi} onChange={changeHandler}/>
                      <input style={{marginTop:15}} type='file' onChange={handleFile2}/>
                      <button className='login-btn right z-depth-1' disabled={disabled} onClick={sendFile2}>загрузить</button>
                  </div>
              </div>

          </div>



          <div className="input-field">
              <p style={{marginLeft:50}}>Описание</p>
              <center><input
                  placeholder="Напишите описание"
                  type="text"
                  required
                  name="desc"
                  className="box-input"
                  onChange = {changeHandler}
              /></center>
          </div>

          <div className="input-field">
              <p style={{marginLeft:50}}>URL для перехода (не обязательно)</p>
              <center><input
                  placeholder="URL"
                  type="text"
                  required
                  name="url"
                  className="box-input"
                  onChange = {changeHandler}
              /></center>
          </div>


        <div className='center'><button className='center login-btn z-depth-1' disabled={disabled} onClick={confirmHandler}>Выложить</button></div>
      </>
  )
}
