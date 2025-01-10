export default function Projets() {
    const projets = [
      { titre: 'Projet 1', description: 'Description du projet 1' },
      { titre: 'Projet 2', description: 'Description du projet 2' },
    ];
  
    return (
      <section className="p-4">
        <h1 className="text-3xl font-bold mb-6">Mes Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projets.map((projet, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{projet.titre}</h2>
              <p className="text-gray-600 mt-2">{projet.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  