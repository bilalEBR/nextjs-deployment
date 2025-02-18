import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="font-medium text-2xl text-center pb-8">Testimonials</h2>
      
      {/* Scrollable Container */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="flex space-x-8 pb-6">
          {/* Testimonial 1 */}
          <div className="border border-gray-300 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] rounded-2xl p-6 bg-white shadow-md">
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
                The fleece zip jacket I bought is incredibly cozy. I wear it all the time, whether I am heading to class or hanging out with friends.
                Plus, it is very affordable for a jacket this good. Great purchase.
              </p>
            </div>
          </div>

 {/* Testimonial 1 */}
 <div className="border border-gray-300 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] rounded-2xl p-6 bg-white shadow-md">
            <div className="text-center flex flex-col items-center gap-4">
              <Image
                className="rounded-full"
                src="/profile5.jpg"
                width={100}
                height={100}
                alt="Bilal Ebrahim"
              />
              <h3 className="text-gray-700 font-semibold text-lg">Reyan ahmed</h3>
              <p className="text-gray-500">College Student</p>
              <p className="max-w-[200px] text-gray-500">
                The fleece zip jacket I bought is incredibly cozy. I wear it all the time, whether I am heading to class or hanging out with friends.
                Plus, it is very affordable for a jacket this good. Great purchase.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="border border-gray-300 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] rounded-2xl p-6 bg-white shadow-md">
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
                The fleece zip jacket I bought is incredibly cozy. I wear it all the time, whether I am heading to class or hanging out with friends.
                Plus, it is very affordable for a jacket this good. Great purchase!
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="border border-gray-300 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] rounded-2xl p-6 bg-white shadow-md">
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
                I have been looking for a versatile jacket, and I finally found it! This casual bomber jacket is stylish and goes with almost everything.
                The quality is amazing too. Cannot wait to order another one.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Testimonials;
