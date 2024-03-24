import React, { useState } from 'react'
import PostItem from './PostItem' 
import { DummyPost } from '../DummyPost'

const Post = () => {
  const [post, setPost] = useState(DummyPost);
  return (
        <section className="post">
         {post.length > 0 ? <div className="container posts_container">
         {
            post.map(({id, Thumpnail, category, title, desc, authorID}) =>
            <PostItem key={id} postID={id} Thumpnail={Thumpnail} category={category} title={title} description={desc} authorID={authorID}/>)
          }
         </div> : <h2 className='center'>not post founds</h2>}
        </section>
    )
}

export default Post