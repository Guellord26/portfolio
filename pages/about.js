export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">À propos de moi</h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <img
          src="/images/profil.png" // mets ta vraie image dans public/images
          alt="Photo de profil"
          className="w-40 h-40 object-cover rounded-full shadow-md mb-6 md:mb-0"
        />

        <div>
          <p className="text-gray-700 mb-4">
            Salut ! Je m'appelle <strong>TonNom</strong> et je suis développeur
            web fullstack passionné. J'aime créer des interfaces modernes et
            performantes avec React, Next.js et TailwindCSS.
          </p>

          <p className="text-gray-700 mb-4">
            J'ai travaillé sur plusieurs projets web, desktop et mobiles —
            toujours avec une approche centrée sur l'utilisateur et la
            performance.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            Compétences principales :
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>💻 HTML, CSS, JavaScript, TypeScript</li>
            <li>⚛️ React.js, Next.js</li>
            <li>🎨 TailwindCSS, UI design</li>
            <li>🛠️ Django, Node.js, Express</li>
            <li>📱 React Native, Electron</li>
            <li>🔧 Git, GitHub, CI/CD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
