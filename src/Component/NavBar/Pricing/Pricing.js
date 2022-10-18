import React from 'react';
import PriceOption from '../../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOPtion = [
        {
            id: 1, name: 'Free', price: 15, features: [
                'Asome feature',
                'Extra feature',
                'Will naver use feature',
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Asome feature',
                'Extra feature',
                'Will naver use feature',
            ]
        },
        {
            id: 3, name: 'Premium', price: 21, features: [
                'Asome feature',
                'Extra feature',
                'Will naver use feature',
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-blue-300 p-12 m-5 text-white'>Best deal of town</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOPtion.map(option => <PriceOption
                        kye={option.id}
                        option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;