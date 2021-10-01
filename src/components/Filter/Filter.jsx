import PropTypes from 'prop-types';
import s from 'components/Filter/Filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.FilterLabel} htmlFor="">
      Filter contacts by name
      <input
        className={s.FilterInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
