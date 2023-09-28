import { CardServices } from "./CardServices";
import { CardServices2 } from "./CardServices2";
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
      detail:
        "Memiliki relasi Kerja dengan berbagai Industri/Perusahaan Baik BUMN Maupun Swasta",
    },
    {
      title: "Fasilitas Pendidikan",
      detail:
        "Menawarkan Fasilitas Penunjang Pembelajaran seperti Ruangan ber-AC, LCD Projector, dan Perpustakaan",
    },
    {
      title: "Program Study",
      detail:
        "Program Study Manajemen dengan konsentrasi Keuangan dan Perbankan, Administrasi Bisnis, Manajemen Perkantoran, dan Pariwisata",
    },
    {
      title: "Program Unggulan",
      detail:
        "Menawarkan Program Unggulan Meliputi KKP/Magang dan Pelatihan Kompetensi dari relasi BUMN dan Industri",
    },
    {
      title: "Program Beasiswa",
      detail:
        "Menyediakan Beasiswa dalam Upaya Mendukung Mahasiswa yang Meliputi Beasiswa Berprestasi, KIP, dan Bagi yang kurang Mampu",
    },
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
            <CardServices2
              title={data.title}
              img={`./services/icon-hitam-0${i + 1}.svg`}
              details={
                data?.detail ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perferendis voluptates incidunt velit assumenda ipsum."
              }
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
