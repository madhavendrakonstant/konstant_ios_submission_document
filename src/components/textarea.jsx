import React from "react";
import { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'remixicon/fonts/remixicon.css';
import Validator from "../utilities/validation";

const Textarea = ({handleinput,inputvalue,id,Question,validation,required,info,validity}) => {

    const [currentValue, set_currentValue] = useState('')
    const [validity_msg, setvalidity_msg] = useState('')

    const handle_validation = (value) =>  {

        set_currentValue(value);
        const validator = new Validator(); 
        let result = validator.validate(value, validity); 

        if ((result === true) || (value !== '' && result == 'Please fill details.' )) {
            setvalidity_msg(''); 
            handleinput(value)
        } else {
            setvalidity_msg(result);
            handleinput('')
            console.log(validity_msg)
            console.log(validity)
        }
        
    };

    useEffect(()=> {
        set_currentValue(inputvalue)
    },[])

    return (
            <div className="answer-container flex gap-4 justify-start p2 items-start lg:pb-5 relative">
                <h1 className="text-subtitle text-primary font-medium text-white h-10 w-10 rounded-custom-full bg-primary hidden lg:flex items-center justify-center leading-100 opacity-0">
                    A.
                </h1>
                <textarea 
                    className=
                    {inputvalue !== '' || validation !== true || !required ? 
                    'w-full bg-white text-gray-600 resize-y placeholder-gray-500 focus:border-b-2 focus:border-primary hover:border-b hover:border-gray-500 text-input-sm lg:text-input border-b border-primary200 focus-visible:outline-none' :
                    'w-full bg-white text-gray-600 resize-y placeholder-gray-500 focus:border-b-2 focus:border-primary hover:border-b hover:border-gray-500 text-input-sm lg:text-input border-b border-red-500 focus-visible:outline-none'
                }
                    required={required}
                    placeholder='Please provide details'
                    onChange={(event) => handle_validation(event.target.value)}
                    value={currentValue}
                >
                </textarea>
                <div className={inputvalue == '' && validation == true && validity_msg && validity_msg !== '' ? "valid-info bg-red-500 text-white p-2 rounded-custom-md left-12 absolute mt-14" : 'hidden'}>
                    {validity_msg}
                </div>

            </div>
       
    )


}

export default Textarea;