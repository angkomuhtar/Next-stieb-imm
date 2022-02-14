import { ContainerTitle } from "./ContainerTitle";

const Team = () => {
  return (
    <div className="bg-main-700">
      <div className="container max-w-3xl py-20">
        <div className="flex justify-center">
          <ContainerTitle
            className="max-w-2xl text-center"
            title="Pimpinan Perguruan"
            Subtitle="saat ini secara simultan selalu berusaha menjadi salah satu universitas riset atau institusi akademik terkemuka di dunia."
            titleClass="text-white"
          />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="roundee-md">
            <img
              src="/people.png"
              className="aspect-[3/4] object-cover object-bottom"
            />
            <div className="w-full rounded-md bg-white/40 backdrop-blur-xl p-2 text-center -translate-y-3">
              <h1 className="text-center font-semibold">
                M sya'rani machrizzandi{" "}
              </h1>
              <p>Ketua Yayasan</p>
            </div>
          </div>
          <div className="roundee-md">
            <img
              src="/people.png"
              className="aspect-[3/4] object-cover object-bottom"
            />
            <div className="w-full rounded-md bg-white/40 backdrop-blur-xl p-2 text-center -translate-y-3">
              <h1 className="text-center font-semibold">
                M sya'rani machrizzandi{" "}
              </h1>
              <p>Ketua Yayasan</p>
            </div>
          </div>
          <div className="roundee-md">
            <img
              src="/people.png"
              className="aspect-[3/4] object-cover object-bottom"
            />
            <div className="w-full rounded-md bg-white/40 backdrop-blur-xl p-2 text-center -translate-y-3">
              <h1 className="text-center font-semibold">
                M sya'rani machrizzandi{" "}
              </h1>
              <p>Ketua Yayasan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
