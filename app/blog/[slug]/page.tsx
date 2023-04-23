//this is the page that will be rendered for each blog post

const SingleBlogPage = ({ params }: { params: { slug: string } }) => {
  console.log("🚀 ~ file: page.tsx:4 ~ SingleBlogPage ~ params:", params);

  return (
    <div className="mt-40 text-white">
      <h1>Blog</h1>
      <p>Here is a blog post</p>
      {params.slug}
    </div>
  );
};

export default SingleBlogPage;
