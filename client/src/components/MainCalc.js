import React, {useState}  from 'react'


export const MainCalc = () => {

  const [number1, setNumber1] = useState(500);
  const [number2, setNumber2] = useState(10000);
  const [total, setTotal] = useState(number1 * number2);
  const [income, setIncome] = useState((number1 * number2*0.185)+(number2*75));
  const [clear, setClear] = useState((number1 * number2) - ((number1 * number2*0.185)+(number2*75)));

  function calculateTotal() {
    setTotal(number1 * number2);
    setIncome((number1 * number2*0.185)+(number2*75));
    setClear((number1 * number2) - ((number1 * number2*0.185)+(number2*75)));
  }



  return(
    <>
      <div className = "calcbg  row grey lighten-5 z-depth-1">
          <center><h5 className="head1">Калькулятор расчёта прибыли</h5></center>
          <center><p>(тенге)</p></center>
          <div className = "col s12 l6 m">
            <p>Цена за 1 просмотр {number1.toLocaleString('ru')} </p><p></p>
            <input className="range" type="range" min="500" max="1500" step="100" value={number1} onChange={e => setNumber1(+e.target.value)}/>
              <p>Количество покупок {number2.toLocaleString('ru')}</p>
              <input className="range" type="range" min="10000" max="2000000" value={number2} step="10000" onChange={e => setNumber2(+e.target.value)} style = {{marginBottom:20}}/>


          </div>
          <div className = "col s12 l6 m6">
            <center><p style={{padding:10}}>Выручка: {total.toLocaleString('ru')} </p></center>
            <center><p style={{padding:10}}>Комиссия сервиса: {income.toLocaleString('ru')} </p></center>
            <center><p style={{padding:10}}>Чистая прибыль: {clear.toLocaleString('ru')} </p></center>
          </div>
          <div className = "col s12">
            <center><button className="action  z-depth-1" onClick={calculateTotal}>Подсчитать</button></center>
          </div>
      </div>
    </>
  )
}
