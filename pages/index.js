import Link from 'next/link';


//fetching post from API https://jsonplaceholder.typicode.com/posts
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
           <h2>
              <Link href={`/posts/${post.id}`} style={{ color: 'blue' }}>
                {post.title}
              </Link>
            </h2>
            <p>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
