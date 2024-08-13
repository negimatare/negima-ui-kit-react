import { ReactNode } from 'react';

export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? { type: Key; }
    : { type: Key; payload: M[Key]; };
};

export type OAuth2Account = null | Record<string, any>;

export type OAuth2ContextValue = {
    inProgress: boolean;
    isAuthenticated: boolean;
    isInitialized: boolean;
    account: OAuth2Account;
};

export type OAuth2ProviderProps = {
    children: ReactNode;
};