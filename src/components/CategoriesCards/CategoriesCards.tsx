import './CategoriesCards.css';
import { Categories } from '../../types/categories';
import { useCategory } from '../../Contexts/CategoryContext';
import { Link } from 'react-router-dom';
import { categoriesData } from '../../constants/categoriesData';

function CategoriesCards({ categorie }: Categories) {
  const { setCategory } = useCategory();

  const handleCategory = () => {
    setCategory(categorie);
  };

  return (
    <>
      <div className="categorie" onClick={handleCategory}>
        <Link to={`/${categorie}`} className="categorie-link">
          <p>{categoriesData[categorie]}</p>
        </Link>
      </div>
    </>
  );
}

export default CategoriesCards;
