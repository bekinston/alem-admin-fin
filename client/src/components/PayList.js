import React from 'react'


export const PayList = ({ users }) => {

  if (!users.length) {
   return <p>Заявок пока нет</p>
 }



  return (
    <div className = "row">
      <div className = "col s10 offset-s1">
          <table className="striped responsive-table">
            <thead>
            <tr>
              <th>№</th>
              <th>Дата</th>
              <th>Cумма</th>
              <th>Статус</th>
              <th>Действие</th>
            </tr>
            </thead>

            <tbody>
            { users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.date}</td>
                  <td>{user.sum}</td>
                  <td>{user.state}</td>
                  <td><button>Обработать</button></td>
                </tr>
              )
            }) }
            </tbody>
          </table>
        </div>
      </div>


  )
}
