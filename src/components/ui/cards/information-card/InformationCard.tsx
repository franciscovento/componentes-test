import React, { FC } from 'react';
import { Text } from '../../typography/';
import BaseCard from '../base-card/BaseCard';

interface Props {
  icon?: React.ReactNode;
  title?: string;
  className?: string;
  description?: string;
  items?: InformationItem[];
}

export interface InformationItem {
  label: string | React.ReactNode;
  content: string | React.ReactNode;
  action?: React.ReactNode;
  // action?: {
  //   label: string;
  //   onClick?: () => void;
  // };
}

export const InformationCard: FC<Props> = ({
  icon,
  title,
  description,
  items,
  className,
}) => {
  const renderLabel = (label: string | React.ReactNode) => {
    if (typeof label === 'string') {
      return (
        <Text className="!sui-text-app-modern-gray-600" variant="xs">
          {label}
        </Text>
      );
    }
    return label;
  };

  const renderContent = (content: string | React.ReactNode) => {
    if (typeof content === 'string') {
      return (
        <Text weight="600" variant="md">
          {content}
        </Text>
      );
    }
    return content;
  };

  return (
    <BaseCard className={className}>
      <div className="sui-flex sui-items-center sui-gap-4">
        {icon}
        <div>
          <Text className="!sui-font-bold" variant="lg">
            {title}
          </Text>
          <Text variant="sm">{description}</Text>
        </div>
      </div>
      <div className="sui-@container sui-flex sui-flex-col sui-gap-3 sui-pt-4">
        {items?.map((item, index) => (
          <div
            key={index}
            className="sui-flex sui-flex-col @md:sui-flex-row @md:sui-items-end sui-justify-between sui-gap-2"
          >
            <div className="sui-flex sui-flex-col sui-gap-1">
              {renderLabel(item.label)}
              {renderContent(item.content)}
            </div>
            <div>{item.action}</div>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};
