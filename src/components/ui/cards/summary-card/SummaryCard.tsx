import { FC } from 'react';
import { Text, Title } from '../../typography/';

interface Props {
  label: string;
  title: string;
}

export const SummaryCard: FC<Props> = ({ label, title }) => {
  return (
    <div className="sui-border sui-border-app-border-primary sui-px-6 sui-py-4 sui-rounded-xl sui-bg-app-white sui-flex sui-items-center sui-gap-4">
      <Title variant="xl" as="h2">
        {title}
      </Title>
      <Text variant="lg" as="span">
        {label}
      </Text>
    </div>
  );
};

export default SummaryCard;
