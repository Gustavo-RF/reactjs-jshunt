import React from 'react';
import Spinner from 'react-spinkit'
import './styles.css'

const Loading = ({ loading, message }) => { 
    return loading ? ( 
        <div className='overlay-content'> 
            <div className='wrapper'> 
                <Spinner 
                    name='circle' 
                    fadeIn='none' 
                    color='yellow' 
                /> 
                <span className='message'> 
                    {message} 
                </span> 
            </div> 
        </div> 
    ) : null 
} 

export default Loading;