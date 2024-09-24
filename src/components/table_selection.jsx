import React from "react";
import { useState, useEffect,useRef } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';




const Table_selection = ({handleinput,inputvalue,validation,required,content_description,level}) => {

    const [active_values, setActive_values] = useState([])

    useEffect(()=> {

        if(inputvalue && inputvalue !== '') {

            let data =  JSON.parse(inputvalue)
            setActive_values(data)
            
        } else {

            const active_values_array = []

            content_description.map((values)=> {
                let object = {name: values , level: 'None'}
                active_values_array.push(object)
            })
            setActive_values(active_values_array)
            console.log(active_values_array)

            handleinput(JSON.stringify(active_values_array))

        }

    },[])

    const update_active_values = (name,value) => {

        let current_values = [...active_values]

        current_values.map((data) => {
            data.name == name ? data.level = value : null
        })        
        setActive_values(current_values)

        handleinput(JSON.stringify(current_values))

    }

    let content_list = active_values.map((list,index) => {

        let list_name = list.name
        let list_value = list.level
        let current_rank = level.indexOf(list_value)


        console.log(current_rank)
 
        return (

        <div className="flex flex-col items-center md:flex-row lg:gap-2 bg-white rounded-md my-2 w-full justify-between border border-gray-200 lg:border-none py-4" key={index}>
            <h1 className="flex-1 text-gray-400 lg:text-primary self-center w-full text-center md:text-left pb-2 custom-avoid-break">{list.name}</h1>

            <div className="relative tab-selection-container bg-gray-100/50 rounded-custom-md overflow-hidden col-span-7 
            grid 
            grid-cols-[repeat(auto-fit,minmax(70px,1fr))] 
            lg:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] 
            
            max-w-tab">


            <div className={"tab-active absolute w-1/3 bg-gray-200 h-full transition-left duration-300"} style={{left: current_rank / level.length * 100 + '%'}}></div>

                {
                    level.map((value,index)=> {

                        let activeClass = list_value == value ? 'text-primary font-medium' : 'bg-transparent text-gray-400'
                        let border_class = index !== level.length - 1 ? 'border-r border-gray-200' : ''

                        return (
                            <button className={border_class + " px-4 py-2 text-primary relative z-10" + activeClass} key={index} onClick={()=> update_active_values(list_name,value)}>{value}</button>
                        )
                        
                    })
                }
            </div>

          

        </div>
        )

    })



    return (

            <div className="answer-container flex gap-4 justify-start p2 items-start">
                <h1 className="text-subtitle text-primary font-medium text-white h-10 w-10 rounded-custom-full bg-primary hidden lg:flex items-center justify-center leading-100 opacity-0">
                    A.
                </h1>
                <div className="options_container w-full rounded-custom-md relative">
                        {content_list}
                </div>
            </div>
    )


}

export default Table_selection;