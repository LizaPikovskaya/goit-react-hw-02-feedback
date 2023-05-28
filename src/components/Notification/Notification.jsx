import { Text } from './Notification.styled';
import { Section } from 'components/Section/Section';

export const Notification = ({ message }) => {
  return (
    <Section title="Statistics">
      <Text>{message}</Text>
    </Section>
  );
};
