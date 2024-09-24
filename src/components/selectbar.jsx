import React from "react";
import { useState, useEffect,useRef } from 'react'

const Selectbar = ({handleinput,inputvalue,validation,required,select_options}) => {

    const [selectoption_active, set_selectoption_active] = useState(false)
    const [activeSuggestion, setActiveSuggestion] = useState(-1);
    const select_ref = useRef(null)
    const suggestionRefs = useRef([]);
    const input_ref = useRef(null)

    
    const selectOptions_html = select_options && select_options.length > 0 ? select_options.map((value,index)=> {
        const isActive = index === activeSuggestion;

        return (
            <li className={`w-full border-b-2 border-b-gray-100 ${isActive ? 'bg-gray-200' : ''}`}  key={index} ref={(el) => suggestionRefs.current[index] = el}>
                    <button className="py-4 px-4 text-gray-700 text-input-sm hover:bg-gray-100 w-full text-left"
                    onClick={() => {handleinput(value); set_selectoption_active(false)}}
                    >
                                    {value}
                                </button>
            </li>
        )
    }) : null

    const handleInputBlur = (event) => {

        setTimeout(() => {
        if (select_ref.current && !select_ref.current.contains(event.relatedTarget)) {
          set_selectoption_active(false);
        }
      }, 100); 

      };


      const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
  
            setActiveSuggestion((prevIndex) => 
                prevIndex < select_options.length - 1 ? prevIndex + 1 : prevIndex
            );
  
            console.log('arrow down')
  
            console.log(activeSuggestion)
            e.preventDefault();
  
        } else if (e.key === 'ArrowUp') {
  
            setActiveSuggestion((prevIndex) => 
                prevIndex > 0 ? prevIndex - 1 : 0
            );

            e.preventDefault();
        } else if (e.key === 'Enter') {

            handleinput(select_options[activeSuggestion]);
            set_selectoption_active(false)
            input_ref.current.blur();
        }
    };


    useEffect(() => {
        // Scroll the active suggestion into view
        if (activeSuggestion >= 0 && suggestionRefs.current[activeSuggestion]) {
            suggestionRefs.current[activeSuggestion].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });

            console.log('working')
        }
    }, [activeSuggestion]);



    


    return (

            <div className="answer-container flex gap-4 justify-start p2 items-start relative z-40" onBlur={handleInputBlur} ref={select_ref}>
                <h1 className="text-subtitle text-primary font-medium text-white h-10 w-10 rounded-custom-full bg-primary hidden lg:flex items-center justify-center leading-100 opacity-0">
                    A.
                </h1>
                <div className={inputvalue !== '' || validation !== true || !required ? "options_container flex flex-row gap-4 wrap w-full rounded-custom-md relative" : "options_container flex flex-row gap-4 wrap w-full border-2 border-red-500 rounded-custom-md relative"}>
                

                        <input type="text" 
                                    className={
                                        inputvalue !== '' || validation !== true || !required ? 
                                        "w-full bg-white text-gray-600 placeholder-gray-500 border-b border-primary200 focus:border-b-2 focus:border-primary hover:border-b-2 hover:border-gray-600 py-4 text-input-sm lg:text-input focus-visible:outline-none"
                                        : "w-full bg-white text-gray-600 placeholder-gray-500 border-b border-primary200 focus:border-b-2 border-b-2 border-red-600 focus:border-primary hover:border-b-2 hover:border-gray-600 py-4 text-input-sm lg:text-input focus-visible:outline-none"
                                    }
                                    name="select-bar-options"
                                    onFocus={() => set_selectoption_active(true)}
                                    value={inputvalue}
                                    readOnly={true}
                                    onKeyDown={handleKeyDown}
                                    ref={input_ref}
                        />

                            {
                            selectoption_active ? 
                            <ul className="select-option flex flex-col gap-0 m-0 bg-white rounded-b-lg overflow-hidden shadow-ios absolute w-full max-h-64 overflow-y-scroll mt-18 z-50"
                            style={{zIndex: 999}}
                            >
                            {selectOptions_html}
                            </ul> : null
                            
                            }
                            <i 
                                className='ri-arrow-down-s-line text-gray-700 text-label text-gray-300 absolute right-0 top-2 lg:top-5'
                                onClick={() => set_selectoption_active(!selectoption_active)}
                            ></i> 
     

                </div>
            </div>
    )


}

export default Selectbar;