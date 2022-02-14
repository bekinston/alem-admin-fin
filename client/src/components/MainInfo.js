import React from 'react'


export const MainInfo = () => {
  return(
    <div className="row">
        <div className="col l3 m6 s12">
          <div className = "card">
            <h5 className="head1">Скорость</h5>
            <p> В клиентских приложениях реализован быстрейший способ доставки контента.
            Приложение и контент в нем прогружается за считанные секунды.</p>
          </div>
        </div>
        <div className="col l3 m6 s12">
          <div className = "card">
            <h5 className="head1">Простота</h5>
            <p> Для поставщика предлагается удобная админ панель, с легким доступом
              ко всем функциям. Для работы с системой не потребуется инструкция, интерфейс
              прост и интуитивен</p>
          </div>
        </div>
        <div className="col l3 m6 s12">
          <div className = "card">
            <h5 className="head1">Аудитория</h5>
            <p> Благодаря доступу не зависящем от расположения клиента, аудитория
            приложения может расширятся до бесконечности.</p>
          </div>
        </div>
        <div className="col l3 m6 s12">
          <div className = "card">
            <h5 className="head1">Прибыль</h5>
            <p> Онлайн покупки и охват аудитории может предложить большую прибыль
            за время проката</p>
          </div>
        </div>
    </div>
  )
}
