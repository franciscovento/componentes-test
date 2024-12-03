import { SvgExclamationCircle, SvgInfoCircle, SvgSuccessCircle, SvgWarningTriangle } from "@/components/svg";

export const notificationIcons: Record<
  'success' | 'info' | 'warning' | 'error',
  React.ReactNode
> = {
  error: (
    <SvgExclamationCircle
      width={24}
      height={24}
      className="sui-block sui-mr-4 sui-text-app-error-500"
    />
  ),
  success: <SvgSuccessCircle width={24} height={24} className="sui-block sui-mr-4" />,
  warning: (
    <SvgWarningTriangle
      width={24}
      height={24}
      className="sui-block sui-mr-4 sui-text-app-warning-500"
    />
  ),
  info: <SvgInfoCircle width={24} height={24} className="sui-block sui-mr-4" />,
};