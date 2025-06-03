import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2 h-32"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Envoyer
        </button>

        {status === "loading" && (
          <p className="text-sm text-gray-500 mt-2">Envoi en cours...</p>
        )}
        {status === "success" && (
          <p className="text-green-600 mt-2">Message envoyé !</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">Erreur lors de l’envoi.</p>
        )}
      </form>
    </div>
  );
}
