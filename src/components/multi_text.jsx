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

    const [activeSuggestion, setActiveSuggestion] = useState(-1); // Index of the active suggestion

    const suggestion_ref = useRef(null)
    const input_ref = useRef(null)



    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {

          setActiveSuggestion((prevIndex) => 
              prevIndex < currentSuggestion.length - 1 ? prevIndex + 1 : prevIndex
          );

          console.log('arrow down')

          console.log(activeSuggestion)


      } else if (e.key === 'ArrowUp') {

          setActiveSuggestion((prevIndex) => 
              prevIndex > 0 ? prevIndex - 1 : 0
          );
      } else if (e.key === 'Enter') {

        // console.log(currentSuggestion[activeSuggestion])

        if(activeSuggestion == -1) {
          handleSubmit(inputValue);
        }
        else {
          handleSubmit(currentSuggestion[activeSuggestion]);
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


        if(limit == 1) {
          setInputValue(value)
          set_multi_text_value([]);
        }
        else {
          set_multi_text_value(current_multiSelect);
          setInputValue('');
          console.log('this one')
        }

    
        const formattedValue = current_multiSelect.length > 1 ? current_multiSelect.join(', ') : current_multiSelect[0] || '';


        handleinput(formattedValue.replace(/^,?\s*/, ''));

        set_suggestions_active(false)

    };

      const removeItem = (value) => {

        let current_multiSelect = [...multi_text_value]
        current_multiSelect = current_multiSelect.filter(items => items !== value)
        set_multi_text_value(current_multiSelect)
        console.log('this one 2')

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

       if(inputValue.length < 2) {
        setActiveSuggestion(-1)
       }


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
      const isActive = index === activeSuggestion;
        return (
            <li className={`w-full border-b-2 border-b-gray-100 ${isActive ? 'bg-gray-200' : ''}`} key={index}>
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
     
 
            <div className="answer-container flex gap-4 justify-start p2 items-start relative z-40">
                <h1 className="text-subtitle text-primary font-medium text-white h-10 w-10 rounded-custom-full bg-primary hidden lg:flex items-center justify-center leading-100 opacity-0">
                    A.
                </h1>
                <div className="flex flex-col gap-4 w-full">


                    <div className="seach-container relative" ref={suggestion_ref} onBlur={handleInputBlur}> 

                        <div className="input-container relative w-full">
                            <input type="text" 
                            className={
                                inputvalue !== '' || validation !== true || !required ? 
                                "w-full bg-white text-gray-600 placeholder-gray-500 border-b border-primary200 focus:border-b-2 focus:border-primary hover:border-b-2 hover:border-gray-600 py-4 text-input-sm lg:text-input focus-visible:outline-none"
                                : "w-full bg-white text-gray-600 placeholder-gray-500 border-b border-primary200 focus:border-b-2 border-b-2 border-red-600 focus:border-primary hover:border-b-2 hover:border-gray-600 py-4 text-input-sm lg:text-input focus-visible:outline-none"
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
                                <i className={limit == 1 ? 'ri-arrow-down-s-line text-gray-700 text-label text-gray-300' : 'ri-add-large-fill text-gray-700 text-label text-gray-300'}></i> 
                            </button>

                        </div>
                        {
                            suggestions_active ? <ul className="suggestions flex flex-col gap-0 m-0 bg-white rounded-b-lg overflow-hidden shadow-ios absolute w-full z-50" ref={suggestion_ref}>
                            {suggestions_loop}
                             </ul> : null
                        }
                        

                    </div>  


                    <div className="multitext_container flex flex-row gap-4 flex-wrap w-full">
                        {multiSelect_cards_html}
                        </div>
                
                </div>
                


            </div>
        </>
    )


}

export default Multi_text;