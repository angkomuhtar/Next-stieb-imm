import { CardServices } from "./CardServices";
import { ContainerTitle } from "./ContainerTitle";

const Services = () => {
  const services = [
    {
      title: "Akreditasi",
      detail:
        "Akreditasi Perguruan Tinggi BAN-PT No.3294/SK/BAN-PT/Akred/PT/IX/2017",
    },
    {
      title: "Kerjasama",
      detail: "Memiliki relasi Kerja Baik BUMN Maupun Industri/Perusahaan ",
    },
    { title: "Fasilitas Pendidikan" },
    { title: "Program Study" },
    { title: "Program Unggulan" },
    { title: "Program Beasiswa" },
  ];

  return (
    <div className='container py-20'>
      <ContainerTitle
        title='Informasi Pendidikan'
        Subtitle='Informasi Terkait Perguruan Tinggi'
      />

      <div className='grid grid-cols-3 gap-4'>
        {services.map((data, i) => (
          <>
            <CardServices
              title={data.title}
              img={`./services/icon-hitam-0${i + 1}.svg`}
              detail={data.detail}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
