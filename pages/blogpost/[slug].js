import React,{useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import * as fs from 'fs'

import styles from "../../styles/BlogPost.module.css"
const Slug = (props) => {
  const [blog, setblog] = useState(props.myBlog);
    const router = useRouter();
    const {slug} = router.query;
    function createMarkup(content) {
      return {__html: content};
    }
    
    
      
    
    
  return (
    <div className={styles.container}>
        <main className={styles.main} >
        <h1>{blog && blog.title}</h1>
        <hr />
       {blog && <div dangerouslySetInnerHTML={createMarkup(blog.description)} />}
      </main>
    </div>
  )
}


  // export async function getServerSideProps(context){

  //   const {slug} = context.query;
  //   let data = await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`)

  //   let myBlog = await data.json();
    
    
  //   return { props: {myBlog} }
    
  //   }




      export async function getStaticPaths() {
        return {
            paths: [
                { params: { slug: 'learn-react' } },
                { params: { slug: 'learn-mongodb' } },
                { params: { slug: 'learn-javascript' } },
                { params: { slug: 'learn-nextjs' } },
            ],
            fallback: true // false or 'blocking'
        };
    }
    
    export async function getStaticProps(context) {
        const { slug } = context.params;
    
    
        let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
    
        return {
            props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
        }
    }
export default Slug;
