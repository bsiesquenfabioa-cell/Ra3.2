import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Beneficios from "./components/Beneficios";
import "./App.css";

function App() {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    edad: "",
    plan: "",
    objetivo: "",
    terminos: false,
  });

  const [errores, setErrores] = useState({});
  const [modal, setModal] = useState(false);

  const cambiarDato = (e) => {
    const { name, value, type, checked } = e.target;
    setDatos({ ...datos, [name]: type === "checkbox" ? checked : value });
  };

  const elegirPlan = (planElegido) => {
    setDatos({ ...datos, plan: planElegido });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (datos.nombre.trim() === "") nuevosErrores.nombre = "Ingrese su nombre.";
    else if (datos.nombre.trim().length < 3) nuevosErrores.nombre = "Debe tener al menos 3 caracteres.";
    else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(datos.nombre)) nuevosErrores.nombre = "Solo se permiten letras.";

    if (datos.correo.trim() === "") nuevosErrores.correo = "Ingrese un correo.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) nuevosErrores.correo = "Correo no válido.";

    if (!/^[0-9]{9}$/.test(datos.telefono)) nuevosErrores.telefono = "Debe contener exactamente 9 dígitos.";

    if (datos.edad === "") nuevosErrores.edad = "Ingrese su edad.";
    else if (Number(datos.edad) < 14 || Number(datos.edad) > 80) nuevosErrores.edad = "Edad permitida entre 14 y 80 años.";

    if (datos.plan === "") nuevosErrores.plan = "Seleccione un plan.";

    if (datos.objetivo.trim().length < 10) nuevosErrores.objetivo = "Explique un poco más su objetivo.";

    if (!datos.terminos) nuevosErrores.terminos = "Debe aceptar los términos.";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (validarFormulario()) setModal(true);
  };

  const cerrarModal = () => {
    setModal(false);
    setDatos({
      nombre: "",
      correo: "",
      telefono: "",
      edad: "",
      plan: "",
      objetivo: "",
      terminos: false,
    });
    setErrores({});
  };

  return (
    <>
      <div className="header-principal">
        <header id="inicio">
          <Navbar />
          <Hero />
        </header>
      </div>

      <Beneficios />

      <section className="planes" id="planes">
        <div className="container">
          <h2 className="section-title">Planes</h2>
          <p className="section-text">Elige el plan que mejor se acomode a tus metas.</p>

          <div className="grid">
            {["Básico", "Full", "Premium"].map((plan) => (
              <article
                key={plan}
                className={`card plan-card ${datos.plan === plan ? "seleccionado" : ""}`}
              >
                <h3>{plan}</h3>
                <p className="price">
                  {plan === "Básico" ? "S/ 79" : plan === "Full" ? "S/ 119" : "S/ 169"}
                </p>
                <p>
                  {plan === "Básico" && "Acceso mensual a sala de máquinas y pesas."}
                  {plan === "Full" && "Incluye máquinas, pesas, clases grupales y evaluación inicial."}
                  {plan === "Premium" && "Incluye plan personalizado, clases, nutrición básica y seguimiento."}
                </p>
                <button className="btn seleccionar-plan" type="button" onClick={() => elegirPlan(plan)}>
                  Elegir plan
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clases" id="clases">
        <div className="container">
          <h2 className="section-title">Clases</h2>
          <p className="section-text">
            Mantente activo con sesiones grupales diseñadas para fuerza, resistencia y bienestar.
          </p>

          <div className="grid">
            <article className="card">
              <h3>Funcional</h3>
              <p>Entrenamiento dinámico para mejorar fuerza, equilibrio y agilidad.</p>
            </article>
            <article className="card">
              <h3>Spinning</h3>
              <p>Cardio intenso con música y energía para quemar calorías.</p>
            </article>
            <article className="card">
              <h3>Musculación</h3>
              <p>Rutinas guiadas para ganar masa muscular y mejorar tu técnica.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contacto" id="contacto">
        <div className="container">
          <h2 className="section-title">Inscríbete hoy</h2>
          <p className="section-text">
            Déjanos tus datos y te contactaremos para ayudarte a elegir el mejor plan.
          </p>

          <form onSubmit={enviarFormulario}>
            <div className="campo">
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={datos.nombre}
                onChange={cambiarDato}
                className={errores.nombre ? "incorrecto" : datos.nombre ? "correcto" : ""}
              />
              <small className="error">{errores.nombre}</small>
            </div>

            <div className="campo">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="correo"
                value={datos.correo}
                onChange={cambiarDato}
                className={errores.correo ? "incorrecto" : datos.correo ? "correcto" : ""}
              />
              <small className="error">{errores.correo}</small>
            </div>

            <div className="campo">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={datos.telefono}
                onChange={cambiarDato}
                className={errores.telefono ? "incorrecto" : datos.telefono ? "correcto" : ""}
              />
              <small className="error">{errores.telefono}</small>
            </div>

            <div className="campo">
              <label>Edad</label>
              <input
                type="number"
                name="edad"
                value={datos.edad}
                onChange={cambiarDato}
                className={errores.edad ? "incorrecto" : datos.edad ? "correcto" : ""}
              />
              <small className="error">{errores.edad}</small>
            </div>

            <div className="campo">
              <label>Plan</label>
              <select
                name="plan"
                value={datos.plan}
                onChange={cambiarDato}
                className={errores.plan ? "incorrecto" : datos.plan ? "correcto" : ""}
              >
                <option value="">Seleccione un plan</option>
                <option value="Básico">Básico</option>
                <option value="Full">Full</option>
                <option value="Premium">Premium</option>
              </select>
              <small className="error">{errores.plan}</small>
            </div>

            <div className="campo">
              <label>Objetivo</label>
              <textarea
                name="objetivo"
                value={datos.objetivo}
                onChange={cambiarDato}
                className={errores.objetivo ? "incorrecto" : datos.objetivo ? "correcto" : ""}
              />
              <small className="error">{errores.objetivo}</small>
            </div>

            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  name="terminos"
                  checked={datos.terminos}
                  onChange={cambiarDato}
                />{" "}
                Acepto los términos y condiciones
              </label>
              <small className="error">{errores.terminos}</small>
            </div>

            <button className="btn" type="submit">Inscribirme</button>
          </form>
        </div>
      </section>

      {modal && (
        <div className="modal" style={{ display: "flex" }}>
          <div className="modal-contenido">
            <h2>Inscripción exitosa</h2>
            <p>✅ ¡Registro realizado correctamente!</p>
            <p>Plan elegido: {datos.plan}</p>
            <p>Nos comunicaremos contigo muy pronto.</p>
            <button className="btn" onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}

      <footer>
        <p>IronFit Gym | Av. Energía 123, Lima | Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;