import {Component} from '@angular/core';

@Component({
  selector:'quick-notifications',
  template:`
    <div class="card mb-5">
      <div class="card-content">
        <div class="content">
          <h1 class="is-size-4">Recent System Notifications</h1>
          <div class="notification is-danger">
            <button class="delete"></button>
            Primar lorem ipsum dolor sit amet. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut. Nullam gravida purus
            diam, et dictum <a>felis venenatis</a> efficitur.
            <span class="tag is-light">12:07 pm</span>
          </div>

          <div class="notification is-danger">
            <button class="delete"></button>
            Tempus empus quis placerat ut. Nullam gravida purus
            diam, et dictum <a>felis venenatis</a> efficitur.
            <span class="tag is-light">10:23 pm</span>
          </div>

          <div class="notification is-light">
            <button class="delete"></button>
            Ipsum dolor sit amet. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut. Nullam gravida purus
            diam, et dictum <a>felis venenatis</a> efficitur.
            <span class="tag is-light">9:48 pm</span>
          </div>
        </div>
      </div>
    </div>
  `
})

export class QuickNotificationsComponent {

}
