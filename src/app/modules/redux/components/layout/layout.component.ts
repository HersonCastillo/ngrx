import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getUsers } from 'src/app/store/selectors/user.selector';
import { IAppState } from 'src/app/store/states/app.state';
import { GetUsers } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  users$ = this.store.pipe(select(getUsers));

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  onKeyUp(event: KeyboardEvent): void {
    const value = (event.target as any).value;

  }

}
