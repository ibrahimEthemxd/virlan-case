import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="mt-2 text-gray-600">Üzgünüz, aradığınız sayfa bulunamadı.</p>
      <Link
        to="/"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  )
}

export default ErrorPage
