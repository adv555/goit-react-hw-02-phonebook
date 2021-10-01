import PropTypes from 'prop-types';
import s from 'components/Section/Section.module.scss';

function Section({ title, children }) {
  return (
    <section className={`Container ${s.Section}`}>
      <h2 className={s.Title}>{title}</h2>
      <div className={s.FormSection}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
