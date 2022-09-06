import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddCountry } from './country.actions';

export interface CountryStateModel {
  countryData: CountryDataModel[];
}

interface CountryDataModel {
  name: string | undefined;
  id: number | undefined;
}

const DEFAULT_COUNTRY_STATE = {
  name: undefined,
  id: undefined,
};

@State<CountryStateModel>({
  name: 'country',
  defaults: {
    countryData: [DEFAULT_COUNTRY_STATE],
  },
})
@Injectable()
export class CountryState {
  @Action(AddCountry)
  addCountry(ctx: StateContext<CountryStateModel>, { name, id }: AddCountry) {
    let countryArray = [];
    countryArray.push({ name, id });
    ctx.setState({
      countryData: countryArray,
    });
  }
}
