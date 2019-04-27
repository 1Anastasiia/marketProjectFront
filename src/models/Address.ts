export class Address {

  constructor(
    public id: number = null,
    public street: string= '',
    public apartment: string = '',
    public postal_code: string= '',
    public city: string = '',
    public country: string= ''
  ){}
}
