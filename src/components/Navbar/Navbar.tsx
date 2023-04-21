import { NextPage } from 'next'
import Image from 'next/image'
import next from '@/../public/next.svg'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import {useRouter} from "next/router";

type Link = {
    path: string
    title: string
}

const links = [
    { path: '/', title: 'Main'},
    { path: '/clients', title: 'Clients'},
    { path: '/about', title: 'About us'}
]

const Navbar: NextPage = () => {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <Image
                src={next}
                alt={'Logo'}
                width={50}
                height={20}
                priority
            />
            <div className={styles.links}>
                {
                    links.map((link: Link) => {
                        return (
                            <Link
                                key={link.path}
                                className={styles.link}
                                href={link.path}
                                style={{ fontWeight: router.pathname === link.path ? 'bold': 'normal' }}
                            >
                                { link.title }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar
