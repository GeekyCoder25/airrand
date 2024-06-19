import {Dispatch, SetStateAction} from 'react';

export interface AppContextProps {
	isClient: boolean;
	setIsClient: Dispatch<SetStateAction<boolean>>;
	// user: User;
	// setUser: Dispatch<SetStateAction<User>>;
	// isLoggedIn: boolean;
	// setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
	// forms: Form[];
	// setForms: Dispatch<SetStateAction<Form[]>>;
	// contact: Contact[];
	// setContact: Dispatch<SetStateAction<Contact[]>>;
	// reload: boolean;
	// setReload: Dispatch<SetStateAction<boolean>>;
	// isLoading: boolean;
	// setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface AppContextProviderProps {
	children: React.ReactNode;
}
