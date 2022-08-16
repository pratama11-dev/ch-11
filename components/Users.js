import React, { useEffect, useState } from 'react'
// import '../styles/users.css';

import { getAllUsers } from "../utils/firebase";
import { Table } from 'reactstrap';


export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllUsers()
      .then(users => {
        setUsers(users);
        setLoading(false);
      }).catch(error => {
        setError(error);
        setLoading(false);
      }
    );
  }
  , []);

  // optimize this code
  // (async function() {
  //     const b = await getAllUsers()
  //     setUsers(b)
  //     console.log(b)
  // })()


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
