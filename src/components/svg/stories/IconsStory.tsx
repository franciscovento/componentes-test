import {
  SvgArrowCircleRight,
  SvgArrowDown,
  SvgArrowLeft,
  SvgArrowRight,
  SvgArrowUp,
  SvgCalendar,
  SvgChart,
  SvgCrown,
  SvgDocumentEmpty,
  SvgDocumentUpload,
  SvgDownload,
  SvgEditPencil,
  SvgElipsis,
  SvgExclamationCircle,
  SvgExport,
  SvgEyeSlash,
  SvgHomeFill,
  SvgHomeOutline,
  SvgInfoCircle,
  SvgLogout,
  SvgMessage,
  SvgMessageLine,
  SvgMessageNotification,
  SvgMinus,
  SvgMoveLine,
  SvgOpenEye,
  SvgOutlineBell,
  SvgPlus,
  SvgQuestionCircleFill,
  SvgQuestionCircleOutline,
  SvgRowVertical,
  SvgSearch,
  SvgSendArrow,
  SvgSort,
  SvgSuccessCircle,
  SvgSuccessCircleFill,
  SvgSupplierFill,
  SvgSupplierOutline,
  SvgTrash,
  SvgTruckFill,
  SvgTruckOutline,
  SvgWarningTriangle,
  SvgXMark,
} from '@/components/svg';
import { FC } from 'react';

interface Props {
  textColor: string;
}
export const IconsStory: FC<Props> = ({ textColor }) => {
  return (
    <div className="sui-p-12 sui-flex sui-flex-col sui-gap-8" style={{ color: textColor }}>
      <div className="sui-flex sui-gap-2 sui-flex-wrap">
        <h2 className="sui-text-2xl sui-font-bold sui-w-full sui-text-[#1F1F1F]">Navigation</h2>
        <SvgHomeOutline />
        <SvgHomeFill />
        <SvgTruckOutline />
        <SvgTruckFill />
        <SvgSupplierOutline />
        <SvgSupplierFill />
        <SvgQuestionCircleFill />
        <SvgQuestionCircleOutline />
      </div>
      <div className="sui-flex sui-gap-2 sui-flex-wrap">
        <h2 className="sui-text-2xl sui-font-bold sui-w-full sui-text-[#1F1F1F]">System</h2>
        <SvgLogout />
        <SvgArrowCircleRight />
        <SvgArrowDown />
        <SvgArrowLeft />
        <SvgArrowRight />
        <SvgArrowUp />
        <SvgArrowCircleRight />
        <SvgDownload />
        <SvgExport />
        <SvgOutlineBell />
        <SvgEyeSlash />
        <SvgOpenEye />
        <SvgSearch />
        <SvgElipsis />
        <SvgXMark />
      </div>
      <div className="sui-flex sui-gap-2 sui-flex-wrap ">
        <h2 className="sui-text-2xl sui-font-bold sui-w-full sui-text-[#1F1F1F]">
          Communication
        </h2>

        <SvgMessage />
        <SvgMessageLine />
        <SvgMessageNotification />
        <SvgSendArrow />
      </div>
      <div className="sui-flex sui-gap-2 sui-flex-wrap">
        <h2 className="sui-text-2xl sui-font-bold sui-w-full sui-text-[#1F1F1F]">Feedback</h2>

        <SvgWarningTriangle />
        <SvgSuccessCircle />
        <SvgSuccessCircleFill />
        <SvgExclamationCircle />
      </div>
      <div className="sui-flex sui-gap-2 sui-flex-wrap">
        <h2 className="sui-text-2xl sui-font-bold sui-w-full sui-text-[#1F1F1F]">Other</h2>

        <SvgInfoCircle />
        <SvgTrash />
        <SvgMinus />
        <SvgPlus />
        <SvgEditPencil />
        <SvgRowVertical />
        <SvgChart />
        <SvgCrown />
        <SvgCalendar />
        <SvgDocumentUpload />
        <SvgDocumentEmpty />
        <SvgMoveLine />
        <SvgSort />
      </div>
    </div>
  );
};
