// assets
import { IconTypography } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography
};

// ==============================|| Market MENU ITEMS ||============================== //

const stock = {
  id: 'stock',
  title: 'Stock',
  type: 'group',
  children: [
    {
      id: 'stock',
      title: 'Stock',
      type: 'item',
      url: '/stock',
      icon: icons.IconTypography,
      breadcrumbs: false
    }
  ]
};

export default stock;
