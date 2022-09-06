import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AddCountry } from '../country/country.actions';
import { CountryStateModel } from '../country/country.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Select() country$!: Observable<CountryStateModel>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.addCountry('Thailand', 1);
  }

  addCountry(name: string, id: number) {
    this.store.dispatch(new AddCountry(name, id));
  }
}
