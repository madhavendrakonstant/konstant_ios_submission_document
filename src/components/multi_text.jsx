import React from "react";
import { useState, useEffect, useRef } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import 'remixicon/fonts/remixicon.css';
// import { ToastContainer, toast } from 'react-toastify';

const Multi_text = ({handleinput,inputvalue,id,Question,validation,required,placeholder,limit,info,errormsg,suggestions}) => {

    const [multi_text_value, set_multi_text_value] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [currentSuggestion, set_currentSuggestion] = useState([])
    const [suggestions_active, set_suggestions_active] = useState(false)

    const suggestion_ref = useRef(null)
    const input_ref = useRef(null)



    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

          if(currentSuggestion.length == 1) {
            handleSubmit(currentSuggestion[0]);
          }
          else {
            handleSubmit(inputValue);
          }
        }


      };


      const handleSubmit = (value) => {
        if (value.trim() === '') return; 


        if( multi_text_value.indexOf(value.trim()) !== -1 ) return

        if(multi_text_value.length >= limit) {

            errormsg("Upto "+limit + " are allowed!");
              return
        }

  

    
        let current_multiSelect = [...multi_text_value];
    
        current_multiSelect.push(value.trim());
    
        set_multi_text_value(current_multiSelect);
        setInputValue('');
    
        const formattedValue = current_multiSelect.length > 1 ? current_multiSelect.join(', ') : current_multiSelect[0] || '';


        handleinput(formattedValue.replace(/^,?\s*/, ''));

        set_suggestions_active(false)

    };

      const removeItem = (value) => {

        let current_multiSelect = [...multi_text_value]
        current_multiSelect = current_multiSelect.filter(items => items !== value)
        set_multi_text_value(current_multiSelect)

        const formattedValue = current_multiSelect.length > 1 ? current_multiSelect.join(', ') : current_multiSelect[0] || '';
        handleinput(formattedValue);

        
      }

      const handleInputBlur = (event) => {

        setTimeout(() => {
        if (suggestion_ref.current && !suggestion_ref.current.contains(event.relatedTarget)) {
          set_suggestions_active(false);
        }
      }, 100); 

      };

      const setInputSearchValue = (value) => {
        setInputValue(value)
      } 




    useEffect(() => {

        if(!suggestions || suggestions.length < 1) return


        if (inputValue.length >= 1) {

        !suggestions_active ? set_suggestions_active(true) : null
    
          const filteredSuggestions = suggestions
            .filter(suggestion => 
              suggestion.toLowerCase().includes(inputValue.toLowerCase())
            )
            .slice(0, 5); 
          
          set_currentSuggestion(filteredSuggestions);
        } else {
            set_currentSuggestion(suggestions.slice(0, 5));
        }

      }, [inputValue, suggestions]);


      useEffect(()=> {
        let current_entry = inputvalue.split(', ')
        set_multi_text_value(current_entry)

        console.log('array set')
    },[inputValue])



    const multiSelect_cards_html = multi_text_value.length > 0 && inputvalue !== '' ? multi_text_value
    .filter(data => data.trim() !== '')
    .map((data, index) => {
        return (
            <div className="py-2 px-6 flex gap-4 items-center border border-gray-400 bg-gray-100 text-gray-600 rounded-custom-md" key={index}>
              <p className="max-w-70ch truncate">{data}</p>  
                <button onClick={() => removeItem(data)} className="w-8 h-8 rounded-custom-lg flex items-center justify-center hover:bg-gray-200">
                    <i className='ri-close-line text-gray-700 text-label'></i> 
                </button>
            </div>
        );
    }) : null;


    const suggestions_loop = currentSuggestion.length > 0 ? currentSuggestion.map((list,index)=> {
        return (
            <li className="w-full border-b-2 border-b-gray-100" key={index}>
                                <button className="py-4 px-4 text-gray-700 text-input-sm hover:bg-gray-100 w-full text-left"
                                onClick={() => handleSubmit(list)}
                                >
                                     {list}
                                </button>
             </li>
        )
    }) : null

    return (
        <>
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
                <div className="flex flex-col gap-4 w-full">


                    <div className="seach-container" ref={suggestion_ref} onBlur={handleInputBlur}> 

                        <div className="input-container relative w-full">
                            <input type="text" 
                            className={
                                inputvalue !== '' || validation !== true || !required ? 
                                "border-b-2 border-b-gray-300 w-full bg-white text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-primary-200 focus:rounded-t-md rounded-t-md hover:ring-1 hover:ring-primary-300 px-4 py-4 text-input-sm lg:text-input rounded-b-none"
                                : "w-full bg-white text-gray-600 placeholder-gray-500 ring-2 ring-red-500 focus:ring-2 focus:ring-primary-200 focus:rounded-t-md rounded-t-md hover:ring-1 hover:ring-primary-300 px-4 py-4 text-input-sm lg:text-input rounded-b-none"
                            }
                            name="value_items"
                            placeholder={placeholder}
                            onChange={(e) => setInputSearchValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onFocus={() => set_suggestions_active(true)}
                            value={inputValue}
                            ref={input_ref}
                            />

                            <button className="w-10 h-10 flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2"
                            onClick={()=> handleSubmit(inputValue)}
                            >
                                <i className='ri-add-large-fill text-gray-700 text-label text-gray-300'></i> 
                            </button>

                        </div>
                        {
                            suggestions_active ? <ul className="suggestions flex flex-col gap-0 m-0 p-0 bg-white rounded-b-lg overflow-hidden" ref={suggestion_ref}>
                            {suggestions_loop}
                             </ul> : null
                        }
                        

                    </div>  


                    <div className="multitext_container flex flex-row gap-4 flex-wrap w-full">
                        {multiSelect_cards_html}
                        </div>
                
                </div>
                


            </div>
        </div>
        </>
    )


}

export default Multi_text;