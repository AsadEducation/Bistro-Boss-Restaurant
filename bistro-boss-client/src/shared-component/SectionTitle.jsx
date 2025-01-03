import React from 'react';

const SectionTitle = ({title,subtitle}) => {
    return (
        <div className='mx-auto text-center w-4/12 space-y-2 my-8'>
            <p className='text-[#D99904] italic'>---{subtitle}---</p>
            <h2 className='text-4xl uppercase border-y-2 py-4 '>{title}</h2>
        </div>
    );
};

export default SectionTitle;