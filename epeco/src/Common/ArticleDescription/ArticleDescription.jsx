export default function ArticleDescription({ list, activeSlug }) {
    const activeItem = Array.isArray(list)
        ? list.find((item) => item.slug === activeSlug)
        : null;

    return (
        <>
            <div className="">
                {activeItem ? (
                    <div className=" flex flex-col">
                        <div className="flex flex-col sm:flex-row-reverse gap-6">
                            <div className="flex-1 space-y-4 w-fit">
                                <h2 className="text-3xl md:text-5xl font-normal text-heading mb-8 text-[#1A5C2C] ">
                                    {activeItem.label}
                                </h2>
                                {activeItem.paragraphs.map((paragraph, id) => (
                                    <p
                                        key={id}
                                        className="text-body leading-[1.65] text-sm md:text-xl text-[#366b43] font-normal md:w-full "
                                    >
                                        {paragraph.map((segment, sid) =>
                                            segment.type === "highlight" ? (
                                                <strong key={sid} className="font-bold text-[#EFA027]">
                                                    {segment.text}
                                                </strong>
                                            ) : (
                                                <span key={sid}>{segment.text}</span>
                                            ),
                                        )}
                                    </p>
                                ))}
                            </div>
                            {activeItem.image && (
                                <div className="sm:w-56 shrink-0">
                                    <img
                                        src={activeItem.image}
                                        alt={activeItem.label}
                                        className="w-full h-auto rounded-base object-cover"
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
