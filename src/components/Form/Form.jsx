import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import FormStyle from './Form.module.css';

const Form = ({ addToContactList }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();

    addToContactList({ id: nanoid(4), name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        reset();
        break;
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className={FormStyle.form}>
      <label className={FormStyle.label}>
        Name
        <input
          className={FormStyle.input}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={FormStyle.label}>
          Number
          <input
            className={FormStyle.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleNameChange}
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </label>

      <button className={FormStyle.button} type="submit">
        add to contacts
      </button>
    </form>
  );
};

Form.propTypes = {
  addToContactList: PropTypes.func.isRequired,
};

export default Form;

// import PropTypes from 'prop-types';

// import { nanoid } from 'nanoid';
// import { Component } from 'react';

// export class Form extends Component {
//   state = {
//     id: '',
//     name: '',
//     number: '',
//   };

//   handleNameChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ id: nanoid(8), [name]: value });
//   };

//   handleSubmitForm = e => {
//     e.preventDefault();

//     const { addToContactList } = this.props;

//     addToContactList(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmitForm}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//             autoComplete="off"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <label>
//             Number
//             <input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleNameChange}
//               autoComplete="off"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//         </label>

//         <button type="submit">add to contacts</button>
//       </form>
//     );
//   }
// }

// Form.propTypes = {
//   addToContactList: PropTypes.func.isRequired,
// };
