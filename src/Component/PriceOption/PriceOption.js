import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <p>
                    <span className='text-6xl font-bold text-white'>{option.name}</span>
                    <span className='text-2xl  text-gray'>/mon</span></p>
                <p className='text-6xl font-bold text-white'>{option.price}</p>
            </div>
            {
                features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='bg-green-500 mt-4 w-full rounded-md py-2 text-white font-bold'>Buy now</button>
        </div>
    );
};

export default PriceOption;