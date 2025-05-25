function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 px-4 mt-8 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} İbrahim Ethem Öztürk Blog. Tüm hakları saklıdır.
        </p>
        <p className="text-xs mt-1">
          Bu blog yazılım, teknoloji ve güncel konular üzerine içerikler sunar.
        </p>
      </div>
    </footer>
  )
}

export default Footer
