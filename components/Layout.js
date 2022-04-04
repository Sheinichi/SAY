import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Head from 'next/head'

const Layout = ({children}) => {
    return(
        <>
        <Nav/>
        {/* Single parent element*/}
        <div className={styles.container}>
            <h1> hwello </h1>
            <main className={styles.main}>
                <Header/>
                {children}
            </main>

        </div>
        </>
    )
}

export default Layout   