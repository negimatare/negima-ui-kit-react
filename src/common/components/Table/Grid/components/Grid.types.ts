import { TableColumnId } from "@fluentui/react-components";

/**
 * Grid Column Type
 */
export type GridColumnType<T = any> = {
    id: TableColumnId;
    label: string;
    minWidth?: number;
    maxWidth?: number;
    renderCell?: (item: T) => React.ReactNode;
};

/**
 * Grid Props
 */
export type GridProps = {
    items: any[];
    columns: GridColumnType[];
    loading: boolean;
    emptyContentLabel: string;
    renderActions?: (item: Record<string, any>) => void;
};