import { animate, style, transition, trigger } from '@angular/animations';


export const modalMenuAnimation =  trigger('modalMenuAnimation', [
  transition(':enter', [
    style({
      transform: 'translateY(-60%)',
      opacity: '0'
    }),
    animate('0.5s cubic-bezier(.23,.63,.84,.7)', style({
      transform: 'translateY(0)',
      opacity: '1'
    })),
  ]),
  transition(':leave', [
    style({
      transform: 'translateY(0)',
      opacity: '1'
    }),
    animate('0.5s cubic-bezier(.23,.63,.84,.7)', style({
      transform: 'translateY(100%)',
      opacity: '0'
    }))
  ])
])
