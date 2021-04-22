import React, { Component } from 'react';
import {Link} from 'react-router-dom';

let specs = ['Уп. материалы', 'Металлоконтейнеры']
let data = [
    {
        "id":'7853', 
        'tz_id': '7868', 
        'date': '29.01.2021', 
        'proj': 'ГК 6040', 
        'group': 'Гофрокороб', 
        'type': 'Одноразовая', 
        'kind': 'Стандартная',
        'task': 'Изготовление серии',
        'count': '2', 
        'min_price': '170 руб.', 
        'max_price': '220 руб.',
        'checked': '12675',
        'sum': '25 500 руб.', 
        'status': 'Требуется решение'
    },
]

class Tenders extends Component {
  constructor(props) {
    super(props);
        this.state = {
          data: this.props.data, 
          nameFlag: true, 
          groupFlag: true,
          specFlag: true, 
          countryFlag: true,
          filterData: this.props.filterData,
          fname: '', 
          fgroup: '', 
          fcountry: '', 
          fspec: []
        };
  
        this.onClickDate = this.onClickDate.bind(this)
        this.onClickId = this.onClickId.bind(this)
        this.onClickTZId = this.onClickTZId.bind(this)
        this.onClickStat = this.onClickStat.bind(this)
        this.onClick = this.onClick.bind(this)
    }



    onClick(e){
      e.preventDefault();

      let name = document.getElementById('name_select').value
      
      let group = ""
      if (document.getElementById('gridRadios1').checked) group = 'Поставщик'
      if (document.getElementById('gridRadios2').checked) group = 'Клиент'
      if (document.getElementById('gridRadios3').checked) group = 'Клиент, поставщик'
      
      let country = document.getElementById('country_select').value

      let spec = []
      for (let i=0; i<specs.length;i++) {
        if  (document.getElementById(i).checked) spec.push(document.getElementById(i).value)
      }
      

      this.setState({
        fname: name, 
        fgroup: group, 
        fcountry: country, 
        fspec: spec,
      })

      this.props.handler(name)
    }

  onClickDate = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.date > b.date) && this.state.nameFlag) {
        return -1;
      }
      if ((a.date < b.date) && this.state.nameFlag) {
        return 1;
      }
      if ((a.date > b.date) && !this.state.nameFlag) {
        return 1;
      }
      if ((a.date < b.date) && !this.state.nameFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      nameFlag: !this.state.nameFlag
    })

    this.forceUpdate()
  }

  onClickId = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.country > b.country) && this.state.countryFlag) {
        return -1;
      }
      if ((a.country < b.country) && this.state.countryFlag) {
        return 1;
      }
      if ((a.country > b.country) && !this.state.countryFlag) {
        return 1;
      }
      if ((a.country < b.country) && !this.state.countryFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      countryFlag: !this.state.countryFlag
    })

    this.forceUpdate()
  }

  onClickStat = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.spec > b.spec) && this.state.specFlag) {
        return -1;
      }
      if ((a.spec < b.spec) && this.state.specFlag) {
        return 1;
      }
      if ((a.spec > b.spec) && !this.state.specFlag) {
        return 1;
      }
      if ((a.spec < b.spec) && !this.state.specFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      specFlag: !this.state.specFlag
    })

    this.forceUpdate()
  }
  
  onClickTZId = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.group > b.group) && this.state.groupFlag) {
        return -1;
      }
      if ((a.group < b.group) && this.state.groupFlag) {
        return 1;
      }
      if ((a.group > b.group) && !this.state.groupFlag) {
        return 1;
      }
      if ((a.group < b.group) && !this.state.groupFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      groupFlag: !this.state.groupFlag
    })

    this.forceUpdate()
  }

  render() {
    return(
      <div>
        <div className="filter">
      <form class="form-inline">

  <label  for="inlineFormInputName2">Номер решения</label>
  <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.id}>{item.id}</option>
      )})}
      </select>


      <label  for="inlineFormInputName2">Номер ТЗ</label>
  <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.tz_id}>{item.tz_id}</option>
      )})}
      </select>


      <label  for="inlineFormInputName2">Дата решения</label>
  <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.date}>{item.date}</option>
      )})}
      </select>


      <label  for="inlineFormInputName2">Проект</label>
  <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.proj}>{item.proj}</option>
      )})}
      </select>

  

  <label for="inlineFormInputGroupUsername2">Статус тендера</label>
  <div class="form-check mb-2 mr-sm-2">
  <div className="col-sm-10">

          
      {data.map((item, i)=>{
      return (
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value={item.status}  id={i}/>
        <label className="form-check-label" for="gridCheck1">
          {item.status}
        </label>
        </div>
        
      )})}

      </div>

  </div>

    <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Применить</button>
</form>
</div>




      <div>
    <table id="org_table" className="table">
    <thead>
      <tr>
        <th scope="col">
          <p>Номер решения</p>
          <button onClick={this.onClickId} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
        <th scope="col">
          <p>Номер ТЗ</p>
          <button onClick={this.onClickTZId} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
          <th scope="col">
          <p>Дата решения</p>
          <button onClick={this.onClickDate} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
          <th scope="col">
          <p>Проект</p>
          </th>
        <th scope="col">Группа упаковки</th>
        <th scope="col">Тип упаковки</th>
        <th scope="col">Вид упаковки</th>
        <th scope="col">Вид задания</th>
        <th scope="col">Кол-во КП</th>
        <th scope="col">Мин. цена за ед.</th>
        <th scope="col">Макс. цена за ед.</th>
        <th scope="col">Выбранное КП</th>
        <th scope="col">Сумма заказа без НДС</th>
        <th scope="col">
          <p>Статус тендера</p>
          <button onClick={this.onClickStat} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, i)=>{
        return (
      <tr>
        <td>
          <Link to={`/tenders/link/${item.id}`} >
            {item.id}
          </Link>
        </td>
        <td><Link to={`/tech/link/${item.tz_id}`} >
            {item.id}
          </Link></td>
        <td>{item.date}</td>
        <td>{item.proj}</td>
        <td>{item.group}</td>
        <td>{item.type}</td>
        <td>{item.kind}</td>
        <td>{item.task}</td>
        <td>{item.count}</td>
        <td>{item.min_price}</td>
        <td>{item.max_price}</td>
        <td>{item.checked}</td>
        <td>{item.sum}</td>
        <td>{item.status}</td>
      </tr>)})}
    </tbody>
  </table> 
</div>
</div>
)
  }
}

export default Tenders;