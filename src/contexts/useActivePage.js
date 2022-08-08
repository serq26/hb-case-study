import { createContext, useContext, useState, useEffect } from "react";

const ActivePageContext = createContext();

export default ActivePageContext;

export const ActivePageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("products-list");

  const values = { activePage, setActivePage };

  useEffect(() => {
    setActivePage(activePage);
  }, [activePage]);

  return (
    <ActivePageContext.Provider value={values}>
      {children}
    </ActivePageContext.Provider>
  );
};

export const useActivePage = () => useContext(ActivePageContext);
