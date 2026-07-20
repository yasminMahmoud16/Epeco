
export default function ArticleList({ mainTitle, list, activeSlug, onSelect }) {
    return <>

        <div className="flex flex-col">

            <div className=" text-sm font-medium text-heading bg-neutral-primary-soft border-[0.5px] border-[#DBE1DD]  w-2xs">
                <p className="block w-full px-4 py-2 text-lg font-bold text-white bg-[#1A5C2C] border-b border-default rounded-t-base cursor-pointer">
                    {mainTitle}
                </p>

                {Array.isArray(list) &&
                    list.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelect(item.slug)}
                            className={`block text-lg font-bold w-full px-4 py-2 text-right cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none ${item.slug === activeSlug
                                    ? "text-title"
                                    : ""
                                } ${index !== list.length - 1 ? "border-b-[0.5px] border-[#DBE1DD]" : ""}`}
                        >
                            {item.label}
                        </button>
                    ))}
            </div>
        </div>
    </>

}
