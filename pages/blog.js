import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from 'fs'

const Blog = (props) => {
  const [item, setitem] = useState(props.allBlogs);
 
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {item.map((data) => {
          return (
            <div key={data.title} className={styles.datalist}>
              <Link href={`blogpost/${data.slug}`}>
                <h3 className={styles.blogItemh3}>{data.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
              {data.metadesc}
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};





//This funciton will be run on the server side it means it will convert javascript into html and send to the client and we have used this file in the form of the props
// export async function getServerSideProps(context){
// let data = await  fetch("http://localhost:3000/api/blogs");
// let allBlogs = await data.json();


// return { props: {allBlogs} }

// }



export async function getStaticProps(context){
  let data = await fs.promises.readdir('blogdata');

  // console.log(data)
let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
// console.log(item)
    
    let blogContent  = await fs.promises.readFile(('blogdata/'+item), 'utf-8')
    // console.log(blogContent);
    allBlogs.push(JSON.parse(blogContent))
  }

  
  
  return { props: {allBlogs} }
  
  }
export default Blog;
