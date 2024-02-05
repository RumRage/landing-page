import "../../styles/globals.scss";

//Components
import SearchButton from "@/components/SearchButton";
import Slider from "@/components/Slider.jsx";
import Stat from "@/components/Stat";

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
        <div className="text">
          <h1 className="title">Comunicación Inteligente</h1>
          <p className="subtitle">
            Lleva la comunicación con tus clientes al siguiente nivel
            <span className="black"> todo-en-uno</span>
          </p>
          <div className="list">
            <ol>
              <li>&gt; Crea campañas de alto impacto</li>
              <li>&gt; Gestiona las consultas omnicanal</li>
              <li>&gt; Potencia tus chatbots corporativos.</li>
            </ol>
            <SearchButton />
            <div className="stats">
              <Stat number_stat="+2943" title="Campañas Enviadas" />
              <Stat number_stat="+1M" title="Respuestas Instantáneas" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
