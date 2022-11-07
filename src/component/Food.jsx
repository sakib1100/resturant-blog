import React, { useState } from "react";
// Data
import {data} from "../data/data";

function Food() {
    const [foods, setFoods] = useState(data)

    // filter Type
    const filterType = (category) => {
        if(category === 'all') return setFoods(data)
        setFoods(
            data.filter((item)=> {
                return item.category === category
            })
        )
    }

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price
            })
        )
    }
    return(
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-center pt-4">
                {/* Filter Type */}
                <div className="flex justify-between flex-wrap items-center">
                                       
                    <div>
                        <button onClick={()=> filterType('all')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
                        <button onClick={()=> filterType('burger')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burger</button>
                        <button onClick={()=> filterType('pizza')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
                        <button onClick={()=> filterType('salad')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salad</button>
                        <button onClick={()=> filterType('chicken')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>    
                    </div>                                            
                </div>

                {/* Filter Price */}

               
            </div>

            {/* Display Foods */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {
                    foods.map((item,index)=>(
                        <div key={item.id} className="border shadow-lg hover:scale-105 duration-300 rounded-lg overflow-hidden">
                            <img className="w-full h-[200px] object-cover" src={item.image} alt={item.name} />
                            <div className="flex justify-between px-2 py-4">
                                <p className="font-bold">{item.name}</p>
                                <p className=""><span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span></p>                                
                            </div>
                        </div>
                    ))
                }
              
            </div>
        </div>
    )
}

export default Food;