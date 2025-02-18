import Link from 'next/link'
import Footerforall from '../components/Footerforall'

const blogPosts = [
  {
    slug: 'post-1',
    title: 'Exploring the Latest Fashion Trends in 2025',
    excerpt: 'A deep dive into the most exciting Fashion advancements expected this year.',
    date: 'February 10, 2025',
    image: '/trend1.jpg',  // Replace with real images
  },
  {
    slug: 'post-2',
    title: 'Top 10 Fashion Trends for Spring 2025',
    excerpt: 'Discover the hottest fashion trends for the upcoming season.',
    date: 'February 12, 2025',
    image: '/trend2.jpg',
  },

  {
    slug: 'post-3',
    title: 'Top 10 Fashion Trends for Fall 2025',
    excerpt: 'Discover the hottest fashion trends for the upcoming season.',
    date: 'February 15, 2025',
    image: '/trend3.jpg',
  },

  {
    slug: 'post-4',
    title: 'Top 10 Fashion Trends for Summer 2025',
    excerpt: 'Discover the hottest fashion trends for the upcoming season.',
    date: 'February 17, 2025',
    image: '/trend4.jpg',
  },
  // Add more blog posts here
]

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 mb-10">
  <div className="relative container mx-auto px-6 text-center text-white">
    <h1 className="text-5xl font-extrabold text-white ">
      Blog
    </h1>
    <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-gray-200 opacity-80 animate__animated animate__fadeInUp animate__delay-1s">
      Stay updated with the latest trends, tips, and insights from our blog.
    </p>
  </div>
</div>


      {/* Scrollable Blog Post Previews */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="flex space-x-8 pb-6">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white shadow-lg rounded-lg overflow-hidden flex-none w-80">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <span className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 transition-colors">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


     <Footerforall/>
    </div>
  )
}

export default Blog
