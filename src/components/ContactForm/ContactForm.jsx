import { Component } from 'react';
import shortid from 'shortid';
import s from 'components/ContactForm/ContactForm.module.scss';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log(this.props);
    // console.log(this.state);
    // console.log(name, value);

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const setNewValue = this.handleChange;
    const setContact = this.handleSubmit;
    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();

    return (
      <form className={s.Form} onSubmit={setContact}>
        <div className={s.group}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            id={nameInputId}
            onChange={setNewValue}
          />
          <label htmlFor={nameInputId}>Name</label>
          <div className="bar"></div>
        </div>

        <div className={s.group}>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            id={numberInputId}
            onChange={setNewValue}
          />
          <label htmlFor={numberInputId}>Number</label>
          <div className="bar"></div>
        </div>
        <button className={s.Btn} type="submit">
          add contact
        </button>
      </form>
    );
  }
}

export default Form;
