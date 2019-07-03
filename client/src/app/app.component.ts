import { Component } from '@angular/core';
import { UpdateUserGQL } from './generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  email: string;
  avatarFile: File;

  constructor(private updateUserGQL: UpdateUserGQL) {}

  changeFile(file: File) {
    this.avatarFile = file;
  }

  updateUser() {
    this.updateUserGQL
      .mutate({
        email: this.email,
        avatarFile: this.avatarFile,
      })
      .pipe(map(value => value.data.updateUser))
      .subscribe(
        user => {
          console.log(user);
        },
        error => {
          console.error(error);
        },
      );
  }
}
