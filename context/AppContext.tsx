import React, {FC, createContext, useEffect, useState} from 'react';
import {AppContextProps, AppContextProviderProps} from './AppContext.types';

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider: FC<AppContextProviderProps> = ({children}) => {
	const [isClient, setIsClient] = useState(true);

	return (
		<AppContext.Provider value={{isClient, setIsClient}}>
			{children}
		</AppContext.Provider>
	);
};
