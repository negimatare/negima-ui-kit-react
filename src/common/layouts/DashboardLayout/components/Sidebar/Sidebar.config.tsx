import {
    bundleIcon,
    BoardSplitFilled,
    BoardSplitRegular,
    SettingsFilled,
    SettingsRegular,
    SparkleFilled,
    SparkleRegular
} from '@fluentui/react-icons';
import { PATHS_MAIN } from '@negima/react-configs';

const BoardSplitIcon = bundleIcon(BoardSplitFilled, BoardSplitRegular);
const SettingIcon = bundleIcon(SettingsFilled, SettingsRegular);
const SparkleIcon = bundleIcon(SparkleFilled, SparkleRegular);

export const SIDEBAR_SETTINGS = {
    navigationItems: [
        {
            key: 'navigationItem__overview',
            headline: 'Overview',
            icon: <BoardSplitIcon />,
            path: PATHS_MAIN.root
        },
        // {
        //     key: 'navigationItem__reactHookForm',
        //     headline: 'React Hook Form',
        //     icon: <IconForm />,
        //     path: PATHS_MAIN.reactHookForm.root,
        //     children: [
        //         {
        //             key: 'navigationItem__child__drawer',
        //             headline: 'Drawer Form',
        //             icon: <IconPanelRight />,
        //             path: PATHS_MAIN.reactHookForm.drawer
        //         }
        //     ]
        // },
        {
            key: 'navigationItem__konamiCode',
            headline: 'Konami Code',
            icon: <SparkleIcon />,
            path: PATHS_MAIN.konamiCode
        }
    ],
    footerItem: {
        key: 'navigationItem__settings',
        headline: 'Settings',
        icon: <SettingIcon />,
        path: PATHS_MAIN.settings
    }
};