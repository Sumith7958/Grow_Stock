// assets
import { IconTypography,IconPalette } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette
};

// ==============================|| Market MENU ITEMS ||============================== //

const strategies = {
  id: 'strategy',
  title: 'Strategy',
  type: 'group',
  children: [
    {
      id: 'Companies',
      title: 'Companies',
      type: 'item',
      url: '/strategy',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'indicator',
      title: 'Indicators',
      type: 'item',
      url: '/strategy/indicator',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'model',
      title: 'Models',
      type: 'item',
      url: '/strategy/model',
      icon: icons.IconTypography,
      breadcrumbs: false
    }
    
  ]
};

export default strategies;
