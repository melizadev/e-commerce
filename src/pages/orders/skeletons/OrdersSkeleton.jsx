const OrdersSkeleton = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>

      <div className="space-y-5">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white shadow rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:justify-between gap-5">
              <div>
                <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                <div className="h-5 w-52 bg-gray-200 rounded"></div>
              </div>

              <div>
                <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
                <div className="h-5 w-24 bg-gray-200 rounded"></div>
              </div>

              <div>
                <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                <div className="h-5 w-20 bg-gray-200 rounded"></div>
              </div>

              <div>
                <div className="h-4 w-12 bg-gray-200 rounded mb-2"></div>
                <div className="h-5 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-3">
                <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-28 bg-gray-200 rounded-full"></div>
              </div>

              <div className="h-10 w-28 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersSkeleton;
