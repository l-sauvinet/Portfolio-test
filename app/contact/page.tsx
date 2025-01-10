export default function Contact() {
    return (
      <section className="p-4 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contactez-moi</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Votre message"
            rows={5}
            className="border p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
          >
            Envoyer
          </button>
        </form>
      </section>
    );
  }
  