export default function ArticleDescription({ list, activeSlug }) {
  const activeItem = Array.isArray(list)
    ? list.find((item) => item.slug === activeSlug)
    : null;
  const baseUrl = "https://yasminMahmoud16.github.io/Epeco/";

  return (
    <>
      <div className="">
        {activeItem ? (
          <div className=" flex flex-col">
            <div className="flex flex-col sm:flex-row-reverse gap-6">
              <div className="flex-1 space-y-4 w-fit">
                <h2 className="text-3xl md:text-4xl font-normal text-heading mb-8 text-[#1A5C2C]  leading-12">
                  {activeItem.label}
                </h2>
                {activeItem.style === "bulleted" ? (
                  <>
                    <p className="text-body leading-[1.65] text-sm md:text-xl text-[#366b43] font-normal text-justify">
                      {activeItem.intro}
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-body text-sm md:text-xl text-[#366b43] text-justify ">
                      {activeItem.paragraphs[0].map((segment, index) => (
                        <li key={index} className="text-justify">
                          {segment.type === "highlight" ? (
                            <strong className="font-bold text-[#EFA027]  ">
                              {segment.text}
                            </strong>
                            
                          ) : (
                            segment.text
                          )}
                        </li>
                      ))}
                    </ul>

                    <p className="text-body leading-[1.65] text-sm md:text-xl text-[#366b43] font-normal text-justify">
                      {activeItem.ending}
                    </p>
                  </>
                ) : (
                  activeItem.paragraphs.map((paragraph, id) => (
                    <p
                      key={id}
                      className="text-body leading-[1.65] text-sm md:text-xl text-[#366b43] font-normal text-justify"
                    >
                      {paragraph.map((segment, sid) =>
                        segment.type === "highlight" ? (
                          <strong
                            key={sid}
                            className="font-bold text-[#EFA027]"
                          >
                            {segment.text}
                          </strong>
                        ) : (
                          <p key={sid}>{segment.text}</p>
                        ),
                      )}
                    </p>
                  ))
                )}
              </div>
              {activeItem.image && (
                <div className="sm:w-56 w-full shrink-0 aspect-[3/5] overflow-hidden rounded-3xl shadow">
                  <img
                    className="h-full w-full object-fill"
                    src={`${baseUrl}${activeItem.image}`}
                    alt={activeItem.label}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-body">Select an item</p>
        )}
      </div>
    </>
  );
}
