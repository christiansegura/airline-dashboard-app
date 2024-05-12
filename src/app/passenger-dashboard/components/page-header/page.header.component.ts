import {Component, Input} from '@angular/core';

@Component({
  selector: 'page-header',
  styleUrls:['page-header.scss'],
  template: `
    <div class="card mb-5 header-card">
      <div class="card-content">
        <h1 class="is-size-2 mb-5 mt-5 has-text-white">{{ headerText }}</h1>
      </div>
    </div>
  `
})

export class PageHeaderComponent {
  @Input() headerText = ''
}
