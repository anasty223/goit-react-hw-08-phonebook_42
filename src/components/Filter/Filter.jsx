import { Input } from "./Filter.styles";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/action";
import { getFilter } from "../../redux/contacts/items-selectors";

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <>
      <br />
      <div className="form-outline">
        <input
          className="form-control"
          id="formControlReadonly"
          type="text"
          aria-label="readonly input example"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
        />
        <label className="form-label" htmlFor="formControlReadonly">
          Find contact by name
        </label>
      </div>
    </>
  );
};
export default Filter;
