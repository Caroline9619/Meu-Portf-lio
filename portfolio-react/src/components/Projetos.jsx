const projetos = [
  {
    id: 1,
    titulo: "Dados dos Atletas",
    descricao: "Recebe informações dos atletas e exibe categoria, IMC e médias.",
    link: "https://github.com/Caroline9619/dados-atletas"
  },
  {
    id: 2,
    titulo: "Notas dos Atletas",
    descricao: "Calcula média das notas de um atleta e mostra resultado.",
    link: "https://github.com/Caroline9619/notas-atletas"
  }
];

export default function Projetos() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      <div>
        {projetos.map((p) => (
          <article key={p.id}>
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
            <a href={p.link} target="_blank">
              Ver no GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}