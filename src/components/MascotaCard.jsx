function MascotaCard({ mascota }) {
  const { nombre, raza, edad, especie, descripcion, caracteristicas, adopcionUrgente } = mascota
  const especieClase = especie.toLowerCase()

  return (
    <article className={`pet-card ${especieClase} ${adopcionUrgente ? 'urgent' : ''}`}>
      <div className="card-top">
        <div>
          <p className={`species-badge ${especieClase}`}>{especie}</p>
          <h3>{nombre}</h3>
        </div>
        {adopcionUrgente ? <span className="urgent-badge">Adopción urgente</span> : null}
      </div>

      <p className="pet-meta">
        {raza} • {edad} años
      </p>
      <p className="pet-description">{descripcion}</p>

      <ul className="pet-characteristics">
        {caracteristicas.map((caracteristica) => (
          <li key={caracteristica}>{caracteristica}</li>
        ))}
      </ul>
    </article>
  )
}

export default MascotaCard
