import "../../styles/globals.scss";

//Components
import SearchButton from "@/components/SearchButton";
import Stat from "@/components/Stat";

export default function Home() {
  return (
    <main className="background_color container">
      <div className="section">
        {/* SLIDER */}
        <div>
          <h1>Slider</h1>
        </div>
        {/* TEXT */}
        <div>
          <h1 className="title">Comunicación Inteligente</h1>
          <p className="subtitle">
            Lleva la comunicación con tus clientes al siguiente nivel
            <b> todo-en-uno</b>
          </p>
          <div className="list">
            <ol>
              <li>&gt; Crea campañas de alto impacto</li>
              <li>&gt; Gestiona las consultas omnicanal</li>
              <li>&gt; Potencia tus chatbots corporativos.</li>
            </ol>
          </div>
          <SearchButton />
          <div className="wrapper">
            <Stat number_stat="+2943" title="Campañas Enviadas" />
            <Stat number_stat="+1M" title="Respuestas Instantáneas" />
          </div>
        </div>
      </div>
    </main>
  );
}
