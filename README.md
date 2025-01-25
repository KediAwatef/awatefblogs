- Project Setup: Started with create-next-app to set up a simple Next.js project
- Used a static JSON file (public/posts.json) for blog post data.
- Built a homepage with getStaticProps for fast, static content.
- Created dynamic pages with [id].js and getStaticPaths for each blog post.
- Used static site generation (SSG) 

You can test the app with Postman after running this cmd "npm run dev" to start the server
then select the method GET then copy this URL "http://localhost:3000/api/posts" to see how the app behave.
