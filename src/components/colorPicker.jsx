import React from "react";
import { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'remixicon/fonts/remixicon.css';
import {  PhotoshopPicker } from 'react-color';


const ColorPicker = ({handleinput,inputvalue,id,Question,validation,required,info,colors,errormsg,limit}) => {

    const [colorOptions,setcolorOptions] = useState([])
    const [activeColorPicker, setActiveColorPicker] = useState(null); 
    const [currentColor, setCurrentColor] = useState('');


    const addColor = () => {
        let current_colors = [...colorOptions]

        if(colorOptions.length > limit - 1) {
            errormsg('Only '+limit+' colors are allowed!')
            return
        }
            
          
        let newObject = {'name' : 'color-'+ (colorOptions.length + 1) , 'value' : '#'}
        current_colors.push(newObject)

        setcolorOptions(current_colors)
        console.log(current_colors)

    }

    const removeColorCard = (remove) => {
        let current_colors = [...colorOptions]

        const new_color_array = current_colors.filter((data) => data.name !== remove.name)

        setcolorOptions(new_color_array)

        handleinput(JSON.stringify(new_color_array))
    }

    const isValidJson = (str) => {
        try {
          JSON.parse(str); 
          return true;    
        } catch (e) {
          return false;
        }
      };


    useEffect(()=> {
        let complete_colors = []

        if(isValidJson(inputvalue)) {

            const jsonObject = JSON.parse(inputvalue);
            complete_colors = jsonObject

        }
        else {
            let color_list = [...colors]
  

            color_list.map((data,index)=> {
                let new_object = {name: data, value: '#'}
                complete_colors.push(new_object)
            })
    
        }

        setcolorOptions(complete_colors)


    },[colors])

    const isValidColor = (color) => {
        const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;
        return hexColorRegex.test(color) || CSS.supports("color", color);
      };

    const setcolorvalues = (value,name) => {

        let color_list = [...colorOptions]

       color_list.forEach(data => {
        data.name == name ? data.value = value : null
       })
        console.log(color_list)

       setcolorOptions(color_list)
    
       let final_colors = color_list.filter((data) => isValidColor(data.value))

       handleinput(JSON.stringify(final_colors))



    }

    const updateColors = (name) => {
        if (currentColor) {
            setcolorvalues(currentColor.hex, name);
          }

        setActiveColorPicker(null)

        console.log('full update color')
    }

    const close_color_wheel = () => {
        setActiveColorPicker(null)
    }

    const handleColorChange = (color) => {
          setCurrentColor(color);
          console.log('just color')
        
      };



    let colors_ = colorOptions.map((data,index)=> {
        const colorValid = isValidColor(data.value);

        return (
            <div className="color_container bg-white rounded-custom-lg relative transition-transform duration-300 ease-custom-ease all hover:shadow-custom-light" key={index}>
                <h4 className="text-gray-800 px-4 py-4 font-medium">{data.name}</h4>

                {
                    data.name == 'Primary' || data.name == 'Secondry' ? null : 

                <button onClick={() => removeColorCard(data)} className="w-8 h-8 rounded-custom-lg flex items-center justify-center hover:bg-gray-200 absolute top-2 right-4 z-index-10">
                    <i className='ri-close-line text-gray-700 text-label'></i> 
                </button>

                }
                
                <button className="w-full h-color flex items-center justify-center relative" style={{ background: colorValid ? data.value : '#ccc' }}
                onClick={() => {setActiveColorPicker(data.name); setCurrentColor(data.value)}}
                >

                    {!colorValid && data.value !== '#' ? (
                            <p className="text-red-600 text-sm">Invalid Hax color</p>
                            ) : null
                            }
                    <div className="bg-white rounded-100 w-10 h-10 flex absolute bottom-2 right-2">
                            <i className="ri-paint-fill mx-auto my-auto text-primary text-label"></i>     
                        </div>    
    
                </button>
                <input 
                    type="text" 
                    className="w-full bg-white text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-primary-200 hover:ring-1 hover:ring-primary-300 px-4 py-4 text-input-sm lg:text-input rounded-b-md" 
                    name="value_items"
                    placeholder='Color code'
                    value={data.value}
                    onChange={(e) => setcolorvalues(e.target.value, data.name)}
                    readOnly={true}
                    />
            </div>
        )
    })

    return (
        <>

        <div className='question-box p-4 md:p-8 bg-white w-full lg:mb-12 gap-4 flex flex-col lg:rounded-custom-xl'>
            <div className="question-container flex gap-4 justify-start p2 items-start">
            <h1 className="text-label-sm lg:text-label  text-primary font-medium text-primary  h-7 w-7 lg:h-10 lg:w-10 rounded-custom-full bg-white flex items-center justify-center leading-100 border border-primary200">
                    {parseInt(id.replace(/[^\d]/g, ''), 10)}
                </h1>
                <h2 className='text-label-sm lg:text-label font-medium text-gray-800 flex-1 flex gap-2'>{required ? '*' + Question : Question}

                {info !== '' ?  <Tippy content={info}>
                        <button><i className='ri-information-line text-primary text-label'></i> </button>
                    </Tippy> : null
      
                        }
                </h2>


            </div>
 
            <div className="answer-container grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
                {colors_}            

                {activeColorPicker !== null && (
                    <div className="absolute z-10 left-1/2 transform -translate-x-1/4 text-gray-600">
                        <PhotoshopPicker
                        color={currentColor}
                        hue={100}
                        onChange={handleColorChange}
                        onAccept={()=> updateColors(activeColorPicker)}
                        onCancel={()=> close_color_wheel()}

                        />
            
                    </div>
                    )}
            </div>
            <button className="items-center justify-center gap-2 inline-flex w-[max-content] text-white bg-primary rounded-custom-md px-8 py-2"
            onClick={addColor}
            >
                    Add More 
                    <i className="ri-add-line mx-auto my-auto text-white text-label"></i>   
               </button> 
        </div>
        </>
    )


}

export default ColorPicker;