
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <main>
        {/* Apresentação principal */}
        <section id="inicio">
          <p>Adoção responsável</p>
          <h1>Encontre seu novo melhor amigo!</h1>

          <p>
            Conheça os animais que esperam por uma família
            e veja como ajudar as ONGs.
          </p>

          <a href="#animais">Ver animais disponíveis</a>
          {" | "}
          <a href="#ongs">Ajudar uma ONG</a>

          <div>
            <p>Imagem dos animais 🐶🐱</p>
          </div>
        </section>

        {/* Etapas da adoção */}
        <section id="como-funciona">
          <h2>Como funciona a adoção?</h2>
          <p>Três passos para encontrar seu novo amigo.</p>

          <div>
            <h3>1. Escolha um animal</h3>
            <p>Conheça o animal e a ONG responsável.</p>

            <h3>2. Demonstre interesse</h3>
            <p>Entre em contato com a ONG.</p>

            <h3>3. Conheça e adote</h3>
            <p>Prepare seu lar para receber seu novo amigo.</p>
          </div>
        </section>

        {/* Animais disponíveis */}
        <section id="animais">
          <h2>Conheça nossos amigos</h2>

          <Card
            nome="Bob"
            descricao="Carinhoso e brincalhão, procura uma família."
          />

          <Card
            nome="Mel"
            descricao="Dócil e companheira, espera por um lar cheio de amor."
          />
        </section>

        {/* Área para as ONGs */}
        <section id="ongs">
          <h2>Ajude uma ONG</h2>
          <p>
            As organizações de proteção animal precisam
            do nosso apoio.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

