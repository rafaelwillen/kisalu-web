const fakeDataForSkeleton = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
}));

export default function CategoriesLoadingSkeleton() {
  return (
    <>
      <div className="bg-neutral-400 mt-4 h-6 rounded-md animate-pulse md:w-1/3" />
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 items-center gap-4">
        {fakeDataForSkeleton.map(({ id }) => (
          <div
            key={id}
            className="rounded-md overflow-clip flex flex-col shadow hover:opacity-60 duration-300"
          >
            <div className="bg-neutral-400 rounded-t-md h-48 animate-pulse" />
            <div className="p-4 border border-neutral-300">
              <div className="bg-neutral-400 rounded-md h-4 animate-pulse mb-4" />
              <div className="grid grid-cols-2 gap-2 my-4 text-sm">
                <div className="bg-neutral-400 rounded-full text-center leading-relaxed h-6 animate-pulse" />
                <div className="bg-neutral-400 rounded-full text-center leading-relaxed h-6 animate-pulse" />
              </div>
              <div className="bg-neutral-400 rounded-md h-4 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
