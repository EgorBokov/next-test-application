import { NextPage } from 'next'
import { ReactNode } from "react";
import Navbar from '@/components/Navbar/Navbar'
import { Montserrat } from 'next/font/google'
import styles from './Layout.module.scss'

interface IProps {
    children: ReactNode
}

const Montserrat_Web = Montserrat({
    subsets: ['latin', 'cyrillic']
})

const Layout: NextPage<IProps> = ({ children }) => {

    return (
        <div className={Montserrat_Web.className}>
            <Navbar />
            <div className={styles.wrapper}>
                { children }
            </div>
        </div>
    )
}

export default Layout
