import React from 'react'
import {Pay} from '../components/Pay'
import tv from '../images/specs/television.png'
import apple from '../images/specs/apple.png'
import android from '../images/specs/android.png'
import appletv from '../images/specs/apple-tv.png'
import androidtv from '../images/specs/apple-tv-2.png'


export const SpecsPage = () => {
  return(
    <>
    <div className = "row">

      <div className = "col s12 offset-s1">
        <div className = "col s2">
          <div className = "card center">
            <h5 className = "head">Android</h5>
            <img className = "responsive-img" src = {android} style = {{width:50}}/>
            <p>Скачано: 0</p>
          </div>
        </div>

        <div className = "col s2">
          <div className = "card center">
            <h5 className = "head">IOS</h5>

            <img className = "responsive-img" src = {apple} style = {{width:50}}/>
              <p>Скачано: 0</p>
          </div>
        </div>

        <div className = "col s2">
          <div className = "card center">
            <h5 className = "head">AppleTV</h5>

            <img className = "responsive-img" src = {appletv} style = {{width:50}}/>

              <p>Скачано: 0</p>
          </div>
        </div>

        <div className = "col s2">
          <div className = "card center">
            <h5 className = "head">AndroidTV</h5>

            <img className = "responsive-img" src = {androidtv} style = {{width:50}}/>

              <p>Скачано: 0</p>
          </div>
        </div>

        <div className = "col s2">
          <div className = "card center">
            <h5 className = "head">TV</h5>

            <img className = "responsive-img" src = {tv} style = {{width:50}}/>

              <p>Скачано: 0</p>
          </div>
        </div>
      </div>

      <div className = "col s10 offset-s1">
        <div className = "card" style = {{padding:30}}>
          <h5 className = "head">Заявки на вывод денег</h5>
          <Pay/>
        </div>
      </div>

      <div className = "col s10 offset-s1">
        <div className = "card" style = {{padding:30}}>
          <h5 className = "head">Yandex S3</h5>
          <div style = {{marginTop:30}}>
            <a href = "https://cloud.yandex.ru" target="_blank">Перейти в хранилище</a>
          </div>

        </div>
      </div>

      <div className = "col s10 offset-s1">
        <div className = "card" style = {{padding:30}}>
          <h5 className = "head">MongoDB</h5>
          <div style = {{marginTop:30}}>
            <a href = "https://www.mongodb.com" target="_blank">Перейти в Базу данных</a>
          </div>

        </div>
      </div>

      <div className = "col s10 offset-s1">
        <div className = "card" style = {{padding:30}}>
          <h5 className = "head">Tarlan Payments</h5>
          <div style = {{marginTop:30}}>
            <a href = "https://tarlanpayments.kz/?lang=ru" target="_blank">Перейти к Эквайеру</a>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}
