import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Products from "./Components/Pages/Products";
import GetStarted from "./Components/ui/GetStarted";
import Header from "./Components/ui/Header";
import Pricing from "./Components/ui/Pricing";
import Workflow from "./Components/ui/Workflow";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Products />
        <GetStarted />
        <Pricing />
        <Workflow />
        <Footer />
      </div>
    </>
  );
}

export default App;
