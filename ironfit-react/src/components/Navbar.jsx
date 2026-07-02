function Navbar() {
  return (
    <nav>
      <div className="logo">IronFit Gym</div>

      <ul className="menu">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#beneficios">Beneficios</a></li>
        <li><a href="#planes">Planes</a></li>
        <li><a href="#clases">Clases</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;