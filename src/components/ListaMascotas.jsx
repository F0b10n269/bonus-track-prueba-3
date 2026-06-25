import MascotaCard from './MascotaCard'

function ListaMascotas({ mascotas }) {
  if (mascotas.length === 0) {
    return <p className="empty-state">No hay mascotas para esta especie en este momento.</p>
  }

  return (
    <section className="pet-grid" aria-live="polite">
      {mascotas.map((mascota) => (
        <MascotaCard key={mascota.id} mascota={mascota} />
      ))}
    </section>
  )
}

export default ListaMascotas
