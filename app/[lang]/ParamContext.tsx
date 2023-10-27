import React, { createContext, useContext, ReactNode } from 'react';

interface ParamsContextProps {
  lang: string;
  // ...other fields of params
}

interface ParamsProviderProps {
  params: ParamsContextProps;
  children: ReactNode;  // Explicitly type children here
}

const ParamsContext = createContext<ParamsContextProps | null>(null);

export const useParams = () => {
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error('useParams must be used within ParamsProvider');
  }
  return context;
};

export const ParamsProvider: React.FC<ParamsProviderProps> = ({ children, params }) => {
  console.log('Params inside ParamsProvider', params);
  return <ParamsContext.Provider value={params}>{children}</ParamsContext.Provider>;
};
