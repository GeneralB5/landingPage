import React from "react"
import Header from "../header/header";
import Footer from "../footer/footer";
interface LayoutProps{
    children:React.ReactNode;
}

const Layout:React.FC<LayoutProps> = ({children})=>{
    return(<>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}
export default Layout