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
      {/* <Head>
        <title>SAY</title>
        <meta name="keywords" content="stores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      */}
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


      {/* <ArticleList articles={articles}/> */}

    

      <div className={styles.content1}>
        <h1>
          Welcome
        </h1>
        <h3>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </h3>
     

        Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Odio ut sem nulla pharetra diam sit. Senectus et netus et malesuada fames ac turpis egestas maecenas. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Dis parturient montes nascetur ridiculus mus mauris vitae. Odio eu feugiat pretium nibh ipsum consequat. Tincidunt lobortis feugiat vivamus at augue. Gravida arcu ac tortor dignissim convallis aenean et tortor. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Volutpat lacus laoreet non curabitur gravida arcu ac. Sed pulvinar proin gravida hendrerit lectus. Ac tincidunt vitae semper quis lectus nulla at. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sem nulla pharetra diam sit amet nisl suscipit. Sem et tortor consequat id porta nibh venenatis cras sed. Eget nunc scelerisque viverra mauris in aliquam. A condimentum vitae sapien pellentesque habitant. Sit amet consectetur adipiscing elit. A scelerisque purus semper eget duis at tellus at.
        </div>

      <div className={styles.content2}>
        <h1>
          Stores
        </h1>
        Nullam non nisi est sit amet facilisis. Ipsum nunc aliquet bibendum enim facilisis gravida. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Pharetra pharetra massa massa ultricies. Odio facilisis mauris sit amet. Habitant morbi tristique senectus et netus. Ultricies integer quis auctor elit sed vulputate mi. Fermentum iaculis eu non diam phasellus vestibulum lorem. Adipiscing vitae proin sagittis nisl rhoncus. Vel eros donec ac odio tempor orci dapibus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Integer quis auctor elit sed vulputate mi sit. Urna duis convallis convallis tellus id interdum. Duis ultricies lacus sed turpis tincidunt id. Pharetra vel turpis nunc eget.

Mi sit amet mauris commodo. Mauris nunc congue nisi vitae suscipit tellus. Ut faucibus pulvinar elementum integer enim. Integer vitae justo eget magna fermentum iaculis eu. Natoque penatibus et magnis dis. Elementum nibh tellus molestie nunc non blandit massa. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nulla malesuada pellentesque elit eget gravida. Ipsum faucibus vitae aliquet nec ullamcorper. Mi eget mauris pharetra et ultrices.

        </div>
        
      <div className={styles.content3}>
      <h1>
        About
      </h1>
      Maecenas ultricies mi eget mauris pharetra et ultrices. Gravida cum sociis natoque penatibus et. Tristique nulla aliquet enim tortor at auctor urna. Fermentum iaculis eu non diam phasellus. Convallis convallis tellus id interdum velit laoreet. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Odio ut sem nulla pharetra. Sed id semper risus in hendrerit gravida. Morbi tristique senectus et netus et malesuada. Quis enim lobortis scelerisque fermentum dui faucibus in.
      </div>


    </div>


  )
}

// 3rd party API JSon placeholder 
//NO INTERNET, BALIK MO KAPAG MERON NA INTERNET
// export const getStaticProps = async () => { 
//   const res = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()

//   return{
//     props:{
//       articles
//    }
//   }
// }


