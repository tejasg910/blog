import React from "react";
import styles from '../styles/Blog.module.css'
import Link from "next/link";
const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogitem">
        <Link href={'blogpost/learn-javascript'}>
          <h3 className={styles.blogItemh3}>How to start javascript?</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            expedita!
          </p>
        </div>
        <div className="blogitem">
          <h3>How to start javascript?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            expedita!
          </p>
        </div>
        <div className="blogitem">
          <h3>How to start javascript?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            expedita!
          </p>
        </div>
        <div className="blogitem">
          <h3>How to start javascript?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            expedita!
          </p>
        </div>
        <div className="blogitem">
          <h3>How to start javascript?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            expedita!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
