import { Section } from 'components/Section/Section';
import { Button, List } from './FeedbackOptions.styled';
import  PropTypes from 'prop-types';

export const FeedbackOptions = ({
  incrementValue
}) => {
  return (
    <Section title="Please leave feedback">
      <List>
        <li>
          <Button onClick={() => incrementValue('good')}>Good</Button>
        </li>
        <li>
          <Button onClick={() => incrementValue('neutral')}>Neutral</Button>
        </li>
        <li>
          <Button onClick={() => incrementValue('bad')}>Bad</Button>
        </li>
      </List>
    </Section>
  );
};


FeedbackOptions.propTypes = {
  incrementValue: PropTypes.func,
};

