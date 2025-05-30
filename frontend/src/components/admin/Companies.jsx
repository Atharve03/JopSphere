
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { setSearchCompanyByText } from '@/redux/companySlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Navbar from '../ui/shared/navbar'
import CompaniesTable from './CompaniesTable'

const Companies = () => {
  useGetAllCompanies()
  const  [input, setInput] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setSearchCompanyByText(input))
  },[input]);
  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
        <Input
        className='w-fit mx-5'
        placeholder='Filter by name'
        onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={()=>navigate('/admin/companies/create')} className='bg-black text-white'>New Company</Button>
     
        </div>
        <CompaniesTable/>
        </div>
     
    </div>
  )
}

export default Companies
