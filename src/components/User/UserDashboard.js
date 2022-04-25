import React from 'react'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div>
        <h2>Welcome KN</h2>
        <Link to={"/create"}><button>Create A Club</button></Link>
        <button>Join A Club</button>
        <table>
            <thead>
                <tr>
                    <th>Club Id</th>
                    <th>Club Name</th>
                    <th>Club Users</th>
                    <th>Club Info</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>846844</td>
                    <td>Illuminari</td>
                    <td>25</td>
                    <td>Fun Club</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default UserDashboard