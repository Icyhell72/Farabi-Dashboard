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
            { label: 'Parapharmacie', route: '/dashboard/nfts' },
            { label: 'Clinique', route: '/dashboard/podcast' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Administration',
          route: '/auth',
          children: [
            { label: 'Operateur', route: '/auth/sign-up' },
            { label: 'Caisse', route: '/auth/sign-in' },
            { label: 'Client', route: '/auth/forgot-password' },
            { label: 'Produit', route: '/auth/new-password' },
            { label: 'Produit en solde', route: '/auth/two-steps' },
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
