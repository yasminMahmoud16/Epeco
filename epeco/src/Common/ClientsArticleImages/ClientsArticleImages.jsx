export default function ClientsArticleImages({ activeItem }) {
    const baseUrl = "https://yasminMahmoud16.github.io/Epeco/";

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {activeItem?.images?.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl  aspect-[4/3]"
          >
            <img
              src={`${baseUrl}${image}`}
              alt={activeItem.label}
              loading="lazy"
              className="w-full h-full object-fit"
            />
          </div>
        ))}
      </div>
    );
}
