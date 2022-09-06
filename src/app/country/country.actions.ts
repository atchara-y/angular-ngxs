export class AddCountry {
  static readonly type = '[Country] Add Country';
  constructor(public name: string, public id: number) {}
}
