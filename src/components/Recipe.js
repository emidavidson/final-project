
import { MdDeleteForever } from 'react-icons/md';

const Recipe = ({ id, text, date, handleDeleteRecipe }) => {
    return(
        <div className="recipe">
            <span>{text}</span>
            <div className="recipe-footer">
                <small>{date} </small>
                <MdDeleteForever onClick={()=> handleDeleteRecipe(id)}
                className='delete-icon' size='1.3em' />
            </div>
        </div>
    );
};

export default Recipe;