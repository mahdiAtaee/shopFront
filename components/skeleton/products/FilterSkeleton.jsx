export default function FilterSidebarSkeleton() {
  return (
    <div className="flex-1/5 rounded-xl border border-gray-200 p-4 min-h-max w-full h-[95dvh] md:h-auto bg-white fixed md:relative top-0 right-0 md:top-auto md:right-auto z-10 overflow-y-auto animate-pulse">
      <div className="flex items-center justify-between my-2">
        <div className="h-5 w-24 bg-gray-200 rounded" />
        <div className="h-3 w-16 bg-red-200 rounded" />
      </div>

      {[...Array(4)].map((_, i) => (
        <div key={i} className="border-b border-gray-200 py-4">
          <div className="h-4 w-32 bg-gray-200 rounded mb-3" />
          {[...Array(3)].map((__, j) => (
            <div key={j} className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-gray-300 rounded-sm" />
              <div className="h-3 w-20 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      ))}

      <div className="flex items-center justify-center my-2 py-4 md:hidden">
        <div className="h-4 w-28 bg-gray-300 rounded" />
      </div>
    </div>
  );
}