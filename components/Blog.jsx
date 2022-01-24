import { BlogCard } from "./BlogCard";
import { ContainerTitle } from "./ContainerTitle";

const Blog = () => {
  return (
    <div className="container py-20">
      <div className="flex justify-center">
        <ContainerTitle
          className="max-w-2xl text-center"
          title="Berita Terkini"
          Subtitle="saat ini secara simultan selalu berusaha menjadi salah satu universitas riset atau institusi akademik terkemuka di dunia."
        />
      </div>
      <div className="grid grid-cols-3 my-7 gap-7">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
