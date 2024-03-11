import { createContext, useContext, useState } from 'react';

// interface CategoryContextType {
//   selectedCategory: string | null;
//   setCategory: (category: string) => void;
// }

const CategoryContext = createContext<any>('');

export const CategoryProvider = ({ children }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const setCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  // if (!context) {
  //   throw new Error(
  //     'useCategory debe ser utilizado dentro de un CategoryProvider'
  //   );
  // }
  return context;
};
