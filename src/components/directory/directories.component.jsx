import "./directories.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const Directories = ({ categories }) => (
  <div className="directories-container">
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </div>
);
export default Directories;
