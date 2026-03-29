import Navbar from "./Components/Layout/Navbar";
import Products from "./Components/Pages/Products";
import GetStarted from "./Components/ui/GetStarted";
import Header from "./Components/ui/Header";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Products />
        <GetStarted />
      </div>
    </>
  );
}

export default App;
