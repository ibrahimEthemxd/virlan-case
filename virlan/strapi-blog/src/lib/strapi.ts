const STRAPI_API_URL = 'http://localhost:1337/api/blogs?populate=*'; // Strapi'nin çalıştığı port ve endpoint

export async function fetchBlogs() {
  try {
    const res = await fetch(STRAPI_API_URL);
    if (!res.ok) throw new Error("Strapi'den veri alınamadı");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Strapi Hatası:", err);
    return [];
  }
}
