import './directories.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directories = ({categories}) => (
    <div className="directories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id}
       category={category}
      />
    ))}
  </div>
)
export default Directories;

