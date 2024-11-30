// FlowerContext.js
import React, { createContext, useState } from 'react';
import flowerData from './flowerData';

export const FlowerContext = createContext();

export const FlowersProvider = ({ children }) => {
    const [flowers] = useState(flowerData);

    return (
        <FlowerContext.Provider value={{ flowers }}>
            {children}
        </FlowerContext.Provider>
    );
};
