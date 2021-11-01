import { useContext, useEffect } from "react";
import { TabletProvider, TabletList } from "./APIS/TabletList";

import HomePage from "./components/HomePage";

function App() {
  const [_, setTablet] = useContext(TabletList);
  useEffect(() => {
    const tablets = JSON.parse(localStorage.getItem("tablets"));
    tablets && setTablet(tablets);
  }, [setTablet]);

  return (
    <>
      <HomePage />
    </>
  );
}

export default () => (
  <TabletProvider>
    <App />
  </TabletProvider>
);
