import React from "react";

const CountContext = React.createContext();

const CountProvider = CountContext.Provider;
const CountConsumer = CountContext.Consumer;

const RemoveContext = React.createContext();

const RemoveProvider = RemoveContext.Provider;
const RemoveConsumer = RemoveContext.Consumer;

export { CountProvider, CountConsumer, RemoveProvider, RemoveConsumer };
