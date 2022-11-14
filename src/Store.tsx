import React, { createContext, useReducer, ReactNode, FC, useEffect } from 'react';
import { Action, State, Hello } from './types/types';

const initialState: State = {
    hello: {} as Hello
};

const Reducer = (state: State, action: Action): State => {
    return {
        ...state,
        ...action,
    };
};

const Store: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(() => {
        const hello = {
            hello: "hello"
        } as Hello;

        dispatch({ hello });
    }, []);

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

const Context = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});
export { Context, Store };
