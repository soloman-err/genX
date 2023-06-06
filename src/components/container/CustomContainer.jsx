import React from 'react';

const CustomContainer = ({children}) => {
    return (
        <div className="max-w-[25020px] 2xl:px-40 xl:px-20 md:px-10 sm:px-2 px-5 mx-auto">
            {children}
        </div>
    );
};

export default CustomContainer;