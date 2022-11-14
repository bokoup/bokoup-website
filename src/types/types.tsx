export type State = {
    hello: Hello;
};

export type Action =
    { hello: State['hello'] };

export type Hello = {
    hello: string;
};
