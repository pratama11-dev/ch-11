/* eslint-disable */
import React, { useEffect, useState } from 'react'
// import '../styles/users.css';

import { getAllUsers } from '../utils/firebase'
import { Table } from 'reactstrap'

export default function Users () {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // eslint-disable-next-line func-call-spacing, no-empty-pattern
  const [] = useState(null)

   useEffect(() => {
      getAllUsers()
        .then(users => {
          setUsers(users)
          setLoading(false)
        }).catch(error => {
          setError(error)
          setLoading(false)
        }
      );
    }
    , []);

  return (
        <div className="container">
            <div>
                <h2>Nama Para Pemain</h2>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Nama
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
  )
}
