import { SvgXMark } from '@/components/svg';
import { FC } from 'react';
import { Avatar } from '../avatar';
import { Button } from '../buttons/button/Button';
import { Text } from '../typography';
import { Props } from './TourTooltipCard.types';

export const TourTooltipCard: FC<Props> = ({
  avatarSrc = '/images/aira-avatar.png',
  currentStep,
  description,
  onClose,
  onPrimaryBtn,
  onSecondaryBtn,
  title,
  totalSteps,
  primaryBtnText = 'Siguiente',
  secondaryBtnText = 'Atrás',
}) => {
  return (
    <div className="sui-border sui-border-app-border-primary sui-shadow-app-lg sui-w-[350px] sui-rounded-2xl sui-p-3  sui-flex sui-flex-col sui-gap-4">
      <div className="sui-flex sui-items-start">
        <div className="sui-flex-1 sui-flex sui-gap-2">
          <Avatar
            className="sui-flex-shrink-0 !sui-mt-5"
            src={avatarSrc}
            size={'large'}
          />
          <div className="sui-flex sui-flex-col sui-gap-1">
            <Text variant="xs" as="span">
              {currentStep} / {totalSteps}
            </Text>
            <Text as="span" variant="sm" className="!font-bold">
              {title}
            </Text>
            <Text as="span" variant="sm">
              {description}
            </Text>
          </div>
        </div>
        <button onClick={onClose} className="sui-p-1">
          <SvgXMark width={16} height={16} />
        </button>
      </div>
      <div className="sui-flex sui-items-center sui-justify-end sui-gap-4">
        <Button
          onClick={onSecondaryBtn}
          type="primary"
          variant="text"
          color="primary"
        >
          {secondaryBtnText}
        </Button>
        <Button onClick={onPrimaryBtn} type="primary">
          {primaryBtnText}
        </Button>
      </div>
    </div>
  );
};

export default TourTooltipCard;
