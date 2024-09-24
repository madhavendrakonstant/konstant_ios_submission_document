import React from "react";
import { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



const OptionInput = ({handleinput,inputvalue,id,Question,validation,required,option,multiselect,info}) => {

    const [active_option, set_active_option] = useState([])

    const setOptions = (value) => {
        let current_options = [...active_option];
    
        if (multiselect) {
            if (current_options.indexOf(value) === -1) {
                current_options.push(value);
            } else {
                current_options = current_options.filter(item => item !== value);
            }
        } else {

            current_options = [value];
        }

        set_active_option(current_options);
    

        const formattedValue = current_options.length > 1 ? current_options.join(', ') : current_options[0] || '';
    
        handleinput(formattedValue.replace(/^,?\s*/, ''));
    };

    useEffect(()=> {

        let current_entry = inputvalue.split(', ')

        set_active_option(current_entry)

    },[inputvalue])

    const options_cards_html = option.map((data,index)=> {
        return (
            <button className={active_option.indexOf(data) == -1 ? 
                "p-4 border border-gray-200 bg-white text-gray-600 rounded-custom-md" : 
                "p-4 border-2 border-primary bg-white text-primary rounded-custom-md"} key={index}
            
                onClick={()=> setOptions(data)}
            >
                {data}
            </button>
        )
    })

    

    return (

            <div className="answer-container flex gap-4 justify-start p2 items-start">
                <h1 className="text-subtitle text-primary font-medium text-white h-10 w-10 rounded-custom-full bg-primary hidden lg:flex items-center justify-center leading-100 opacity-0">
                    A.
                </h1>
                <div className={inputvalue !== '' || validation !== true || !required ? "options_container flex flex-row gap-4 wrap w-full rounded-custom-md" : "options_container flex flex-row gap-4 wrap w-full border-2 border-red-500 rounded-custom-md"}>
                {options_cards_html}
                </div>
            </div>
    )


}

export default OptionInput;