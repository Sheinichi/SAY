import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {

  // displays articles in the console hahs;dfj
  // console.log(articles)


  return (
    <div className={styles.container}>
       {/* <header className={styles.header}>
     
     </header> */}
      <Head>
        <title>Create Next App</title>
        <meta name="keywords" content="stores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      {/* <main className={styles.main}> */}
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">SAY</a>
        </h1> */}

      {/* </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
  
   
      {/* {articles.map((article) => (
          <h3>{article.title}</h3> 

      ))} */}
      <ArticleList articles={articles}/>
    </div>

  )
}

// 3rd party API JSon placeholder 
export const getStaticProps = async () => { 
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return{
    props:{
      articles
   }
  }
}


