import "../../styles/globals.scss";

export default function Work() {
  return (
    <main className="container">
      <div className="background_photo">
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
        <div>
          <h1 className="title_image">Manejado por agentes AI y humanos</h1>
        </div>
      </div>
    </main>
  );
}
