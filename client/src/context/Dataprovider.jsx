import React , {createContext, useState} from 'react';

export const DataContext = createContext(null);

const Dataprovider = ({children}) => {

    const [account , setaccount] = useState('');

    return (
        <DataContext.Provider value={{
            account , setaccount
        }} >
            {children}
        </DataContext.Provider>
    )
}

export default Dataprovider;
