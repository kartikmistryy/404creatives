import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
    return(
        <div className="w-full h-full flex flex-col justify-between min-h-[100vh]">
            <Navbar linkTitles={['Track orders', 'Returns', 'FAQs']} links={['/trackOrders', 'returns', 'faqs']}/>
                {children}  
            <Footer/>
        </div>
    )
}