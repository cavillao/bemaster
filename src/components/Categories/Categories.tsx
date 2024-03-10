import CategoriesCards from '../CategoriesCards/CategoriesCards'
import './Categories.css'

function Categories() {
  return (
    <div>
      <h1>Categorias</h1>
      <div className="cards-container">
        <CategoriesCards categorie="ACCIÓN" />
        <CategoriesCards categorie="CIENCIA FICCIÓN" />
        <CategoriesCards categorie="DEPORTES" />
        <CategoriesCards categorie="DRAMA" />
        <CategoriesCards categorie="COMEDIA" />
      </div>
    </div>
  )
}

export default Categories
