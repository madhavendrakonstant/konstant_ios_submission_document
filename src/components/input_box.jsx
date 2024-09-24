import React from "react";
import { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import 'remixicon/fonts/remixicon.css';
import Validator from "../utilities/validation";

import Textarea from "./textarea";
import OptionInput from "./options";
import Multi_text from "./multi_text";
import ColorPicker from "./colorPicker";
import Conditional_multi_text from "./Conditional_multi_text";
import Date_picker from "./data_picker";
import Selectbar from "./selectbar";
import Table_selection from "./table_selection";
import Password_input from "./password";



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
              validity={props.data.validity}
              

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

          case "selectbar":
            data_html = <Selectbar
                          handleinput={handleChange}
                          inputvalue={input_value}
                          id={props.data.id}
                          Question={props.data.Question}
                          validation={props.validation}
                          required={props.data.required}
                          placeholder={props.data.placeholder}
                          errormsg={props.errormsg}
                          select_options={props.data.select_options}
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
          validity={props.data.validity}
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
                            validity={props.data.validity}
             />;
            break;
            
            case "date":
              data_html = <Date_picker
                            handleinput={handleChange}
                            inputvalue={input_value}
                            id={props.data.id}
                            Question={props.data.Question}
                            validation={props.validation}
                            required={props.data.required}
                            placeholder={props.data.placeholder}
                            errormsg={props.errormsg}
                    />;
            break;

            case "table-selection":
              data_html = <Table_selection
                            handleinput={handleChange}
                            inputvalue={input_value}
                            id={props.data.id}
                            Question={props.data.Question}
                            validation={props.validation}
                            required={props.data.required}
                            placeholder={props.data.placeholder}
                            errormsg={props.errormsg}
                            content_description={props.data.content_description}
                            level={props.data.level}
                    />;
            break;

            case "password" : 
            data_html = <Password_input 
              handleinput={handleChange}
              inputvalue={input_value}
              id={props.data.id}
              Question={props.data.Question}
              validation={props.validation}
              required={props.data.required}
              validity={props.data.validity}
              />
            break;
       


        default:
          data_html = <p>No valid field type provided</p>; // Default case
          break;
      }


      useEffect(() => {
        setinput_value(getinputvalue(props.data.id));
      }, [props.data.id, props.inputvalue]);

    
      const col_span = props.data.fieldType == 'table-selection' ? 'col-span-2' : 'col-span-1'


    return (
        <>
         <div className={'question-box p-4 md:p-8 bg-white w-full lg:mb-0 gap-4 flex flex-col lg:rounded-custom-xl h-max-content ' + col_span}>
            <div className="question-container flex gap-4 justify-start p2 items-center">
                
                <h1 className="text-label-sm items-center lg:text-input-sm  text-primary font-medium text-primary  h-7 w-7 lg:h-10 lg:w-10 rounded-custom-full bg-white flex items-center justify-center leading-100 border border-primary200">
                    {parseInt(props.data.id.replace(/[^\d]/g, ''), 10)}
                </h1>
                
                <h2 className='text-label-sm lg:text-label leading-initial  font-medium text-gray-800 flex-1 flex gap-2'>{props.data.Question} {props.data.required && <span className="text-red-600 font-bold leading-100 inline-flex items-center">*</span>}

                {props.data.info && props.data.info !== '' ?  <Tippy content={props.data.info}>
                        <button><i className='ri-information-line text-primary text-label'></i> </button>
                    </Tippy> : null
      
                        }
                </h2>
            </div>

               {data_html}

        </div>
        </>


     
    );
}

export default Inputbox;
