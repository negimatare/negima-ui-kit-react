import * as React from "react";
import {
    Table,
    TableHeader,
    TableRow,
    TableBody,
    TableHeaderCell,
    TableCell,
    TableCellLayout,
    createTableColumn,
    useTableFeatures,
    useTableColumnSizing_unstable,
} from "@fluentui/react-components";
import { GridColumnType, GridProps } from "./Grid.types";

import { EmptyContent, GridShimmer } from "@negima/react-components";

export const Grid: React.FC<GridProps> = ({
    items,
    columns,
    loading,
    emptyContentLabel,
    renderActions
}) => {
    const { tableColumns, columnSizingOptions } = React.useMemo(() => {
        const baseTableColumns = columns.map((col: GridColumnType) =>
            createTableColumn({
                columnId: col.id,
                renderHeaderCell: () => col.label,
                renderCell: (item: Record<string, any>) =>
                    col.renderCell ? col.renderCell(item) : item[col.id] ?? "-"
            })
        );

        let finalTableColumns = [...baseTableColumns];

        const baseColumnSizingOptions = columns.reduce<
            Record<string, { minWidth?: number }>
        >((acc, col) => {
            acc[col.id] = { minWidth: col.minWidth };
            return acc;
        }, {});

        return {
            tableColumns: finalTableColumns,
            columnSizingOptions: baseColumnSizingOptions
        };
    }, [columns]);

    const { getRows, columnSizing_unstable } = useTableFeatures(
        { columns: tableColumns, items },
        [useTableColumnSizing_unstable({ columnSizingOptions })]
    );

    const rows = getRows() as Array<{ item: Record<string, any> }>;

    if (!items?.length && !loading) {
        return (
            <div className="tw:flex tw:justify-center tw:items-center">
                <EmptyContent heading={emptyContentLabel} />
            </div>
        );
    }

    return (
        <Table style={{ minWidth: "500px" }} {...columnSizing_unstable.getTableProps()}>
            <TableHeader>
                <TableRow>
                    {tableColumns.map((column) =>
                        <TableHeaderCell
                            key={column.columnId}
                            {...columnSizing_unstable.getTableHeaderCellProps(column.columnId)}
                        >
                            {column.renderHeaderCell()}
                        </TableHeaderCell>
                    )}
                </TableRow>
            </TableHeader>

            {loading
                ? <GridShimmer columnCount={tableColumns.length} />
                : <TableBody>
                    {rows.map(({ item }) =>
                        <TableRow key={item.id} onClick={() => { renderActions && renderActions(item); }}>
                            {tableColumns.map((column) =>
                                <TableCell
                                    key={column.columnId}
                                    {...columnSizing_unstable.getTableCellProps(column.columnId)}
                                >
                                    <TableCellLayout>
                                        {column.renderCell
                                            ? column.renderCell(item)
                                            : item[column.columnId]
                                        }
                                    </TableCellLayout>
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            }
        </Table>
    );
};

Grid.displayName = "Grid";