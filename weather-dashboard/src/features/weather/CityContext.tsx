import React, { createContext, useContext, useState } from "react";

interface CityContextType {
  city: string;
  setCity: (c: string) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [city, setCity] = useState("San Francisco");
  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  const ctx = useContext(CityContext);
  if (!ctx) throw new Error("useCity must be used within CityProvider");
  return ctx;
};
