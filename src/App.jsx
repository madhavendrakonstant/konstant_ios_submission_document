import { useState,useEffect } from 'react'
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';
import './App.css'
import Inputbox from './components/input_box'
import { scroller , Element} from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


import form_fields from './json/IOS_submission_form';

import Button from './components/button';
import logo from './assets/logo.png';
import element from './assets/elements.png'

function App() {


  const [nav_open, setnavOpen] = useState(null)

  const [loaded, setloaded] = useState(false)
 
  const [titles, settitles] = useState([])

  const [validation_active, setvalidation_active] = useState(false)

  const [Question_type] = useState('For IOS')

 const navigate = useNavigate()



  useEffect(()=> {


    if(window.innerWidth < 1024) {
      setnavOpen(false)
    }
    else {
      setnavOpen(true)
    }

    let titles_ = [];

    const data_json = localStorage.getItem('konstant_app_questions_data');

    const data_main = data_json ? JSON.parse(data_json) : null

    if(data_main && data_main.length > 0) {
        settitles(data_main)
    }
    else {
          form_fields.map((section, sectionIndex) => {
            let section_title = section.title;
            let sectionData = [];
            let sectionComplete = []

            section.data.map((items)=> {
                let values = {id: items.id, value : '', question: items.Question, required: items.required}
                sectionData.push(values)
            })

            let values = {name : section_title , data : sectionData}

            titles_.push(values)
            settitles(titles_)
      });
    }

    setloaded(true)
  },[])



  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 400,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  
  const submit_data = (id, value) => {
    let current_entry = [...titles];


    current_entry.map((field) => {
      field.data.map((input) => {
  
         input.id == id ? input.value = value : null
      })
    })

    settitles(current_entry)
  };


  const get_title_progress = (name) => {
    let total_length = 0;
    let full_length = 0;
    let full_complete_length = 0;
    let completed_length = 0;

    titles.map((title) => {
        if (title.name == name) {
            title.data.map((data) => {
                if (data.required) { 
                    total_length += 1;

                    let value = data.value;
                    let trimmedValue = value.trim();

                    if (trimmedValue) {
                        completed_length += 1; 
                    }
                }
                full_length += 1
                let value1 = data.value;
                    let trimmedValue1 = value1.trim();

                    if (trimmedValue1) {
                      full_complete_length += 1; 
                    }

            });
        }
    });

    let progress = {total : full_length > 0 ? full_complete_length / full_length : 0 , required: total_length > 0 ? completed_length / total_length : 0}

    return progress; 
};


  const extractValueById = (id) => {
    for (const section of titles) {
      for (const item of section.data) {
        if (item.id === id) {
          return item.value;
        }
      }
    }
    return null; 
  };


  const saveDataToLocal = () => {
    localStorage.setItem('konstant_app_questions_data', JSON.stringify(titles));

    toast.success("Data is saved into local!", {
      theme: "dark",
      style: {
        fontFamily: "Poppins, sans-serif",
      },
    })

  };


  const checkValidation = (data) => {
    for (const section of data) {
      for (const item of section.data) {
        if (item.value === '' && item.required) {
          return false;
        }
      }
    }
    return true;
  };


  const errormsg = (msg) => {

    toast.error(msg, {
      theme: "dark",
      style: {
        fontFamily: "Poppins, sans-serif",
      },
    })
  }

  const submitForm = async (titles) => {

    if(!checkValidation(titles)) {
      setvalidation_active(true)

      toast.error("Please complete all required fields!", {
        theme: "dark",
        style: {
          fontFamily: "Poppins, sans-serif",
        },
      })
      return false;
    }



    try {
  
        const formData = new FormData();
        formData.append('titles', JSON.stringify(titles)); 

   
        const response = await axios.post('http://192.168.0.116/pdfGenerator/fontCheck.php', formData, {
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'blob' 
        });

    
        const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'output.pdf');
        document.body.appendChild(link);
     
        link.click();
        navigate('/thankyou'); 


    } catch (error) {
        console.error('There was an error!', error);
    }
};

  const form_data = loaded ? form_fields.map((section, sectionIndex) => (
                        <Element name={section.title} key={sectionIndex} className="section lg:py-4 md:grid md:grid-cols-2 gap-x-4 gap-y-8">
                           <h1 className='text-label lg:text-title font-semibold text-gray-700 m-0 p-0 px-2 lg:px:0 col-span-2 text-center lg:text-left py-4 lg:py-0'>{section.title}</h1>
                          {section.data.map((field,index) => (
                             <Inputbox errormsg={errormsg} validation={validation_active} data={field} index={index} key={index} inputvalue={extractValueById} submitdetails={submit_data} />
                          ))}
                        </Element>
                      )) : null;
  


  const indexing_data = form_fields.map((section, sectionIndex) => (

      <li className='w-full py-2 px-0 border-b-2 border-grey-300 hover:bg-gray-100  text-left' key={sectionIndex}>
          <button className={get_title_progress(section.title).required == 1  ? 'text-green-700 hover:text-primary hover:bg-gray-100 text-indexlink flex justify-between items-center gap-2 w-full relative py-2 px-4 text-left' : 'text-gray-500 hover:text-primary hover:bg-gray-100 text-indexlink flex justify-between items-center gap-2 w-full relative py-2 px-4 text-left'}
          onClick={() => scrollToSection(section.title)}
          >
                {section.title}
                <div className='progress-bar m-0 p-0 bg-green-600 absolute left-0' 
                  style={{
                    width: get_title_progress(section.title).total * 100 + '%',
                    bottom: -10,
                    height: 1.5
                  }} 
                  >
                </div>
                {/* {get_title_progress(section.title)} */}

                { 

                  get_title_progress(section.title).required == 1 ? 
                  <i className='ri-checkbox-circle-fill text-green-700 text-label'></i> : 
                  <i className='ri-checkbox-circle-line text-gray-300 text-label'></i>    

                }

          </button>
      </li>
  ))




  return (
    <>
    <ToastContainer />
    <section className='form-banner-area flex w-full mx-auto h-banner_mobile lg:h-banner bg-primary relative items-center justify-center gap-10 px-4 lg:px-30'>
        <img src={element} className='w-48 absolute top-0 right-0 z-10' alt='image' />
        <img src={logo} className='w-52 relative z-50 hidden' alt='logo' />
        <div className='w-full flex flex-col  items-center text-left gap-2 lg:gap-0 justify-center z-50'>
            <h1 className='text-label lg:text-largetitle  text-white font-bold text-left'>Konstant App submission</h1>
            <h5 className='px-4 items-center text-white text-label lg:text-title rounded-custom-full flex gap-4 border border-white inline-block py-2 px-2 lg:py-2 lg:px-6 border-opacity-50 w-fit'>
            <i className='ri-apple-fill text-white text-label lg:text-title'></i>
            {Question_type}
            </h5>
        </div>

    </section>

    {/* Main body container */}
    <section className='main-form-container flex flex-col lg:flex-row w-full mx-auto items-start'>

       {/* form navigation */}

       

        <div className='main-sidebar flex flex-col flex-1  basis-4/4 lg:basis-1/4 sticky w-full top-0 bg-white lg:h-4/4-screen pt-4 lg:max-w-sm z-50'>

          <button 
            className='border-b-2 border-primary py-4 flex justify-between items-center w-full active:bg-primary100 px-4'
          onClick={()=> setnavOpen(!nav_open)}
          >
            <h2 className='text-subtitle2 text-gray-800 font-medium text-left'> App Onboarding Details</h2>
            
            <i className={ nav_open ? 'lg:hidden ri-arrow-down-s-line text-primary text-label rotate-180' : 'lg:hidden ri-arrow-down-s-line text-primary text-label'}></i>
          </button>
            <div className={nav_open ? 'accordion-content h-auto lg:min-h-custom-lg ' : 'accordion-content h-0 overflow-hidden'}>
                <ul className='w-full'>
                  {indexing_data}
                </ul>
            </div>

        </div>

      {/* form container */}
        <div className='main-form-content flex-1 basis-4/4 w-full lg:basis-3/4 lg:py-5 lg:m-8  mb-32'>

        <div className='form-submission flex flex-row gap-2 mt-auto mb-3 top-0 py-2 items-center justify-center'>
              <div className='user-information text-center'>
                <h2 className='text-title2 text-primary font-semibold'>Paul Holmes</h2>
                <p className='text-caption text-primary'>Please fill all of details to get started!</p>
              </div>     
        </div> 


          {form_data}
        </div>


    </section>

    <section className='submit-buttons-container fixed bottom-0 left-0 right-0 p-4 flex items-center justify-center bg-white z-50'>

        <div className='main-form-container flex flex-col lg:flex-row justify-between gap-4'>

            <button className="py-2 px-6 bg-gray-100 text-gray-700 inline-block rounded-custom-sm border-2 border-gray-200 font-semibold capitalize"
            onClick={saveDataToLocal}
            >Save details</button>
            <button className="py-2 px-10 bg-primary text-white inline-block rounded-custom-sm shadow-inner-sm font-semibold capitalize shadow-md"
            onClick={() => submitForm(titles)}
            >Submit & Export PDF</button>

        </div>

      </section>

    </>
  )
}

export default App
