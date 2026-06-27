const OrderDetailSkeleton = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 animate-pulse">
      {/* Back button */}
      <div className="h-5 w-32 bg-gray-200 rounded mb-6"></div>

      <div className="bg-white rounded-xl shadow p-6">
        {/* Header */}
        <div className="h-8 w-72 bg-gray-200 rounded mb-3"></div>

        <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>

        <div className="h-4 w-32 bg-gray-200 rounded"></div>

        {/* Status badges */}
        <div className="flex gap-3 mt-4">
          <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
          <div className="h-8 w-28 bg-gray-200 rounded-full"></div>
        </div>

        {/* Products title */}
        <div className="h-6 w-24 bg-gray-200 rounded mt-8 mb-4"></div>

        {/* Products */}
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 flex gap-4"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>

              <div className="flex-1">
                <div className="h-5 w-52 bg-gray-200 rounded mb-3"></div>

                <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>

                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>

              <div className="flex flex-col items-end justify-center">
                <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>

                <div className="h-6 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex justify-between">
            <div className="h-6 w-36 bg-gray-200 rounded"></div>

            <div className="h-8 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          <div className="h-12 w-40 bg-gray-200 rounded-lg"></div>

          <div className="h-12 w-40 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetailSkeleton;
