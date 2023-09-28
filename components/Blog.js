import { BlogCard } from "./BlogCard";
import { ContainerTitle } from "./ContainerTitle";

const Blog = () => {
  const data = [
    {
      img: "./news/news1.png",
      title:
        "512 Mahasiswa KKN Kolaboratif, Ditempatkan pada 47 Desa di Polman",
      date: "4 Agustus 2023",
      link: "https://youtu.be/I8UhN4wtaIc?si=QYbdbWHE5Jcefwin",
    },
    {
      img: "./news/news2.png",
      title: "PELANTIKAN KETUA STIEB INSAN MADANI MANDAR",
      date: "13 September 2023",
      link: "https://youtu.be/hcMJ3qqSvng",
    },
    {
      img: "./news/news3.jpeg",
      title: "Nurul Awaina Jabat Ketua STIEB Insan Madani Mandar",
      date: "13 September 2023",
      link: "https://sulbarexpress.fajar.co.id/2022/09/13/nurul-awaina-jabat-ketua-stieb-insan-madani-mandar",
    },
  ];
  return (
    <div className='container py-20'>
      <div className='flex justify-center'>
        <ContainerTitle
          className='max-w-2xl text-center'
          title='Berita Terkini'
          Subtitle='saat ini secara simultan selalu berusaha menjadi salah satu universitas riset atau institusi akademik terkemuka di dunia.'
        />
      </div>
      <div className='grid grid-cols-3 my-7 gap-7'>
        {data.map((data, key) => (
          <BlogCard
            key={key}
            link={data.link}
            img={data.img}
            title={data.title}
            date={data.date}
          />
        ))}
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
