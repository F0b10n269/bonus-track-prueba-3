import { useMemo, useState } from 'react'
import './App.css'
import FiltroEspecie from './components/FiltroEspecie'
import ListaMascotas from './components/ListaMascotas'
import { mascotas } from './data/mascotas'

const especies = ['Todas', ...new Set(mascotas.map((mascota) => mascota.especie))]

function App() {
  const [filtro, setFiltro] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const busquedaNormalizada = useMemo(() => {
    return busqueda.trim().slice(0, 20).toLowerCase()
  }, [busqueda])

  const mascotasFiltradas = useMemo(() => {
    return mascotas.filter((mascota) => {
      const coincideEspecie = filtro === 'Todas' || mascota.especie === filtro
      const nombre = mascota.nombre.toLowerCase()
      const coincideBusqueda =
        busquedaNormalizada.length === 0 || nombre.includes(busquedaNormalizada)

      return coincideEspecie && coincideBusqueda
    })
  }, [filtro, busquedaNormalizada])

  const urgentes = mascotas.filter((mascota) => mascota.adopcionUrgente).length

  return (
    <main className="app-shell">
      <header className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Refugio de animales • Pantalla de recepción</p>
          <h1>Directorio digital de mascotas en adopción</h1>
          <p>
            Explora a nuestros compañeros, identifica su especie y descubre los casos que necesitan un hogar con urgencia.
          </p>
        </div>

        <div className="hero-stats" aria-label="Resumen del refugio">
          <article>
            <strong>{mascotas.length}</strong>
            <span>en adopción</span>
          </article>
          <article className="urgent">
            <strong>{urgentes}</strong>
            <span>urgentes</span>
          </article>
        </div>
      </header>

      <section className="content-panel">
        <div className="toolbar">
          <FiltroEspecie especies={especies} filtro={filtro} onFilterChange={setFiltro} />
          <label className="search-field">
            <span>Buscar por nombre</span>
            <input
              type="text"
              value={busqueda}
              onChange={(event) => setBusqueda(event.target.value.slice(0, 20))}
              placeholder="Ej. Luna"
              maxLength={20}
            />
          </label>
        </div>

        {mascotasFiltradas.length === 0 ? (
          <p className="empty-state">no hay mascotas que coincidan</p>
        ) : (
          <ListaMascotas mascotas={mascotasFiltradas} />
        )}
      </section>
    </main>
  )
}

export default App
