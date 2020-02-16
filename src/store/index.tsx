import React, { useReducer, createContext, Reducer } from 'react'
import { IState, IAction, IProviderProps, InitContextProps } from './types';

const initialState: IState = {
    feed: []
}

const reducer: Reducer<IState, IAction> = (state: IState, action: IAction) => {
    switch (action.type) {
        case 'FETCH_DATA':
          return { ...state, feed: action.payload };
        default:
          return state;
    }
}

// creating a store/redux using hooks
export const Store = createContext({} as InitContextProps);
export const StoreProvider: React.SFC<IProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <Store.Provider value={value}>
            { children }
        </Store.Provider>
    )
}