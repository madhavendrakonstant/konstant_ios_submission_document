import React from "react";
import { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Validator from "../utilities/validation";



const Password_input = ({handleinput,inputvalue,id,Question,validation,required,option,multiselect,info}) => {


    return (
            <div className="answer-container flex gap-4 justify-start p2 items-start">
                <h1 className="text-subtitle text-primary font-medium text-white h-10 w-10 rounded-custom-full bg-primary hidden lg:flex items-center justify-center leading-100 opacity-0">
                    A.
                </h1>
                <input 
                className="w-full bg-white text-gray-600 resize-y placeholder-gray-500 focus:border-b-2 focus:border-primary hover:border-b hover:border-gray-500 text-input-sm lg:text-input border-b border-primary200 focus-visible:outline-none" 
                required={required} 
                value={inputvalue}
                type="password"
                onChange={(event) => handleinput(event.target.value)}
                />
            </div>
    )


}

export default Password_input;