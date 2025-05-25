// pages/index.tsx
import Link from "next/link"

interface PostsCollection {
  id: number;
  attributes: {
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    slug: string;
  };
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:1337/api/posts?populate=*");
  const json = await res.json();

  return {
    props: {
      blogs: json.data || [],
    },
  };
};

export default function Home({ blogs = [] }: { blogs: PostsCollection[] }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 bg-blue-500 text-white px-4 py-2 rounded">
        Bloglar
      </h1>

      {!Array.isArray(blogs) || blogs.length === 0 ? (
        <p>Yükleniyor...</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="border p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <Link href={`/blog/${blog.attributes.slug}`}>
                <div>
                  <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                    {blog.attributes.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {new Date(blog.attributes.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="mt-2">
                    {blog.attributes.content.slice(0, 150)}...
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
