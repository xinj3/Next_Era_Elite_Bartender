import Col from './col';
import Row from './row';
declare function useBreakpoint(): Partial<Record<import("../_util/responsiveObserve").Breakpoint, boolean>>;
export type { ColProps, ColSize } from './col';
export type { RowProps } from './row';
export { Row, Col };
declare const _default: {
    useBreakpoint: typeof useBreakpoint;
};
export default _default;
