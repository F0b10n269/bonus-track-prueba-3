import { useMemo, useState } from 'react'
import './App.css'
import FiltroEspecie from './components/FiltroEspecie'
import ListaMascotas from './components/ListaMascotas'
import { mascotas } from './data/mascotas'

const especies = ['Todas', ...new Set(mascotas.map((mascota) => mascota.especie))]

function App() {
  const [filtro, setFiltro] = useState('Todas')

  const mascotasFiltradas = useMemo(() => {
    if (filtro === 'Todas') {
      return mascotas
    }

    return mascotas.filter((mascota) => mascota.especie === filtro)
  }, [filtro])

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
        <FiltroEspecie especies={especies} filtro={filtro} onFilterChange={setFiltro} />
        <ListaMascotas mascotas={mascotasFiltradas} />
      </section>
    </main>
  )
}

export default App
