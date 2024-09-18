import React from "react";
import { useState, useEffect } from 'react'
import Textarea from "./textarea";
import OptionInput from "./options";
import Multi_text from "./multi_text";
import ColorPicker from "./colorPicker";
import Conditional_multi_text from "./Conditional_multi_text";


const Inputbox = (props) => {

    const getinputvalue = (id) => {
        return props.inputvalue(id);
    };

    const [input_value, setinput_value] = useState(getinputvalue(props.data.id));

    const handleChange = (value) => {
        props.submitdetails(props.data.id, value);
        setinput_value(value)
    };

    let data_html;

    switch (props.data.fieldType) {
        case "text":
          data_html = (
            <Textarea
              handleinput={handleChange}
              inputvalue={input_value}
              id={props.data.id}
              Question={props.data.Question}
              validation={props.validation}
              required={props.data.required}
              info={props.data.info ? props.data.info : ''}
            />
          );
          break;
        case "option":
          data_html = <OptionInput
          handleinput={handleChange}
          inputvalue={input_value}
          id={props.data.id}
          Question={props.data.Question}
          validation={props.validation}
          required={props.data.required}
          option={props.data.option}
          multiselect={props.data.multiselect}
          info={props.data.info ? props.data.info : ''}
           />;
          break;

        case "multi-text":
          data_html = <Multi_text
          handleinput={handleChange}
          inputvalue={input_value}
          id={props.data.id}
          Question={props.data.Question}
          validation={props.validation}
          required={props.data.required}
          limit={props.data.limit}
          placeholder={props.data.placeholder}
          info={props.data.info ? props.data.info : ''}
          errormsg={props.errormsg}
          suggestions={props.data.suggestions}
           />;
          break;  

          case "colorPicker":
            data_html = <ColorPicker
            handleinput={handleChange}
            inputvalue={input_value}
            id={props.data.id}
            Question={props.data.Question}
            validation={props.validation}
            required={props.data.required}
            limit={props.data.limit}
            placeholder={props.data.placeholder}
            info={props.data.info ? props.data.info : ''}
            colors={props.data.colorRequirement}
            errormsg={props.errormsg}

             />;
             break; 
             case "conditional-multi-text":
            data_html = <Conditional_multi_text
                            handleinput={handleChange}
                            inputvalue={input_value}
                            id={props.data.id}
                            Question={props.data.Question}
                            validation={props.validation}
                            required={props.data.required}
                            limit={props.data.limit}
                            placeholder={props.data.placeholder}
                            info={props.data.info ? props.data.info : ''}
                            colors={props.data.colorRequirement}
                            Affemative={props.data.Affemative} 
                            Negative={props.data.Negative}
                            Negative_note={props.data.Negative_note}
                            errormsg={props.errormsg}
             />;

            break;    


        default:
          data_html = <p>No valid field type provided</p>; // Default case
          break;
      }


      useEffect(() => {
        setinput_value(getinputvalue(props.data.id));
      }, [props.data.id, props.inputvalue]);



    return (
        <>
               {data_html}
        </>


        // <div className='question-box p-4 md:p-8 bg-primary100 w-full lg:mb-12 gap-4 flex flex-col lg:rounded-custom-xl'>
        //     <div className="question-container flex gap-4 justify-start p2 items-start">
        //         <h1 className="text-label-sm lg:text-label  text-primary font-medium text-white  h-7 w-7 lg:h-10 lg:w-10 rounded-custom-full bg-primary flex items-center justify-center leading-100">
        //             {parseInt(props.data.id.replace(/[^\d]/g, ''), 10)}
        //         </h1>
        //         <h2 className='text-label-sm lg:text-label font-medium text-gray-800 flex-1'>{props.data.Question}</h2>
        //     </div>
 
        //     <div className="answer-container flex gap-4 justify-start p2 items-start">
        //         <h1 className="text-subtitle text-primary font-medium text-white h-10 w-10 rounded-custom-full bg-primary hidden lg:flex items-center justify-center leading-100 opacity-0">
        //             A.
        //         </h1>
        //         <textarea 
        //             className=
        //             {input_value !== '' || props.validation !== true ? 
        //             'w-full bg-white text-gray-600 resize-y placeholder-gray-500 focus:ring-2 focus:ring-primary-200 focus:rounded-custom-lg hover:ring-1 hover:ring-primary-300 px-4 py-2 lg:px-8 lg:py-6 text-input-sm lg:text-input min-h-custom-md rounded-custom-lg' :
        //             'w-full bg-white text-gray-600 resize-y placeholder-gray-500 ring-2 ring-red-500 focus:ring-2 focus:ring-primary-200 focus:rounded-custom-lg hover:ring-1 hover:ring-primary-300 px-8 py-6 text-input-sm lg:text-input min-h-custom-md  rounded-custom-lg'
        //         }
        //             required={props.data.required}
        //             placeholder='Please provide details'
        //             onChange={handleChange}
        //             // Directly use the value from getinputvalue function
        //             value={getinputvalue(props.data.id)}
        //         >
        //         </textarea>
        //     </div>
        // </div>
    );
}

export default Inputbox;
