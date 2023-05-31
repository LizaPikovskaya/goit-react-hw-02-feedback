import { Section } from 'components/Section/Section';
import { Button, List } from './FeedbackOptions.styled';
import  PropTypes from 'prop-types';

export const FeedbackOptions = ({
  incrementBad,
  incrementGood,
  incrementNeutral,
}) => {
  return (
    <Section title="Please leave feedback">
      <List>
        <li>
          <Button onClick={() => incrementGood()}>Good</Button>
        </li>
        <li>
          <Button onClick={() => incrementNeutral()}>Neutral</Button>
        </li>
        <li>
          <Button onClick={() => incrementBad()}>Bad</Button>
        </li>
      </List>
    </Section>
  );
};


FeedbackOptions.propTypes = {
  incrementBad: PropTypes.func,
  incrementGood: PropTypes.func,
  incrementNeutral: PropTypes.func,
};

