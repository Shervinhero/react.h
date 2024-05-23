import './Card.css';  // Ensure the file path is correct
import PropTypes from 'prop-types';

function Card({ reason, headline }) {
    return (
        <article>
            <h3>{headline}</h3>
            JSX is strange because {reason}
        </article>
    );
}

Card.propTypes = {
    reason: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired
};

export default Card;
