export class User {

  constructor(
    public id: number = null,
    public name: string= '',
    public surneme: string = '',
    public address_id: number = null,
    public birth_date: string = '',
    public credentials_id: number = null
  ){}
}
