import { TableRow, TableCell } from "@fluentui/react-components";
import { GridShimmerProps } from "./GridShimmer.types";

import "./GridShimmer.css";

export const GridShimmer: React.FC<GridShimmerProps> = ({ 
    columnCount, 
    rowCount = 7 
}) => {
    return (
        <tbody>
            {Array.from({ length: rowCount }, (_, i) => (
                <TableRow key={`shimmer-row-${i}`}>
                    <TableCell colSpan={columnCount}>
                        <div className="grid-shimmer" />
                    </TableCell>
                </TableRow>
            ))}
        </tbody>
    );
};

GridShimmer.displayName = "GridShimmer";