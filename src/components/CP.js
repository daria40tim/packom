import React, { Component } from 'react';
import {Link} from 'react-router-dom';

let specs = ['Уп. материалы', 'Металлоконтейнеры']

let data = [
    {
        'id': '12675', 
        'date': '12.01.2021', 
        'status': 'Отклонено', 
        'tz_id':'2423', 
        'proj': 'ГК 6040', 
        'sup': 'Организация 1', 
        'price': '170 руб.', 
        'group': 'Гофрокороб',
        'type': 'Одноразовая',
        'kind': 'Стандартная',
        'task':'Изготовление серии'
    },
    {
        'id': '12632', 
        'date': '14.01.2021', 
        'status': 'Активно', 
        'tz_id':'7868', 
        'proj': 'ГК 6040', 
        'sup': 'Организация 3', 
        'price': '170 руб.', 
        'group': 'Гофрокороб',
        'type': 'Одноразовая',
        'kind': 'Стандартная',
        'task':'Изготовление серии'
    },
    {
        'id': '11789', 
        'date': '12.01.2021', 
        'status': 'Активно', 
        'tz_id':'7868', 
        'proj': 'ГК 6040', 
        'sup': 'Организация 5', 
        'price': '220 руб.', 
        'group': 'Гофрокороб',
        'type': 'Одноразовая',
        'kind': 'Стандартная',
        'task':'Изготовление серии'
    },
]

class CP extends Component {
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
  
        this.onClickName = this.onClickName.bind(this)
        this.onClickGroup = this.onClickGroup.bind(this)
        this.onClickSpec = this.onClickSpec.bind(this)
        this.onClickCountry = this.onClickCountry.bind(this)
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

  onClickName = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.name > b.name) && this.state.nameFlag) {
        return -1;
      }
      if ((a.name < b.name) && this.state.nameFlag) {
        return 1;
      }
      if ((a.name > b.name) && !this.state.nameFlag) {
        return 1;
      }
      if ((a.name < b.name) && !this.state.nameFlag) {
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

  onClickCountry = () => {
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

  onClickSpec = () => {
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
  
  onClickGroup = () => {
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

  <label  for="inlineFormInputName2">Номер КП</label>
  <select className="form-select" id="name_select">
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.id}>{item.id}</option>
      )})}
      </select>


      <label  for="inlineFormInputName2">Дата КП</label>
  <select className="form-select" id="name_select">
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.date}>{item.date}</option>
      )})}
      </select>

  <label for="inlineFormInputGroupUsername2">Статус КП</label>
  <div class="input-group mb-2 mr-sm-2">
    <div className="col-sm-10">
    <div className="form-check">
      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value='Поставщик'/>
      <label className="form-check-label" for="gridRadios1">
        Активно
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value='Клиент' />
      <label className="form-check-label" for="gridRadios2">
        Отклонено
      </label>
    </div>
  </div>
  </div>
  
  <label  for="inlineFormInputName2">Номер ТЗ</label>
  <select className="form-select" id="name_select">
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.tz_id}>{item.tz_id}</option>
      )})}
      </select>

  
  <label  for="inlineFormInputName2">Проект</label>
  <select className="form-select" id="name_select">
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.proj}>{item.proj}</option>
      )})}
      </select>


      <label  for="inlineFormInputName2">Поставщик</label>
  <select className="form-select" id="name_select">
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.sup}>{item.sup}</option>
      )})}
      </select>

    <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Применить</button>
</form>
</div>




      <div>
    <table id="org_table" className="table">
    <thead>
      <tr>
      <th scope="col">
          <p>Номер КП</p>
          <button onClick={this.onClickName} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
        <th scope="col">
          <p>Дата КП</p>
          <button onClick={this.onClickName} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
        <th scope="col">
          <p>Статус КП</p>
          <button onClick={this.onClickGroup} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
          <th scope="col">
          <p>Номер ТЗ</p>
          <button onClick={this.onClickSpec} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
          <th scope="col">
          <p>Проект</p>
          </th>
        <th scope="col">
            <p>Поставщик</p>
            <button onClick={this.onClickCountry} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
            </th>
        <th scope="col">Цена за ед.</th>
        <th scope="col">Группа упаковки</th>
        <th scope="col">Тип упаковки</th>
        <th scope="col">Вид упаковки</th>
        <th scope="col">Вид задания</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, i)=>{
        return (
      <tr>
        <td>
          <Link to={`/commertial/link/${item.id}`} >
            {item.id}
          </Link>
        </td>
        <td>{item.date}</td>
        <td>{item.status}</td>
        <td>{item.tz_id}</td>
        <td>{item.proj}</td>
        <td>{item.sup}</td>
        <td>{item.price}</td>
        <td>{item.group}</td>
        <td>{item.type}</td>
        <td>{item.kind}</td>
        <td>{item.task}</td>
      </tr>)})}
    </tbody>
  </table> 
</div>
</div>
)
  }
}

export default CP;