import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
    return(
        <div className="w-full h-full flex flex-col justify-between min-h-[100vh]">
            <Navbar/>
                {children}  
            <Footer/>
        </div>
    )
}