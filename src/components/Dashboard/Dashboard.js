import React from 'react'
import HomeDasboard from '../Home/HomeDasboard'
import UserDashboard from '../User/UserDashboard'

const Dashboard = ({ signed }) => {
  return (
    <div>
        {signed ? <UserDashboard /> : <HomeDasboard/>}
    </div>
  )
}

export default Dashboard