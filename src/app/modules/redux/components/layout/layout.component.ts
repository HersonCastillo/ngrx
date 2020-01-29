import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getUsers, getUserById } from 'src/app/store/selectors/user.selector';
import { IAppState } from 'src/app/store/states/app.state';
import { GetUsers } from 'src/app/store/actions/user.actions';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  users$ = this.store.pipe(select(getUsers));
  users: IUser[];
  filteredUsers: IUser[];

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.users = [];
    this.filteredUsers = [];
    this.store.dispatch(new GetUsers());
    this.users$.subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  onKeyUp(event: KeyboardEvent): void {
    const value: string = (event.target as any).value;
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()));
  }

  searchIdUser(id: number): void {
    this.store.pipe(select(getUserById(id))).subscribe(r => console.log(r));
  }
}
