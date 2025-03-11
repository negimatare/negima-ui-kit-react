import { PATHS_MAIN } from '@negima/react-configs';
import {
    bundleIcon,
    BoardFilled,
    BoardRegular,
    LayerDiagonalFilled,
    LayerDiagonalRegular,
    LayerDiagonalAddFilled,
    LayerDiagonalAddRegular,
    SettingsFilled,
    SettingsRegular
} from '@fluentui/react-icons';

const BoardSplit = bundleIcon(BoardFilled, BoardRegular);
const LayerDiagonal = bundleIcon(LayerDiagonalFilled, LayerDiagonalRegular);
const LayerDiagonalAdd = bundleIcon(LayerDiagonalAddFilled, LayerDiagonalAddRegular);
const Settings = bundleIcon(SettingsFilled, SettingsRegular);

export const SIDEBAR_SETTINGS = {
    navigationItems: [
        {
            key: 'navigationItem__overview',
            heading: 'homepage.navigation-item',
            icon: <BoardSplit />,
            path: PATHS_MAIN.root
        },
        {
            key: 'navigationItem__campaigns',
            heading: 'campaign.campaign-list.navigation-item',
            icon: <LayerDiagonal />,
            path: PATHS_MAIN.campaign.list,
            children: [
                {
                    key: 'navigationItem__campaigns__new',
                    heading: 'campaign.campaign-create.navigation-item',
                    icon: <LayerDiagonalAdd />,
                    path: PATHS_MAIN.campaign.new,
                }
            ]
        },
    ],
    footerItem: {
        key: 'navigationItem__settings',
        heading: 'settings.navigation-item',
        icon: <Settings />,
        path: PATHS_MAIN.root
    }
};