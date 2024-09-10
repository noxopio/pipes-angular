import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  public menuItems!: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {

        label: ' Pipes de Angular',
         icon: 'pi pi-desktop',

         items: [
          {
            label: 'texto y fechas',
            icon: 'pi  pi-align-left',
            routerLink: '/'
          }, {
            label: 'Numeros',
            icon: 'pi pi-dollar',
          routerLink: 'numbers',
          },
          {
            label: 'No comunes ',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          },
          {
            label:'Pipea personalizados',
            icon: 'pi pi-cog',
            items: [
              {label:'Otro elemento',
                icon: 'pi pi-cog'
              }
            ]
          }
        ]
      },
        {
          label: 'texto y fechas',
          icon: 'pi  pi-align-left'
        }, {
          label: 'Numeros',
          icon: 'pi pi-dollar',
          url: 'numbers',
        },
        {
          label: 'No comunes ',
          icon: 'pi pi-globe'
        },
        {
          label:'Pipea personalizados',
          icon: 'pi pi-cog',
          items: [
            {label:'Custom Pipes',
              icon: 'pi pi-cog',
                routerLink: 'custom'
            }
          ]
        }
      ]}


}
