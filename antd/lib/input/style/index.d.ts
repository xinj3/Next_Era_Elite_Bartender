import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken } from '../../theme/internal';
import type { GlobalToken } from '../../theme/interface';
export type InputToken<T extends GlobalToken = FullToken<'Input'>> = T & {
    inputAffixPadding: number;
    inputPaddingVertical: number;
    inputPaddingVerticalLG: number;
    inputPaddingVerticalSM: number;
    inputPaddingHorizontal: number;
    inputPaddingHorizontalSM: number;
    inputBorderHoverColor: string;
    inputBorderActiveColor: string;
};
export declare const genPlaceholderStyle: (color: string) => CSSObject;
export declare const genHoverStyle: (token: InputToken) => CSSObject;
export declare const genActiveStyle: (token: InputToken) => {
    borderColor: string;
    boxShadow: string;
    borderInlineEndWidth: number;
    outline: number;
};
export declare const genDisabledStyle: (token: InputToken) => CSSObject;
export declare const genInputSmallStyle: (token: InputToken) => CSSObject;
export declare const genStatusStyle: (token: InputToken) => CSSObject;
export declare const genBasicInputStyle: (token: InputToken) => CSSObject;
export declare const genInputGroupStyle: (token: InputToken) => CSSObject;
export declare function initInputToken<T extends GlobalToken = GlobalToken>(token: T): InputToken<T>;
declare const _default: (prefixCls: string) => import("../../theme/internal").UseComponentStyleResult;
export default _default;
