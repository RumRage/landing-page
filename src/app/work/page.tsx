import Image from "next/image";
import "../../styles/globals.scss";
import Link from "next/link";
import Banner from "@/components/Banner";

export default function Work() {
  return (
    <main className="container">
      <div className="second_section">
        {/* TEXT */}
        <h1 className="title_work">Funcionamiento</h1>
        <p className="subtitle">
          Envío de mensaje por Whatsapp, SMS o correo con enlace único. Muestra
          vista previa y dirige a app web personalizada por usuario/empresa
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
        {/* IMAGE */}
        <div className="image_container">
          <h1 className="title_image">Manejado por agentes AI y humanos</h1>
          <div className="image_wrapper">
            <Image
              src="/assets/agents.png"
              alt="agents"
              width={250}
              height={200}
            />
          </div>
          <Link href="#" className="link">
            ...Ver Agentes
          </Link>
        </div>
        <div className="complete">
          <h1 className="secondary_title">Esquema</h1>
          <Image
            src="/assets/graph2.png"
            alt="Graph Mobile"
            width={329}
            height={777}
          />
          <div className="container_bottom">
            <div className="button_container">
              <button className="info_button">Más información →</button>
            </div>
          </div>
        </div>
        <Banner />
      </div>
    </main>
  );
}
