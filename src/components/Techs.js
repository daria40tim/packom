import React, { Component } from 'react';
import {Link} from 'react-router-dom';

let stats = ['Активно', 'Архив']
let cp = ['Не подано', 'Отклонено', 'Принято']
let specs = []
let data = [
    {
        'date': '12.01.2021', 
        'client': 'Организация 8', 
        'tz_id': '4368', 
        'end_date': '26.01.2021', 
        'proj': 'ГК 6040', 
        'group': 'Гофрокороб', 
        'kind': 'Стандартная', 
        'type': 'Одноразовая', 
        'task': 'Изготовление серии', 
        'tz_st': 'Активно', 
        'tender_st': 'Не проведен', 
        'count': '', 
        'com_st': 'Не подано'
    },
    {
        'date': '05.03.2020', 
        'client': 'Организация 1', 
        'tz_id': '4368', 
        'end_date': '15.03.2020', 
        'proj': 'ГК 6040', 
        'group': 'Гофрокороб', 
        'kind': 'Специальная', 
        'type': 'Одноразовая', 
        'task': 'Изготовление серии', 
        'tz_st': 'Архив', 
        'tender_st': 'Завершен', 
        'count': '', 
        'com_st': 'Отклонено'
    },
    {
        'date': '20.02.2020', 
        'client': 'Организация 1', 
        'tz_id': '4368', 
        'end_date': '05.03.2020', 
        'proj': 'ГК 6040', 
        'group': 'Гофрокороб', 
        'kind': 'Стандартная', 
        'type': 'Одноразовая', 
        'task': 'Изготовление серии', 
        'tz_st': 'Архив', 
        'tender_st': 'Завершен', 
        'count': '', 
        'com_st': 'Принято'
    },
    {
        'date': '12.01.2021', 
        'client': 'Организация 1', 
        'tz_id': '4368', 
        'end_date': '26.01.2021', 
        'proj': 'ГК 6040', 
        'group': 'Гофрокороб', 
        'kind': 'Стандартная', 
        'type': 'Одноразовая', 
        'task': 'Изготовление серии', 
        'tz_st': 'Архив', 
        'tender_st': 'Требуется решение', 
        'count': '2', 
        'com_st': ''
    },
]

class Techs extends Component {
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
  
        this.onClickClient = this.onClickClient.bind(this)
        this.onClickCommStat = this.onClickCommStat.bind(this)
        this.onClickDate = this.onClickDate.bind(this)
        this.onClickEndDate = this.onClickEndDate.bind(this)
        this.onClickId = this.onClickId.bind(this)
        this.onClickTZStat = this.onClickTZStat.bind(this)
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

  onClickClient = () => {
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

  onClickId = () => {
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
  
  onClickEndDate = () => {
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

  onClickTZStat = () => {
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

  onClickCommStat = () => {
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

  <label  for="inlineFormInputName2">Дата создания</label>
  <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.date}>{item.date}</option>
      )})}
      </select>

      <label  for="inlineFormInputName2">Клиент</label>
  <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.client}>{item.client}</option>
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

      <label  for="inlineFormInputName2">Дата завершения</label>
  <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.end_date}>{item.end_date}</option>
      )})}
      </select>


      <label for="inlineFormInputGroupUsername2">Статус КП</label>
  <div class="form-check mb-2 mr-sm-2">
  <div className="col-sm-10">

          
      {cp.map((item, i)=>{
      return (
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value={item}  id={i}/>
        <label className="form-check-label" for="gridCheck1">
          {item}
        </label>
        </div>
        
      )})}

      </div>

      <label for="inlineFormInputGroupUsername2">Статус ТЗ</label>
  <div class="form-check mb-2 mr-sm-2">
  <div className="col-sm-10">

          
      {stats.map((item, i)=>{
      return (
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value={item}  id={i}/>
        <label className="form-check-label" for="gridCheck1">
          {item}
        </label>
        </div>
        
      )})}

      </div>

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
          <p>Номер ТЗ</p>
          <button onClick={this.onClickId} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
        <th scope="col">
          <p>Дата ТЗ</p>
          <button onClick={this.onClickDate} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
          <th scope="col">
          <p>Клиент</p>
          <button onClick={this.onClickClient} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
          <th scope="col">
          <p>Дата завершения</p>
          <button onClick={this.onClickEndDate} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
        <th scope="col">
            <p>Статус ТЗ</p>
            <button onClick={this.onClickTZStat} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
            </th>
        <th scope="col">Статус тендера</th>
        <th scope="col">Кол-во КП</th>
        <th scope="col">
            <p>Статус КП</p>
            <button onClick={this.onClickCommStat} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
          <Link to={`/orgs/link/${item.tz_id}`} >
            {item.tz_id}
          </Link>
        </td>
        <td>{item.date}</td>
        <td>{item.client}</td>
        <td>{item.end_date}</td>
        <td>{item.proj}</td>
        <td>{item.group}</td>
        <td>{item.type}</td>
        <td>{item.kind}</td>
        <td>{item.task}</td>
        <td>{item.tz_st}</td>
        <td>{item.tender_st}</td>
        <td>{item.count}</td>
        <td>{item.com_st}</td>
      </tr>)})}
    </tbody>
  </table> 
</div>
</div>
)
  }
}

export default Techs;