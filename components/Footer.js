export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} MonPortfolio. Tous droits réservés.
      </p>
    </footer>
  );
}
