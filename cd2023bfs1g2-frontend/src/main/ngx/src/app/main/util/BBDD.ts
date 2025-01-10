import { promise } from "protractor"

export class BBDD {
  username: string = 'demo'
  password: string = 'demouser'

  auth: string = "Basic " + btoa(`${this.username}:${this.password}`)

  carsList: Array<Object>

  protected body = {
    filter: {},
    columns: ["car_id", "user_rent", "rental_start_date", "rental_end_date", "total_price", "rent_id"]
  }

  public async getCarRentsById(car_id: number) {

    const { data } = await fetch('http://localhost:30069/rents/allRent/search', {
      method: 'POST',
      body: JSON.stringify(this.body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": this.auth
      }
    }).then(res => res.json())

    let dataFilter = data.filter(day => {
      return day.car_id === car_id
    })

    return dataFilter



  }
}