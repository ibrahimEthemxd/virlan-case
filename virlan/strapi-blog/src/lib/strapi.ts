export async function fetchBlogs(apiUrl: string) {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Strapi'den veri alınamadı");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Strapi Hatası:", err);
    return [];
  }
}
