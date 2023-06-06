import React from 'react';

const CustomContainer = ({children}) => {
    return (
        <div className="max-w-[2520px] 2xl:px-40 xl:px-20 md:px-8 sm:px-2 px-2 mx-auto">
            {children}
        </div>
    );
};

export default CustomContainer;