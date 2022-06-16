import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { fadeOnRender } from 'src/app/modules/core/animations/elements-in-out';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [fadeOnRender],
})
export class AboutMeComponent implements OnInit {
  @Input('show') show!: boolean;
  enter = false;
  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.show) {
      setTimeout(() => {
        this.enter = true;
        this._changeDetectorRef.detectChanges();
      }, 400);
    }
  }
}
