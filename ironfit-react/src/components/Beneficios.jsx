function Beneficios() {
  return (
    <section id="beneficios">
      <div className="container">
        <h2 className="section-title">Beneficios</h2>
        <p className="section-text">
          Creamos un espacio pensado para que avances a tu ritmo, con motivación,
          seguridad y acompañamiento profesional.
        </p>

        <div className="grid">
          <article className="card">
            <h3>Entrenadores certificados</h3>
            <p>Recibe rutinas personalizadas y correcciones para entrenar mejor.</p>
          </article>

          <article className="card">
            <h3>Equipos modernos</h3>
            <p>Máquinas, pesas libres y zonas funcionales para todo tipo de objetivo.</p>
          </article>

          <article className="card">
            <h3>Horarios flexibles</h3>
            <p>Entrena temprano, tarde o noche según tu rutina diaria.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;