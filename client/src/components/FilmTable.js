import React from 'react'


export const FilmTable = ({ users }) => {

  if (!users.length) {
   return <p className="center">Выложенных фильмов пока нет</p>
 }


  return (
    <div className = "row">
      <div className = "col s10 offset-s1">


          <table className="striped responsive-table">

            <tbody>
            { users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                </tr>
              )
            }) }
            </tbody>
          </table>
        </div>
      </div>


  )
}
