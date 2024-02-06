import "../../styles/globals.scss";

//Components
import SearchButton from "@/components/SearchButton";
import Slider from "@/components/Slider";
import Stats from "@/components/Stats";

//Font

export default function Home() {
  return (
    <main className="main_container">
      <div className="section">
        {/* SLIDER */}
        <div className="slider">
          <Slider />
        </div>
        {/* TEXT */}
        <div className="text_container">
          <h1 className="title">Comunicación inteligente</h1>
          <p className="subtitle">
            Lleva la comunicación con tus clientes <br />
            al siguiente nivel
            <span className="black"> todo-en-uno</span>
          </p>
          <div className="list">
            <ol>
              <li>&gt; Crea campañas de alto impacto</li>
              <li>&gt; Gestiona las consultas omnicanal</li>
              <li>&gt; Potencia tus chatbots corporativos.</li>
            </ol>
          </div>
          <div className="info">
            <SearchButton />
            <div className="stats">
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
