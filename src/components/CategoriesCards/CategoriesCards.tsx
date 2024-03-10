import './CategoriesCards.css'
import { Categories } from '../../types/categories'

function CategoriesCards({ categorie }: Categories) {
  return (
    <>
      <div className="categorie">
        <p>{categorie}</p>
      </div>
    </>
  )
}

export default CategoriesCards
