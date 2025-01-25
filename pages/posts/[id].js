import { useRouter } from 'next/router';

// generation of post static paths
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false, 
  };
}

//fetching post full data 
export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }) => {
  return (
    <div>
      <h3>Posted by user : {post.userId}</h3>
      <h3>Post Id  : {post.id}</h3>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
