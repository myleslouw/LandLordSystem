import React from 'react'

const TodoPage = () => {
  return (
    <div>
        <h1>An Apartment Management system</h1>
      <h2>List of Tenants</h2>
      <h3>Each Tenant</h3>
      <p>- TenantID</p>
      <p>- name</p>
      <p>- bill/usage</p>
      <p>- ApartmentNumber</p>
      <p>- payed last month bool</p>
      <p>- LandLordID</p>

      <h2>List of Landlords</h2>
      <h3>Each Landlord</h3>
      <p>- LandlordId</p>
      <p>- name</p>
      <p>- address</p>
      <p>- ApartmentId</p>
      <p>- LandLord</p>

      <h2>List of Apartments</h2>
      <h3>Each Apartment</h3>
      <p>- ApartmentId</p>
      <p>- ApartmentNumber</p>
      <p>- TenantID</p>
      <p>- ApartmentNumber</p>
      <p>- payed last month bool</p>
      <p>- LandLord</p>


      <h3>
        Check if the user paid last month otherwise add a 10% fee and notify Landlord
        Maybe use bootstrap
      </h3>

      <h1>TODO</h1>
      <p>Place to see all apartments/which are open</p>
      <p>place to view all landlords</p>
      <p>place to view all Tenants</p>
      <p>place to edit all</p>

    </div>
  )
}

export default TodoPage