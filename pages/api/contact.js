export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log("📩 Nouveau message reçu :", { name, email, message });

    // Simuler un envoi réussi
    return res.status(200).json({ success: true });
  } else {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }
}
