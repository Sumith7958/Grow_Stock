// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const  market= {
  id: 'market',
  title: 'Market',
  type: 'group',
  children: [
    {
      id: 'top-gainers-losers',
      title: 'Top Gainers Losers',
      type: 'item',
      url: '/market/top-gainers-losers',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'sector-performance',
      title: 'Sector Performance',
      type: 'item',
      url: '/market/sector-performance',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'index-contribution',
      title: 'Index Contribution',
      type: 'item',
      url: '/market/index-contribution',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'sector-charts',
      title: 'Sector Charts',
      type: 'item',
      url: '/market/sector-charts',
      icon: icons.IconWindmill,
      breadcrumbs: false
    }
  ]
};

export default market;