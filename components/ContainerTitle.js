export const ContainerTitle = ({ title, Subtitle, className }) => {
  return (
    <div className={`mb-10 ${className}`}>
      <h1 className="font-bold text-3xl ">{title}</h1>
      <p className="font-light text-md mt-5">{Subtitle}</p>
    </div>
  );
};
