// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';
import themeStyles from './themeStyles.json';


const theme: ThemeConfig = {
  cssVar: {
    prefix: 'antd',
  },
  token: {
    fontFamily: 'Nunito, sans-serif',
    colorPrimary: themeStyles.colors['app-primary-900'],
    borderRadius: 8,
    fontSize: 16,
    fontSizeXL: 20,
    fontSizeHeading2: 30,
    fontSizeHeading3: 26,
    fontSizeHeading4: 24,
    fontSizeHeading1: 36,
    // colorPrimaryBg: '#edfcf2',
    colorPrimaryBg: themeStyles.colors['app-success-50'],
    colorPrimaryBgHover: themeStyles.colors['app-success-100'],
    colorSuccess: themeStyles.colors['app-success-600'],
    colorSuccessBg: themeStyles.colors['app-success-50'],
    colorSuccessBorder: themeStyles.colors['app-success-400'],
    colorSuccessText: themeStyles.colors['app-success-600'],
    colorSuccessTextActive: themeStyles.colors['app-success-600'],
    colorWarningText: themeStyles.colors['app-warning-700'],
    colorWarningBorder: themeStyles.colors['app-warning-300'],
    colorWarningBg: themeStyles.colors['app-warning-100'],
    colorWarningBgHover: themeStyles.colors['app-warning-100'],
    colorWarningBorderHover: themeStyles.colors['app-warning-300'],
    colorWarning: themeStyles.colors['app-warning-500'],
    colorWarningHover: themeStyles.colors['app-warning-300'],
    colorWarningActive: themeStyles.colors['app-warning-300'],
    colorWarningTextHover: themeStyles.colors['app-warning-500'],
    colorWarningTextActive: themeStyles.colors['app-warning-500'],
    colorError: themeStyles.colors['app-error-400'],
    colorErrorBg: themeStyles.colors['app-error-50'],
    colorErrorText: themeStyles.colors['app-error-800'],
    colorErrorTextActive: themeStyles.colors['app-error-800'],
    colorErrorTextHover: themeStyles.colors['app-error-800'],
    colorErrorActive: themeStyles.colors['app-error-400'],
    colorErrorHover: themeStyles.colors['app-error-400'],
    colorErrorBorderHover: themeStyles.colors['app-error-400'],
    colorErrorBorder: themeStyles.colors['app-error-400'],
    colorErrorBgHover: themeStyles.colors['app-error-50'],
    colorSuccessBgHover: themeStyles.colors['app-success-50'],
    colorInfoBorder: themeStyles.colors['app-modern-gray-600'],
    colorInfoBorderHover: themeStyles.colors['app-modern-gray-600'],
    colorInfoHover: themeStyles.colors['app-modern-gray-600'],
    colorInfoBg: themeStyles.colors['app-white'],
    colorInfoBgHover: themeStyles.colors['app-white'],
    colorInfoText: themeStyles.colors['app-modern-gray-600'],
    colorInfo: themeStyles.colors['app-modern-gray-600'],
  },

  components: {
    Button: {
      primaryShadow: '',
      // Disabled
      colorBgContainerDisabled: 'rgb(234,236,240)',
      colorTextDisabled: 'rgb(152,162,179)',
      borderColorDisabled: 'rgb(234,236,240)',
      // Primary
      colorPrimaryHover: themeStyles.colors['app-primary-950'],
      colorPrimaryTextHover: themeStyles.colors['app-text-body'],

      // Text
      colorBgTextHover: themeStyles.colors['app-transparent'],
      colorBgTextActive: themeStyles.colors['app-transparent'],
      // Link

      linkHoverBg: themeStyles.colors['app-transparent'],
      colorLinkHover: themeStyles.colors['app-primary-900'],
      colorLink: themeStyles.colors['app-primary-900'],

      // Default
      defaultHoverBg: themeStyles.colors['app-modern-gray-50'],
      defaultBorderColor: themeStyles.colors['app-neutrals-300'],
      defaultHoverBorderColor: themeStyles.colors['app-neutrals-300'],

      fontWeight: 700,
      contentFontSize: 14,
      contentFontSizeSM: 14,
      contentFontSizeLG: 16,
      contentLineHeight: 1.2,
      contentLineHeightSM: 1.2,
      onlyIconSize: 20,
      onlyIconSizeLG: 20,
      onlyIconSizeSM: 20,
      paddingInline: 16,
      paddingInlineLG: 18,
      paddingBlock: 10,
      paddingBlockLG: 10,
      paddingBlockSM: 8,
      paddingInlineSM: 14,
      controlHeight: 37,
      controlHeightLG: 44,
      controlHeightSM: 33,
      borderRadiusLG: 8,
      borderRadiusSM: 8,
    },
    Dropdown: {
      paddingBlock: 8,
      controlPaddingHorizontal: 14,
    },
    Checkbox: {
      colorPrimary: themeStyles.colors['app-success-50'],
      colorPrimaryBorder: themeStyles.colors['app-primary-700'],
      colorPrimaryHover: themeStyles.colors['app-primary-100'],
      colorBorder: themeStyles.colors['app-primary-700'],
      colorWhite: themeStyles.colors['app-primary-700'],
    },
    Breadcrumb: {
      lastItemColor: themeStyles.colors['app-modern-gray-500'],
      colorBgTextHover: themeStyles.colors['app-modern-gray-100'],
      linkHoverColor: themeStyles.colors['app-modern-gray-500'],
      colorPrimaryBorder: 'rgba(172,207,190,0)',
      separatorColor: themeStyles.colors['app-modern-gray-500'],
      itemColor: themeStyles.colors['app-modern-gray-500'],

      linkColor: themeStyles.colors['app-modern-gray-500'],
      fontSize: 14,
    },
    Switch: {
      colorPrimary: themeStyles.colors['app-primary-600'],
      colorPrimaryHover: themeStyles.colors['app-primary-700'],
      colorTextQuaternary: themeStyles.colors['app-modern-gray-300'],
      colorTextTertiary: themeStyles.colors['app-modern-gray-400'],
      trackHeight: 24,
      trackMinWidth: 44,
      trackMinWidthSM: 36,
      trackHeightSM: 20,
      handleSizeSM: 16,
    },
    Input: {
      colorTextPlaceholder: themeStyles.colors['app-neutrals-400'],
      paddingBlockLG: 10,
      paddingInlineLG: 16,
      inputFontSizeLG: 14,
    },
    Select: {
      colorTextPlaceholder: themeStyles.colors['app-text-body'],
      optionSelectedFontWeight: 400,
      optionPadding: '8px 8px',
    },
    Tag: {
      borderRadiusSM: 16,
    },
    Tabs: {
      itemColor: themeStyles.colors['app-text-body'],
      itemSelectedColor: themeStyles.colors['app-text-body'],
      itemHoverColor: '#1D2939',
      lineWidth: 0,
    },
    Divider: {
      colorSplit: themeStyles.colors['app-border-primary'],
      margin: 0,
    },
    Alert: {
      fontSize: 14,
      colorText: themeStyles.colors['app-neutrals-800'],
    },
    Upload: {
      colorFillAlter: themeStyles.colors['app-white'],
      colorBorder: themeStyles.colors['app-neutrals-300'],
    },
    Card: {
      colorBorderSecondary: themeStyles.colors['app-modern-gray-200'],
      colorBgContainer: themeStyles.colors['app-neutrals-50'],
    },
    Table: {
      headerColor: themeStyles.colors['app-text-headings'],
      fontSize: 14,
      headerBg: themeStyles.colors['app-neutrals-25'],
      borderColor: themeStyles.colors['app-border-primary'],
      fontSizeIcon: 14,
      colorBgContainer: themeStyles.colors['app-neutrals-25'],
      cellFontSize: 14,
    },
    Steps: {
      padding: 0,
      lineWidth: 2,
      colorPrimary: themeStyles.colors['app-primary-600'],
    },
    DatePicker: {
      borderRadiusSM: 999,
      fontSize: 14,
      fontSizeLG: 16,
      lineHeight: 1,
      cellWidth: 40,
      cellHeight: 40,
    },
    Rate: {
      starSize: 12,
      starColor: '#FFA10E',
      marginXS: 4,
    },
    Tooltip: {
      fontSize: 14,
    },
    Modal: {
      borderRadiusLG: 24,
    },
    Notification: {
      width: 416,
      fontSizeLG: 16,
    },
  },
};

export default theme;
