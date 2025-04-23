import { setSearchedQuery } from '@/redux/jobSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

const filterData = [
  {
    filterType: 'Location',
    array: ['Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Mumbai', 'Remote']
  },
  {
    filterType: 'Role',
    array: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Mobile Developer', 'DevOps Engineer']
  },
 

];
const FilterCard = () => {
  const [selectedValue,setSelectedValue] = useState('');
  const dispatch= useDispatch()
  const handlerChange = (value) =>{
    setSelectedValue(value);
  }
  useEffect(()=>{
    dispatch(setSearchedQuery(selectedValue))

  },[selectedValue])
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup onValueChange={handlerChange} value={selectedValue}>
        {filterData.map((data, index) => (
          <div>
            <h1 className='font-bold text-lg'>{data.filterType}</h1>
            {
              data.array.map((item,idx)=>{
                const itemId=`id${index}-${idx}'`
              return(
                <div className='flex items-center space-x-2 m-2'>
                  <RadioGroupItem value={item} id={itemId}/>
                  <Label htmlFor={itemId}>{item}</Label>

                  
                </div>
              )}
              )
            }
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterCard
