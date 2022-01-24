import { CardServices } from "./CardServices";
import { ContainerTitle } from "./ContainerTitle";

const Services = () => {
  const services = [
    { title: "Akreditasi", path: "profile" },
    { title: "Kerjasama", path: "profile" },
    { title: "Fasilitas Pendidikan", path: "penelitian" },
    { title: "Program Study", path: "pengabdian" },
    { title: "Program Unggulan", path: "lemabaga" },
    { title: "Program Beasiswa", path: "pengumuman" },
  ];

  return (
    <div className="container py-20">
      <ContainerTitle
        title="Informasi Pendidikan"
        Subtitle="Informasi Terkait Perguruan Tinggi"
      />

      <div className="grid grid-cols-3 gap-8">
        {services.map((data, i) => (
          <>
            <CardServices
              title={data.title}
              img={`./services/icon-hitam-0${i + 1}.svg`}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
