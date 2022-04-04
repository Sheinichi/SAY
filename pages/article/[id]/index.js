import {useRouter} from 'next/router'
import Link from 'next/link'

const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query

    return (
    <>
    <center>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br/>
    <Link href='/'>Go Back</Link>
    </center>
    </>
    )
    
}

// Data fetching method that NEXTjs provide to pages
// get serverside props which will fetch data at request at the time of request

export const getStaticProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/${context.params.id}'
    ) 

    const article = await res.json()

    return {
        props: {article}
    }

}
export const getStaticPaths = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts') 

    const articles = await res.json()
    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({params: {id: id.toString() }}))

    return {
        paths, fallback: false,
    }
}


export default article
