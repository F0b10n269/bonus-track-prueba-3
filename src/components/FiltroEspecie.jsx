function FiltroEspecie({ especies, filtro, onFilterChange }) {
  return (
    <div className="filter-bar">
      <span className="filter-label">Filtrar por especie</span>
      <div className="filter-buttons" role="tablist" aria-label="Filtrar mascotas por especie">
        {especies.map((especie) => (
          <button
            key={especie}
            type="button"
            className={filtro === especie ? 'active' : ''}
            onClick={() => onFilterChange(especie)}
          >
            {especie}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FiltroEspecie
