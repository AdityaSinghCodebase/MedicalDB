import { TabletProvider } from "./APIS/TabletList";
import AddProduct from "./components/AddProduct";

import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <TabletProvider>
        <HomePage />

        <AddProduct />
      </TabletProvider>
    </>
  );
}

export default App;
