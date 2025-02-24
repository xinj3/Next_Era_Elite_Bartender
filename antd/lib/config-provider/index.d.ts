import type { ValidateMessages } from 'rc-field-form/lib/interface';
import * as React from 'react';
import type { RequiredMark } from '../form/Form';
import type { Locale } from '../locale-provider';
import type { ConfigConsumerProps, CSPConfig, DirectionType, Theme, ThemeConfig } from './context';
import { ConfigConsumer, ConfigContext, defaultIconPrefixCls } from './context';
import type { RenderEmptyHandler } from './defaultRenderEmpty';
import type { SizeType } from './SizeContext';
import SizeContext from './SizeContext';
export { type RenderEmptyHandler, ConfigContext, ConfigConsumer, type CSPConfig, type DirectionType, type ConfigConsumerProps, };
export { defaultIconPrefixCls };
export declare const configConsumerProps: string[];
export interface ConfigProviderProps {
    getTargetContainer?: () => HTMLElement | Window;
    getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
    prefixCls?: string;
    iconPrefixCls?: string;
    children?: React.ReactNode;
    renderEmpty?: RenderEmptyHandler;
    csp?: CSPConfig;
    autoInsertSpaceInButton?: boolean;
    form?: {
        validateMessages?: ValidateMessages;
        requiredMark?: RequiredMark;
        colon?: boolean;
    };
    input?: {
        autoComplete?: string;
    };
    pagination?: {
        showSizeChanger?: boolean;
    };
    locale?: Locale;
    pageHeader?: {
        ghost: boolean;
    };
    componentSize?: SizeType;
    componentDisabled?: boolean;
    direction?: DirectionType;
    space?: {
        size?: SizeType | number;
    };
    virtual?: boolean;
    dropdownMatchSelectWidth?: boolean;
    theme?: ThemeConfig;
}
export declare const defaultPrefixCls = "ant";
declare function getGlobalIconPrefixCls(): string;
declare const setGlobalConfig: ({ prefixCls, iconPrefixCls, theme, }: Pick<ConfigProviderProps, "prefixCls" | "iconPrefixCls"> & {
    theme?: Theme | undefined;
}) => void;
export declare const globalConfig: () => {
    getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
    getIconPrefixCls: typeof getGlobalIconPrefixCls;
    getRootPrefixCls: () => string;
};
declare const ConfigProvider: React.FC<ConfigProviderProps> & {
    /** @private internal Usage. do not use in your production */
    ConfigContext: typeof ConfigContext;
    SizeContext: typeof SizeContext;
    config: typeof setGlobalConfig;
};
export default ConfigProvider;
