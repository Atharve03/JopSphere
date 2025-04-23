import { setSearchedQuery } from '@/redux/jobSlice';
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button'

const HeroSection = () => {
    const [query,setQuery]=useState("");
    const dispatch= useDispatch();
    const navigate = useNavigate()

    const searchJobHandler=()=>{
        dispatch(setSearchedQuery(query));
        navigate("/browse")
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='px-4 mx-auto py-2 rounded-full bg-gray-100 text-[#F83001] font-medium'>Welcome to Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search,Apply& <br />Get Your <span className='text-[#6A38c2]'>Dream Job</span></h1>
                <p class="p-6 m-4 bg-white rounded-lg  text-center">
  Welcome to Job<span className="text-[#F83002]">Sphere</span>, the ultimate platform for connecting job seekers with top employers. Whether you're looking for full-time, part-time, or freelance opportunities, our user-friendly interface makes it easy to browse thousands of job listings, apply with a single click, and receive personalized job recommendations. Employers can quickly post openings and connect with the best talent, all in one place. Start your journey today—find your next opportunity or hire your next great employee with Job<span className="text-[#F83002]">Sphere</span>!
</p>
    <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto' >
                    <input 
                    onChange={(e)=>setQuery(e.target.value)}
                    type="text" placeholder='Find Your Dream Job'
                    className='outline-none border-none w-full'
                    />
                    <Button onClick={searchJobHandler} className='rounded-r-full bg-[#6A38c2]'>
                        <Search className='h-5 w-5'/>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default HeroSection
