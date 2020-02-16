import { Dispatch, ReactNode } from 'react';

export interface IState {
    feed: any;
}

export interface IAction {
    [key: string]: any;
}

export interface InitContextProps {
    state: IState;
    dispatch: Dispatch<IAction>;
}

export interface IProviderProps {
    children: ReactNode
}