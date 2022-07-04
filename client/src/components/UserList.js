import React from 'react'
import axios from "axios";


export const UserList = ({ users }) => {


  return (
    <div className = "row">
      <div className = "col s12">
      <div className = "card">

          <table className="striped responsive-table">
            <thead>
            <tr>
              <th>№</th>
              <th>Название компании</th>
              <th>ФИО руководителя</th>
              <th>E-mail</th>
              <th>Телефон</th>
              <th>IBAN</th>
              <th>BANK</th>
            </tr>
            </thead>

            <tbody>
            { users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.companyname}</td>
                  <td>{user.headname}</td>
                  <td>{user.email}</td>
                  <td>{user.tel}</td>
                  <td>{user.iban}</td>
                  <td>{user.bank}</td>
                    <td><button onClick={()=>{
                        axios.post('/api/auth/delete', {email:user.email}).then(result=>{

                        })
                        window.location.reload()
                    }}>Удалить</button></td>
                </tr>
              )
            }) }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}
