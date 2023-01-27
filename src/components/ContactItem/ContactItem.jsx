import PropTypes from 'prop-types';


export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
  <>
    <span style={{ marginRight: '10px' }}>{name} : {number}</span>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </>)
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  number: PropTypes.string.isRequired, 
  onDeleteContact: PropTypes.func.isRequired
}
