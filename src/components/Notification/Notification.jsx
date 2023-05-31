import { Text } from './Notification.styled';
import { Section } from 'components/Section/Section';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <Section title="Statistics">
      <Text>{message}</Text>
    </Section>
  );
};


Notification.propTypes = {
  message: PropTypes.string,
};

