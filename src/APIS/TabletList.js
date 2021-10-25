import React, { useState, createContext } from "react";

export const TabletList = createContext();

export const TabletProvider = ({ children }) => {
  const [tablet, setTablet] = useState([
    {
      name: "paracitamol",
      price: "10Rs",
      stock: "125",
      id: 1,
    },
    {
      name: "crocine",
      price: "10Rs",
      stock: "125",
      id: 2,
    },
    {
      name: "fulltoss",
      price: "10Rs",
      stock: "125",
      id: 3,
    },
    {
      name: "flexon",
      price: "10Rs",
      stock: "125",
      id: 4,
    },
    {
      name: "felaragon",
      price: "10Rs",
      stock: "125",
      id: 4,
    },
  ]);
  return (
    <TabletList.Provider value={[tablet, setTablet]}>
      {children}
    </TabletList.Provider>
  );
};
