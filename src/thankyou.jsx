import React from "react";
import thank_logo from './assets/thank_logo.svg';
import element from './assets/elements.png'
import 'react-toastify/dist/ReactToastify.css';


const Thankyou = (props) => {
    return (
    <>
        <section className='form-banner-area flex flex-col w-full mx-auto h-4/4-screen bg-primary relative items-center justify-center  px-30'>

            <div className="inline-block bg-white rounded-100">
                <i className='ri-checkbox-circle-fill text-green-700 text-checkicon leading-100 '></i>
            </div>
      

            <img src={element} className='w-96 absolute top-0 right-0 z-10' alt='image' />
            <img src={thank_logo} className='w-52 absolute z-50 left-1/2 transform -translate-x-1/2 top-10' alt='thank you logo' />

            <div className='w-full flex items-center text-left gap-20 justify-center max-w-thankyou'>
                <div className="basis-3/3 text-center">

                    <h1 className='text-label lg:text-largetitle  text-white font-bold text-center l-h-100'>THANK YOU!</h1>
                    <h5 className='text-white text-label lg:text-subtitle inline-block p-0 w-fit'>If you have any other resources to share, please share it on info@konstantInfoSolution.com</h5>
                </div>

            </div>
        </section>
    </>  
    )
}

export default Thankyou;