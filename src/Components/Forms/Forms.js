import React from 'react';
import Features from './Features';

export default function Form({selected, features, updateFeature}) {
    
        return (
            <form className='main__form'>
            <h2>Customize your laptop</h2>
            <Features selected={selected} features={features} updateFeature={updateFeature}/>
          </form>
          )
}