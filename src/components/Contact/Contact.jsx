import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
    
    const handleDelete = () => {
    onDelete(id);
  };

    return (
        <li key={id} className={styles.contact}>
            <div className={styles.identity}>
                <p className={styles.name}>{name}</p>
                <p className={styles.number}>{number}</p>
                <button onClick={handleDelete} className={styles.button}>Delete</button>
            </div>
        </li>
    );
};

export default Contact;
