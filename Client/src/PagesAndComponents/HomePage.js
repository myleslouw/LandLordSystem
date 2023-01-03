import React from 'react'
import ApartmentIMG from '../Assets/Apartment.png'
import TenantIMG from '../Assets/Tenant.png'
import OwnerIMG from '../Assets/Owner.png'
import AddIMG from '../Assets/Add.png'
import { LinkContainer } from 'react-router-bootstrap'
import HomePageCard from './HomePageCard'

const HomePage = () => {

  return (
    <div className='h-100 p-5 bg-dark d-flex justify-content-center align-items-center'>

      <div className='d-grid'>
        <div className='row pb-4'> 
          <HomePageCard
            cardTitle="View Apartments"
            cardIMG={ApartmentIMG}
            cardDescription="View all apartments in the building"
            linkLocation="/users"
          />
          <HomePageCard
            cardTitle="View Tenants"
            cardIMG={TenantIMG}
            cardDescription="View all tenants in the building"
            linkLocation="/users"
          />
        </div>

        <div className='row pb-4'>
        <HomePageCard
            cardTitle="View Owners"
            cardIMG={OwnerIMG}
            cardDescription="View all current apartment owners"
            linkLocation="/users"
          />
          <HomePageCard
            cardTitle="Add"
            cardIMG={AddIMG}
            cardDescription="Add a new tenant or Owner"
            linkLocation="/users"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage