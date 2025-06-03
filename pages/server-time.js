export default function ServerTime({ time }) {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Heure actuelle du serveur</h1>
      <p className="text-lg text-gray-700">{time}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const now = new Date().toLocaleString();

  return {
    props: {
      time: now,
    },
  };
}
