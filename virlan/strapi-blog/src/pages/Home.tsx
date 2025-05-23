import { useEffect, useState } from "react";
import { fetchBlogs } from "../lib/strapi";

interface Blog {
  id: number;
  attributes: {
    title: string;
    content: string;
    publishedAt: string;
  };
}

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bloglar</h1>
      {blogs.length === 0 && <p>Yükleniyor...</p>}
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{blog.attributes.title}</h2>
            <p className="text-gray-600 text-sm">
              {new Date(blog.attributes.publishedAt).toLocaleDateString()}
            </p>
            <p className="mt-2">{blog.attributes.content.slice(0, 150)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
