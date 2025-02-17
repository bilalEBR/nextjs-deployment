import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="font-medium text-2xl text-center pb-8">Testimonials</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Testimonial 1 */}
        <div className="border border-gray-300 min-w-[150px] sm:min-w[200px] md:min-w-[300px] rounded-2xl p-6 bg-white shadow-md">
          <div className="text-center flex flex-col items-center gap-4">
            <Image
              className="rounded-full"
              src="/profile5.jpg"
              width={100}
              height={100}
              alt="Bilal Ebrahim"
            />
            <h3 className="text-gray-700 font-semibold text-lg">Bilal Ebrahim</h3>
            <p className="text-gray-500">College Student</p>
            <p className="max-w-[200px] text-gray-500">
            The fleece zip jacket I bought is incredibly cozy. I wear it all the time, whether I'm heading to class or hanging out with friends.
             Plus, it’s very affordable for a jacket this good. Great purchase!
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="border border-gray-300 min-w-[150px] sm:min-w[200px] md:min-w-[300px] rounded-2xl p-6 bg-white shadow-md">
          <div className="text-center flex flex-col items-center gap-4">
            <Image
              className="rounded-full"
              src="/profile2.jpg"
              width={100}
              height={100}
              alt="John Doe"
            />
            <h3 className="text-gray-700 font-semibold text-lg">John Doe</h3>
            <p className="text-gray-500">Fashion Blogger</p>
            <p className="max-w-[200px] text-gray-500">
            The fleece zip jacket I bought is incredibly cozy. I wear it all the time, whether I'm heading to class or hanging out with friends. 
            Plus, it’s very affordable for a jacket this good. Great purchase!
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="border border-gray-300 min-w-[150px] sm:min-w[200px] md:min-w-[300px] rounded-2xl p-6 bg-white shadow-md">
          <div className="text-center flex flex-col items-center gap-4">
            <Image
              className="rounded-full"
              src="/profile3.jpg"
              width={100}
              height={100}
              alt="Jane Smith"
            />
            <h3 className="text-gray-700 font-semibold text-lg">Jane Smith</h3>
            <p className="text-gray-500">Stylish Professional</p>
            <p className="max-w-[200px] text-gray-500">
            I’ve been looking for a versatile jacket, and I finally found it! This casual bomber jacket is stylish and goes with almost everything. 
            The quality is amazing too.
             Can't wait to order another one.
            </p>
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      {/* <div className="mt-16 bg-red-600 bg-cover h-[500px] rounded-2xl relative" style={{ backgroundImage: "url('/banner9.jpg')" }}>
  <div className="absolute inset-0 bg-[#ffffffcc] rounded-2xl p-8 sm:p-12 grid place-items-center gap-4">
    <button className="bg-black text-white px-6 py-3 rounded-md text-lg sm:text-xl font-semibold">
      25% Discount
    </button>
    <h2 className="font-extrabold text-3xl sm:text-4xl text-[#272727] text-center">
      Summer Collection
    </h2>
    <p className="text-gray-100 text-lg sm:text-xl text-center max-w-md mx-auto">
      Starting @ $20 <b>Shop Now</b>
    </p>
  </div>
</div> */}

    </div>
  );
};

export default Testimonials;
