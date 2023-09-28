import { ContainerTitle } from "./ContainerTitle";

const Mission = () => {
  return (
    <div className='container py-20'>
      <div className='flex justify-center'>
        <ContainerTitle
          className='max-w-2xl text-center'
          title='Visi & Misi'
          Subtitle='Stieb insan madani mandar bertujuan untuk mencetak insan enterpreneur, akademisi maupun praktisi dibidang pemerintahan maupun swasta. Baik secara nasional maupun internasional.'
        />
      </div>
      <div className='grid grid-cols-2 my-7'>
        <div className='px-10'>
          <h1 className='text-3xl font-bold mb-5'>Visi</h1>
          <p className='text-lg pl-10 leading-relaxed italic font-light'>
            Menjadikan STIEB Insan Madani Mandar sebagai Sekolah Tinggi yang
            menghasilkan tenaga ahli yang unggul, berperadaban, dan berdaya
            saing tinggi yang dibangun di atas dasar akhlak mulia,
            profesinalisme menuju sekolah tingg yang maju.
          </p>
        </div>
        <div className=''>
          <div className='bg-main-700 w-3/4 relative group rounded-md'>
            <img
              src='./vision.jpeg'
              className='-translate-y-6 translate-x-6 rounded-md object-cover aspect-video filter'
            />
          </div>
        </div>
        <div className='px-10 col-span-2'>
          <h1 className='text-3xl font-bold my-5'>Misi</h1>
          <ol style={{ listStyleType: "decimal" }}>
            <li>
              <p className='text-lg pl-10 leading-relaxed italic font-light'>
                Menyelenggarakan pendidikan dan pengajaran untuk mempersiapkan
                tenaga ahli yang berdaya saing, professional, dan Innovatif
              </p>
            </li>
            <li>
              <p className='text-lg pl-10 leading-relaxed italic font-light'>
                Melakukan pembinaan dan pengembangan kompetensi keilmuan dalam
                bidan perbankan dan ekonomi yang terintegrasi dengan nilai-nilai
                keislaman
              </p>
            </li>
            <li>
              <p className='text-lg pl-10 leading-relaxed italic font-light'>
                Mendorong munculnya keilmuan dan keahlian di bidang perbankan
                dan ekonomi yang berperadaban dan mampu berkompetensi dalam
                persaingan global
              </p>
            </li>
            <li>
              <p className='text-lg pl-10 leading-relaxed italic font-light'>
                Menghasilkan lulusan yang mampu bekerjadi bidangnya guna
                membantu tugas-tugas professional terutama tenaga akuntan,
                operasional lembaga keuangan, manajemen perbankan, dan pemasaran
              </p>
            </li>
            <li>
              <p className='text-lg pl-10 leading-relaxed italic font-light'>
                Menanamkan nilai-nilai moral dan akhlak mulia serta dasar-dasar
                spiritual, keimanan, dan ketaqwaan
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Mission;
