import * as React from 'react';
import type { MessageInstance, ConfigOptions } from './interface';
type HolderProps = ConfigOptions & {
    onAllRemoved?: VoidFunction;
};
export declare function useInternalMessage(notificationConfig?: HolderProps): [MessageInstance, React.ReactElement];
export default function useMessage(notificationConfig?: ConfigOptions): [MessageInstance, React.ReactElement<any, string | React.JSXElementConstructor<any>>];
export {};
