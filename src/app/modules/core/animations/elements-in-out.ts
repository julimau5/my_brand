import { animate, style, transition, trigger } from '@angular/animations';

export const fadeOnRender =  trigger('fadeOnRender', [
  transition(':enter', [
    style({
      transform: 'translateY(-30%)',
      opacity: '0'
    }),
    animate('0.4s', style({
      transform: 'translateY(0)',
      opacity: '1'
    })),
  ]),
  transition(':leave', [
    style({
      transform: 'translateY(0)',
      opacity: '1'
    }),
    animate('0.4s', style({
      transform: 'translateY(100%)',
      opacity: '0'
    }))
  ])
])
