import './CategoriesCards.css';
import { Categories } from '../../types/categories';
import { useCategory } from '../../Contexts/CategoryContext';
import { Link } from 'react-router-dom';

function CategoriesCards({ categorie }: Categories) {
  const { setCategory } = useCategory();

  const handleCategory = (e: any) => {
    setCategory(e.target.textContent);
  };

  return (
    <>
      <div className="categorie" onClick={handleCategory}>
        <Link to={`/${categorie}`} className="categorie-link">
          <p>{categorie}</p>
        </Link>
      </div>
    </>
  );
}

export default CategoriesCards;
