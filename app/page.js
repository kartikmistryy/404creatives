import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
  
export default function App() {
  return (
    <div className="w-full h-full flex flex-col justify-between min-h-[100vh]">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>

  );
}
