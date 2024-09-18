import React from "react";
import { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'remixicon/fonts/remixicon.css';

const Textarea = ({handleinput,inputvalue,id,Question,validation,required,info}) => {

    return (
        <div className='question-box p-4 md:p-8 bg-primary100 w-full lg:mb-12 gap-4 flex flex-col lg:rounded-custom-xl'>
            <div className="question-container flex gap-4 justify-start p2 items-start">
                <h1 className="text-label-sm lg:text-label  text-primary font-medium text-white  h-7 w-7 lg:h-10 lg:w-10 rounded-custom-full bg-primary flex items-center justify-center leading-100">
                    {parseInt(id.replace(/[^\d]/g, ''), 10)}
                </h1>
                <h2 className='text-label-sm lg:text-label font-medium text-gray-800 flex-1 flex gap-2'>{Question} {required && <span className="text-red-600 font-bold">*</span>}

                {info !== '' ?  <Tippy content={info}>
                        <button><i className='ri-information-line text-primary text-label'></i> </button>
                    </Tippy> : null
      
                        }
                </h2>


            </div>
 
            <div className="answer-container flex gap-4 justify-start p2 items-start">
                <h1 className="text-subtitle text-primary font-medium text-white h-10 w-10 rounded-custom-full bg-primary hidden lg:flex items-center justify-center leading-100 opacity-0">
                    A.
                </h1>
                <textarea 
                    className=
                    {inputvalue !== '' || validation !== true || !required ? 
                    'w-full bg-white text-gray-600 resize-y placeholder-gray-500 focus:ring-2 focus:ring-primary-200 focus:rounded-custom-lg hover:ring-1 hover:ring-primary-300 px-4 py-2 lg:px-8 lg:py-6 text-input-sm lg:text-input min-h-custom-md rounded-custom-lg' :
                    'w-full bg-white text-gray-600 resize-y placeholder-gray-500 ring-2 ring-red-500 focus:ring-2 focus:ring-primary-200 focus:rounded-custom-lg hover:ring-1 hover:ring-primary-300 px-8 py-6 text-input-sm lg:text-input min-h-custom-md  rounded-custom-lg'
                }
                    required={required}
                    placeholder='Please provide details'
                    onChange={(event) => handleinput(event.target.value)}
                    // Directly use the value from getinputvalue function
                    value={inputvalue}
                >
                </textarea>
            </div>
        </div>
    )


}

export default Textarea;