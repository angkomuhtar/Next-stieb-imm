import Image from "next/image";
import hero from "../public/college.svg";

export default function Hero() {
  return (
    <div className="h-screen bg-main-50 relative flex">
      <div className="absolute bottom-0 right-0">
        <svg width="1920" height="761" viewBox="0 0 1920 761" fill="none">
          {/* <path
              className="animate-wave1"
              fill="rgba(0, 242, 169, 0.1)"
              d="M1920 0C1868.64 28.7312 1767 105.232 1695.1 215.862C1605.14 354.271 1419.02 474.469 1280.98 388.267C1142.94 302.064 961.469 319.062 882.367 459.899C803.265 600.737 677.632 585.659 497.714 507.956C334.904 437.641 257.19 626.164 214 761H1920V0Z"
            ></path> */}
          <path
            className="animate-wave2"
            fill="rgba(0, 242, 169, 0.15)"
            d="M1920 287C1862.19 304.896 1747.81 352.545 1666.89 421.453C1565.65 507.663 1356.18 542.53 1200.82 488.838C1045.46 435.145 841.231 445.732 752.206 533.455C663.182 621.178 521.79 689.158 319.303 640.76C136.071 596.963 48.6073 677.016 0 761H1920V287Z"
          ></path>
          <path
            className="animate-wave3"
            fill="rgba(0, 242, 169, 0.3)"
            d="M0 761V673.062C17.2169 674.438 35.2639 676.42 54.1873 679.064C273.969 709.775 432 617.316 536.497 556.18C544.219 551.661 551.649 547.314 558.79 543.201C723.453 463.081 840.092 497.29 966.341 534.318C1005.86 545.91 1046.33 557.777 1089.5 566.5C1230.41 594.97 1308.84 548.102 1392.3 498.225C1416.11 484.002 1440.32 469.535 1466.5 456.5C1624.43 377.88 1748.84 433.944 1832.78 471.772C1870.02 488.554 1899.29 501.748 1920 498V761H0Z"
          ></path>
        </svg>
      </div>
      <div className="container grid grid-cols-2 z-10">
        <div className="flex-1 flex flex-col justify-center">
          <div className="">
            <h1 className="font-bold capitalize text-4xl leading-snug">
              Sekolah tinggi ilmu ekonomi dan bisnis
            </h1>
            <p className="text-4xl font-light">Insan Madani Mandar</p>
            <p className="text-xl mt-6 font-normal max-w-[600px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              pariatur ab sunt libero placeat officiis eveniet qui ullam ipsa,
            </p>
            <button
              type="button"
              className="py-2 px-4 text-md font-bold bg-main-500 border text-white rounded-full mt-8 hover:bg-white hover:text-main-500 hover:border-main-500"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={hero} alt="" srcset="" />
          {/* <Image src={university} /> */}
        </div>
      </div>
    </div>
  );
}
