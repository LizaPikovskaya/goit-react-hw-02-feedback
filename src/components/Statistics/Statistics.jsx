import { Section } from 'components/Section/Section';
import { List } from './Statistic.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ state, onTotal, onPositivePercentage }) => {
  return (
    <Section title="Statistics">
      <List>
        <li>
          <p>Good: {state.good}</p>
        </li>
        <li>
          <p>Neutral: {state.neutral}</p>
        </li>
        <li>
          <p>Bad: {state.bad}</p>
        </li>
        <li>
          <p>Total: {onTotal()}</p>
        </li>
        <li>
          <p>Positive feedback: {onPositivePercentage(onTotal())}%</p>
        </li>
      </List>
    </Section>
  );
};


Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};

