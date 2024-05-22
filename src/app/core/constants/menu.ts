import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Accueil',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Page Principale', route: '/dashboard/nfts' },
            {
              icon: 'assets/icons/heroicons/outline/lock-closed.svg',
              label: 'Gerer Equipe',
              route: '/auth',
              children: [
                { label: 'Ajouter Admin', route: '/admin/add' },
                { label: 'Ajouter Operateur', route: '/admin/add' },
                { label: 'Consulter Operateurs', route: '/dashboard/operators' },
              ],
            },
            {
              icon: 'assets/icons/heroicons/outline/lock-closed.svg',
              label: 'Gerer Clients',
              route: '/auth',
              children: [
                { label: 'Consulter Clients', route: '/dashboard/welcome' },
                { label: 'Historique Achat', route: '/dashboard/client' },
              ],
            },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Configuration',
          route: '/auth',
          children: [
            { label: 'Service SMS', route: '/dashboard/sms' },
            { label: 'Gerer Produits', route: '/dashboard/products' },
            { label: 'Gerer offres', route: '/dashboard/offres' },
            { label: 'Gerer Flashsales', route: '/dashboard/flashsales' },
            { label: 'Gerer pub', route: '/dashboard/pub' },
            
            
          ],
        },
      ],
    },
    {
      group: 'Transaction',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'Fiches',
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Points Fids',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Clients',
          route: '/users',
        },
      ],
    },
    {
      group: 'Configuration',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Parametres',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Stock',
          route: '/folders',
          children: [
            { label: 'Voir stock', route: '/folders/current-files' },
            { label: 'Ajouter Produit', route: '/folders/download' },
            { label: 'Ajouter Solde', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
