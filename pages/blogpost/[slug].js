import React from 'react'
import { useRouter } from 'next/router';
import styles from "../../styles/BlogPost.module.css"
const Slug = () => {
    const router = useRouter();
    const {slug} = router.query;

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dolores alias nemo voluptate quos a neque earum autem quasi nulla. Qui, ullam! In totam, facilis voluptatem ducimus nemo odio corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laboriosam enim autem sint obcaecati nesciunt velit, iure rerum aspernatur tenetur voluptatibus pariatur exercitationem culpa. Corrupti ea reprehenderit incidunt recusandae. Laborum minima, earum culpa eligendi, cum dolore, nam corrupti sit vero debitis error eos illum sapiente cupiditate. Minima nobis blanditiis non.
        </div>
      </main>
   
    </div>
  )
}

export default Slug;
