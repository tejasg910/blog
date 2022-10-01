import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component';


const Blog = (props) => {
  const [item, setitem] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async() => {
   const d = fetch(`http://localhost:3000/api/blogs?count=${count + 2}`);
   setCount(count + 2)
    const data = await  (await d).json();
    setitem(data);
  };
 
  return (
    <div className={styles.container}>
      <main className={styles.main}>



      <InfiniteScroll
  dataLength={item.length} //This is important field to render the next data
  next={fetchData}
  hasMore={item.length!==props.dataLength}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality

>
  {item.map((data) => {
          return (
            <div key={data.id} className={styles.datalist}>
              <Link href={`blogpost/${data.slug}`}>
                <h3 className={styles.blogItemh3}>{data.title}</h3>
              </Link>
              <div>
              <p className={styles.blogItemp}>
              {data.metadesc}
              </p>

              <Link href={`blogpost/${data.slug}`}>
              <button className={styles.btn}>Read more</button>
              </Link>
            

              </div>

              
            </div>
          );
        })}
</InfiniteScroll>





{/* 
        {item.map((data) => {
          return (
            <div key={data.title} className={styles.datalist}>
              <Link href={`blogpost/${data.slug}`}>
                <h3 className={styles.blogItemh3}>{data.title}</h3>
              </Link>
              <div>
              <p className={styles.blogItemp}>
              {data.metadesc}
              </p>

              <Link href={`blogpost/${data.slug}`}>
              <button className={styles.btn}>Read more</button>
              </Link>
            

              </div>

              
            </div>
          );
        })} */}
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
  let dataLength = data.length;
  // console.log(data)
let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
// console.log(item)
    
    let blogContent  = await fs.promises.readFile(('blogdata/'+item), 'utf-8')
    // console.log(blogContent);
    allBlogs.push(JSON.parse(blogContent))
  }

  
  
  return { props: {allBlogs, dataLength} }
  
  }
export default Blog;
