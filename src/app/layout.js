"use client"
import TopBar from '@/components/topbar'
import '@/../../styles/globals.css'
import { Urbanist } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const font = Urbanist({ subsets: ['latin'] })



export default function RootLayout({ children, session }) {

  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider session={session}>
          <Provider store={store}>
            <TopBar>Free shipping on all U.S. orders $50+</TopBar>
            <Header />
            {children}
            <Footer />
            <ToastContainer />
          </Provider>
        </SessionProvider>
      </body>
    </html>
  )
}
