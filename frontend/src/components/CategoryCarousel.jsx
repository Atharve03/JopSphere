import { setSearchedQuery } from '@/redux/jobSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Design",
    "Artificial Intelligence",
    "Full Stack Developer",
]
const CategoryCarousel = () => {

    const dispatch= useDispatch();
    const navigate = useNavigate()

    const searchJobHandler=(query)=>{
        dispatch(setSearchedQuery(query));
        navigate("/browse")
    }
    return (
        <div>
            <Carousel className='w-full max-w-xl mx-auto my-00'>
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3 ">
                                <Button onClick={()=>searchJobHandler(cat)} variant='outline' className=' rounded-full'>
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel
