import {
  MenuRootItem,

} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'cars renting', icon: 'car_rental', route: '/main/home' },

  {id: 'cars', name: 'My garage', icon: 'warehouse', opened: false,
    items: [
      {id: 'cars', name: 'My cars', icon: 'directions_car', route: '/main/cars'},
      {id: 'cars', name: 'Reports & Statistics', icon: 'trending_up', route: '/main/rents'},

    ]},

  {id: 'cars', name: 'My rents', icon: 'menu_book', route: '/main/rents/myRentals'},

  {id: 'logout', name: 'logout', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];