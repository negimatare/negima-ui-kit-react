import * as React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { DatetimeColumnProps } from "./DatetimeColumn.types";
import { Body1 } from "@fluentui/react-components";

export const DatetimeColumn: React.FC<DatetimeColumnProps> = ({ value }) => {
    const { i18n } = useTranslation();

    if (!value) return <span>-</span>;

    return (
        <div className="tw:flex tw:items-center">
            <Body1>
                {moment(value).locale(i18n.language).format('LL')}
            </Body1>
        </div>
    );
};

DatetimeColumn.displayName = "DatetimeColumn";