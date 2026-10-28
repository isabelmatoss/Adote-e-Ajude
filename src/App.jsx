
function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Cabeçalho e menu */}
      <header
        style={{
          backgroundColor: "#47745b",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>🐾 PatAmiga</h2>

        <nav style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <a href="#inicio" style={{ color: "white" }}>Início</a>
          <a href="#animais" style={{ color: "white" }}>Animais</a>
          <a href="#como-funciona" style={{ color: "white" }}>
            Como funciona
          </a>
          <a href="#ongs" style={{ color: "white" }}>ONGs</a>
        </nav>
      </header>

      <main>
        {/* Apresentação principal */}
        <section id="inicio" style={{ padding: "40px 20px" }}>
          <p>🐾 Adoção responsável</p>
          <h1>Encontre seu novo melhor amigo!</h1>

          <p>
            Conheça os animais que esperam por uma família
            e descubra como ajudar as ONGs.
          </p>

          <a href="#animais">Ver animais disponíveis</a>
          {" | "}
          <a href="#ongs">Ajudar uma ONG</a>

          <p style={{ fontSize: "40px" }}>🐶 🐱</p>
          <p>Uma adoção muda duas vidas: a sua e a de quem você salva.</p>
        </section>

        {/* Etapas da adoção */}
        <section
          id="como-funciona"
          style={{ backgroundColor: "#f3f3f3", padding: "30px 20px" }}
        >
          <h2>Como funciona a adoção?</h2>
          <p>Três passos para encontrar seu novo amigo.</p>

          <h3>1. Escolha um animal</h3>
          <p>Conheça os animais e a ONG responsável.</p>

          <h3>2. Demonstre interesse</h3>
          <p>Entre em contato com a ONG para saber mais.</p>

          <h3>3. Conheça e adote</h3>
          <p>Prepare seu lar para receber seu novo amigo.</p>
        </section>

        {/* Animais disponíveis */}
        <section id="animais" style={{ padding: "30px 20px" }}>
          <h2>Conheça nossos amigos</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <article
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                maxWidth: "250px",
              }}
            >
              <h3>🐶 Bob</h3>
              <p>Carinhoso e brincalhão, procura uma família.</p>
              <button>Quero adotar</button>
            </article>

            <article
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                maxWidth: "250px",
              }}
            >
              <h3>🐱 Mel</h3>
              <p>Dócil e companheira, espera por um lar cheio de amor.</p>
              <button>Quero adotar</button>
            </article>
          </div>
        </section>

        {/* Área para as ONGs */}
        <section
          id="ongs"
          style={{ backgroundColor: "#f3f3f3", padding: "30px 20px" }}
        >
          <h2>Ajude uma ONG</h2>
          <p>
            As organizações de proteção animal precisam do nosso apoio.
            Juntos, podemos transformar vidas!
          </p>
        </section>
      </main>

      {/* Rodapé */}
      <footer
        style={{
          backgroundColor: "#47745b",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p>PatAmiga — Adote com amor! 🐾</p>
      </footer>
    </div>
  );
}

export default App;
