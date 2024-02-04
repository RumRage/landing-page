import "../../styles/globals.scss";

//Components
import SearchButton from "@/components/SearchButton";

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
          <h1>Comunicación Inteligente</h1>
          <h5>
            Lleva la comunicación con tus clientes al siguiente nivel
            <b> todo-en-uno</b>
          </h5>
          <p>&gt; Crea campañas de alto impacto</p>
          <p>&gt; Gestiona las consultas omnicanal</p>
          <p>&gt; Potencia tus chatbots corporativos.</p>
          <SearchButton />
        </div>
      </div>
    </main>
  );
}
