export default function CardSec({
  image,
  highlightWord,
  description,
  className = "",
  descriptionClassName="",
  titleClassName="",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl h-60  flex items-center shadow-md ${className}`}
    >
      <img
        src={image}
        alt="card"
        className="absolute inset-0 w-full h-full object-cover "
      />

      <div className="absolute inset-0 bg-[#F5F0E8]/85" />

      <div className=" z-10 w-full px-6 md:px-10 ">
        <h3
          className={`  ${titleClassName}`}
        >
          {highlightWord}
        </h3>

        <p className={` ${descriptionClassName}`}>{description}</p>
      </div>
    </div>
  );
}