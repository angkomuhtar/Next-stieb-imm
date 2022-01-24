import { ContainerTitle } from "./ContainerTitle";

const Mission = () => {
  return (
    <div className="container py-20">
      <div className="flex justify-center">
        <ContainerTitle
          className="max-w-2xl text-center"
          title="Visi & Misi"
          Subtitle="saat ini secara simultan selalu berusaha menjadi salah satu universitas riset atau institusi akademik terkemuka di dunia. Sebagai universitas riset, upaya-upaya pencapaian tertinggi dalam hal penemuan, pengembangan dan difusi pengetahuan secara regional dan global selalu dilakukan"
        />
      </div>
      <div className="grid grid-cols-2 my-7">
        <div className="px-10">
          <h1 className="text-xl font-bold mb-5">Visi</h1>
          <p className="text-lg pl-10 leading-relaxed italic font-light">
            Menjadi pusat ilmu pengetahuan, teknologi, dan kebudayaan yang
            unggul dan berdaya saing, melalui upaya mencerdasakan kehidupan
            bangsa untuk meningkatkan kesejahteraan masyarakat, sehingga
            berkontribusi bagi pembangunan masyarakat Indonesia dan dunia
          </p>
          <h1 className="text-xl font-bold my-5">Misi</h1>
          <p className="text-lg pl-10 leading-relaxed italic font-light">
            Menjadi pusat ilmu pengetahuan, teknologi, dan kebudayaan yang
            unggul dan berdaya saing, melalui upaya mencerdasakan kehidupan
            bangsa untuk meningkatkan kesejahteraan masyarakat, sehingga
            berkontribusi bagi pembangunan masyarakat Indonesia dan dunia
          </p>
        </div>
        <div className="">
          <div className="bg-main-700 w-3/4 relative group rounded-md">
            <img
              src="./mision.jpg"
              className="-translate-y-6 translate-x-6 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
