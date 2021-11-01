import React, { useState, createContext, useCallback } from "react";

export const TabletList = createContext();

export const TabletProvider = ({ children }) => {
  const [tablet, _setTablet] = useState([
    {
      name: "paracitamol",
      price: "10Rs",
      stock: "125",
      gst: 8,
      cgst: 10,
      id: 1,
    },
  ]);

  const setTablet = useCallback((value) => {
    localStorage.setItem("tablets", JSON.stringify(value));
    _setTablet(value);
  }, []);

  return (
    <TabletList.Provider value={[tablet, setTablet]}>
      {children}
    </TabletList.Provider>
  );
};
