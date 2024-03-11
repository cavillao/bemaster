import CategoriesCards from '../CategoriesCards/CategoriesCards';
import './Categories.css';

function Categories() {
  return (
    <div>
      <h1>Categorias</h1>
      <div className="cards-container">
        <CategoriesCards categorie="accion" />
        <CategoriesCards categorie="ciencia-ficcion" />
        <CategoriesCards categorie="deportes" />
        <CategoriesCards categorie="drama" />
        <CategoriesCards categorie="comedia" />
      </div>
    </div>
  );
}

export default Categories;
