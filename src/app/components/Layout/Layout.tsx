import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import NavMenu from '../NavMenu/NavMenu';

export default function LayoutProvider({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Navbar />
            <NavMenu />
            {children}
            <Footer />
        </>
    );
}