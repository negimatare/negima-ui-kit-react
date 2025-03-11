import * as React from 'react';
import {
Menu,
    MenuTrigger,
    MenuList,
    MenuItem,
    MenuPopover,
    Button
} from '@fluentui/react-components';
import { MoreHorizontalRegular } from '@fluentui/react-icons';
import { ContextualMenuColumnProps } from './ContextualMenuColumn.types';
    
export const ContextualMenuColumn: React.FC<ContextualMenuColumnProps> = ({ menuItems }) => {
    return (
        <Menu>
            <MenuTrigger>
                <Button
                    appearance="transparent"
                    icon={<MoreHorizontalRegular />}
                />
            </MenuTrigger>

            <MenuPopover>
                <MenuList>
                    {menuItems.map(item => 
                        <MenuItem
                            key={item.key}
                            disabled={item.disabled}
                            onClick={item.onClick}
                        >
                            <div className="tw:flex tw:items-center">
                                <span className="tw:text-xl tw:mr-2 tw:pb-1">
                                    {item.icon}
                                </span>
                                {item.text}
                            </div>
                        </MenuItem>
                    )}
                </MenuList>
            </MenuPopover>
        </Menu>
    );
};

ContextualMenuColumn.displayName = 'ContextualMenuColumn';
    