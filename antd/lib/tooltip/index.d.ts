import type { placements as Placements } from 'rc-tooltip/lib/placements';
import type { TooltipProps as RcTooltipProps } from 'rc-tooltip/lib/Tooltip';
import * as React from 'react';
import type { PresetColorType } from '../_util/colors';
import type { AdjustOverflow, PlacementsConfig } from '../_util/placements';
import type { LiteralUnion } from '../_util/type';
import PurePanel from './PurePanel';
export type { AdjustOverflow, PlacementsConfig };
export type TooltipPlacement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
export interface TooltipAlignConfig {
    points?: [string, string];
    offset?: [number | string, number | string];
    targetOffset?: [number | string, number | string];
    overflow?: {
        adjustX: boolean;
        adjustY: boolean;
    };
    useCssRight?: boolean;
    useCssBottom?: boolean;
    useCssTransform?: boolean;
}
interface LegacyTooltipProps extends Partial<Omit<RcTooltipProps, 'children' | 'visible' | 'defaultVisible' | 'onVisibleChange' | 'afterVisibleChange'>> {
    open?: RcTooltipProps['visible'];
    defaultOpen?: RcTooltipProps['defaultVisible'];
    onOpenChange?: RcTooltipProps['onVisibleChange'];
    afterOpenChange?: RcTooltipProps['afterVisibleChange'];
    /** @deprecated Please use `open` instead. */
    visible?: RcTooltipProps['visible'];
    /** @deprecated Please use `defaultOpen` instead. */
    defaultVisible?: RcTooltipProps['defaultVisible'];
    /** @deprecated Please use `onOpenChange` instead. */
    onVisibleChange?: RcTooltipProps['onVisibleChange'];
    /** @deprecated Please use `afterOpenChange` instead. */
    afterVisibleChange?: RcTooltipProps['afterVisibleChange'];
}
export interface AbstractTooltipProps extends LegacyTooltipProps {
    style?: React.CSSProperties;
    className?: string;
    color?: LiteralUnion<PresetColorType, string>;
    placement?: TooltipPlacement;
    builtinPlacements?: typeof Placements;
    openClassName?: string;
    arrowPointAtCenter?: boolean;
    autoAdjustOverflow?: boolean | AdjustOverflow;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    children?: React.ReactNode;
}
export type RenderFunction = () => React.ReactNode;
export interface TooltipPropsWithOverlay extends AbstractTooltipProps {
    title?: React.ReactNode | RenderFunction;
    overlay?: React.ReactNode | RenderFunction;
}
export interface TooltipPropsWithTitle extends AbstractTooltipProps {
    title: React.ReactNode | RenderFunction;
    overlay?: React.ReactNode | RenderFunction;
}
export declare type TooltipProps = TooltipPropsWithTitle | TooltipPropsWithOverlay;
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<unknown>> & {
    _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};
export default Tooltip;
