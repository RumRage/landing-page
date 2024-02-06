import Image from "next/image";
import Link from "next/link";
import "../../styles/globals.scss";
//Components
import Banner from "@/components/Banner";

export default function Work() {
  return (
    <div className="work_section">
      <div className="top_background_nuts"></div>
      {/* WORK */}
      <div className="container">
        <div className="text_section">
          <h1 className="title_work">Funcionamiento</h1>
          <p className="subtitle">
            Envío de mensaje por Whatsapp, SMS o correo con enlace único.
            Muestra vista previa y dirige a app web personalizada por
            usuario/empresa
          </p>
          <div className="list">
            <ol>
              <li>&gt; Envío individualizado de mensajes y enlaces</li>
              <li>
                &gt; Previsualizaciones, Power App con Asistencia de Chatbot
              </li>
              <li>&gt; Agentes Prediseñados para Atención Personalizada</li>
            </ol>
          </div>
        </div>
        {/* AGENTS */}
        <div className="agents_section">
          <h1 className="title_agents">Manejado por agentes AI y humanos</h1>
          {/* Mobile Image */}
          <Image
            src="/assets/agents.png"
            alt="Agents"
            width={202}
            height={155}
            className="mobile_image_agents"
          />

          {/* Desktop Image */}
          <Image
            src="/assets/agents.png"
            alt="Agents"
            width={350}
            height={270}
            className="desktop_image_agents"
          />
          <Link href="#" className="link">
            ...Ver Agentes
          </Link>
        </div>
      </div>

      {/* DIAGRAM */}

      <div className="image_section">
        <h1 className="title">Esquema</h1>
        <Image
          src="/assets/graph2.png"
          alt="Graph Mobile"
          width={329}
          height={777}
        />
      </div>
      <div className="button_container">
        <button>Más información →</button>
      </div>
      <div className="bottom_background_nuts"> </div>

      <Banner />
    </div>
  );
}
