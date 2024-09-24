import React from "react";
import { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date_picker = ({handleinput,inputvalue,id,Question,validation,required}) => {

    const [startDate, setStartDate] = useState(inputvalue);


    const handleDateChange = (date) => {

        setStartDate(date)
        const dateString = date.toISOString(); 
        handleinput(dateString);
    };
    

    return (

            <div className="answer-container flex gap-4 justify-start p2 items-start">
                <h1 className="text-subtitle text-primary font-medium text-white h-10 w-10 rounded-custom-full bg-primary hidden lg:flex items-center justify-center leading-100 opacity-0">
                    A.
                </h1>
                <div className={inputvalue !== '' || validation !== true || !required ? "options_container flex flex-row gap-4 wrap w-full rounded-custom-md" : "options_container flex flex-row gap-4 wrap w-full border-2 border-red-500 rounded-custom-md"}>
                    <DatePicker selected={startDate} onChange={(date) => handleDateChange(date)} className="text-primary w-full border-b border-primary200 py-3 focus-visible:outline-none focus:border-b-2 focus:border-primary" />
                </div>
            </div>
    )


}

export default Date_picker;