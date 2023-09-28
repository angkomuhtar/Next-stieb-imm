import { ContainerTitle } from "./ContainerTitle";
import TeamCard from "./TeamCard";

const Team = () => {
  const data = [
    {
      name: "Nurul Awainah, S.Farm., M.Si.",
      position: "Ketua STIEB",
      image: "/people.png",
    },
    {
      name: "K.H. Muh. Syibli Sahabuddin, M.A.",
      position: "Pembina Yayasan",
      image: "/pimpinan/pimpinan2.png",
    },
    {
      name: "Muh. Muzani Zulmaizar, S.Si., M.Pd.",
      position: "Ketua Yayasan",
      image: "/pimpinan/pimpinan1.png",
    },
  ];

  return (
    <div className='bg-white'>
      <div className='container max-w-5xl py-20'>
        <div className='flex justify-center'>
          <ContainerTitle
            className='max-w-2xl text-center'
            title='Pimpinan Perguruan'
            Subtitle='saat ini secara simultan selalu berusaha menjadi salah satu universitas riset atau institusi akademik terkemuka di dunia.'
            titleClass='text-white'
          />
        </div>
        <div className='grid grid-cols-3 gap-6'>
          {data.map((data, key) => (
            <TeamCard
              key={key}
              img={data.image}
              name={data.name}
              position={data.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
