export default function ClientsArticleImages({ activeItem }) {
  const baseUrl = "http://localhost:5173/Epeco/";
  const images = activeItem?.images ?? [];

  return (
    <div className="flex  gap-4 w-full">
      {images.length > 0 && (
        <div className="flex  gap-4 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-sm h-48 sm:h-56 lg:h-64 "
            >
              <img
                src={`${baseUrl}${image}`}
                alt={activeItem.label}
                loading="lazy"
                className="h-full w-auto object-fit"
              />
            </div>
          ))}
        </div>
      )}

      {activeItem?.logo && (
        <div className="w-32 h-32 sm:w-40 sm:h-32 shrink-0 flex items-center justify-center rounded-2xl  bg-white p-3">
          <img
            src={`${baseUrl}${activeItem.logo}`}
            alt={`${activeItem.label} logo`}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
