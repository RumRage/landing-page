import "../../styles/globals.scss";

//Components
import SearchButton from "@/components/SearchButton";
import Stat from "@/components/Stat";

export default function Home() {
  return (
    <main className="background_container container">
      <div className="section">
        {/* SLIDER */}
        <div>
          <h1>Slider</h1>
        </div>
        {/* TEXT */}
        <div>
          <h1 className="title">Comunicación Inteligente</h1>
          <h5 className="subtitle">
            Lleva la comunicación con tus clientes al siguiente nivel
            <b> todo-en-uno</b>
          </h5>
          <div className="title-info">
            <p>&gt; Crea campañas de alto impacto</p>
            <p>&gt; Gestiona las consultas omnicanal</p>
            <p>&gt; Potencia tus chatbots corporativos.</p>
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
