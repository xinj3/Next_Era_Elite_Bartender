import type React from 'react';
import type Group from './FloatButtonGroup';
import type BackTop from './BackTop';
import type { TooltipProps } from '../tooltip';
import type PurePanel from './PurePanel';
export type FloatButtonType = 'default' | 'primary';
export type FloatButtonShape = 'circle' | 'square';
export type FloatButtonGroupTrigger = 'click' | 'hover';
export interface FloatButtonProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    description?: React.ReactNode;
    type?: FloatButtonType;
    shape?: FloatButtonShape;
    tooltip?: TooltipProps['title'];
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
export interface FloatButtonContentProps extends React.DOMAttributes<HTMLDivElement> {
    className?: string;
    icon?: FloatButtonProps['icon'];
    description?: FloatButtonProps['description'];
    prefixCls: FloatButtonProps['prefixCls'];
}
export interface FloatButtonGroupProps extends FloatButtonProps {
    children: React.ReactNode;
    trigger?: FloatButtonGroupTrigger;
    open?: boolean;
    closeIcon?: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
}
export interface BackTopProps extends Omit<FloatButtonProps, 'target'> {
    visibilityHeight?: number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    target?: () => HTMLElement | Window | Document;
    prefixCls?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    duration?: number;
}
export type CompoundedComponent = React.ForwardRefExoticComponent<FloatButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>> & {
    Group: typeof Group;
    BackTop: typeof BackTop;
    _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};
