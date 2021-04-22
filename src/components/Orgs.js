import React, { Component } from 'react';
import {Link} from 'react-router-dom';

let specs = ['Уп. материалы', 'Металлоконтейнеры']

class Orgs extends Component {
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



    onClick = (e) => {

      let arr = []
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

      for (let i=0; i<this.state.data.length;i++) {
        if (this.props.data[i].name == name){
          arr.push(this.state.data[i])
        }
      }

      this.setState({
        data: arr
      })

      this.forceUpdate()

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

  <label  for="inlineFormInputName2">Название</label>
  <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {this.props.data.map((item, i)=>{
      return (
          <option value={item.name}>{item.name}</option>
      )})}
      </select>

  <label for="inlineFormInputGroupUsername2">Группа</label>
  <div class="input-group mb-2 mr-sm-2">
    <div className="col-sm-10">
    <div className="form-check">
      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value='Поставщик'/>
      <label className="form-check-label" for="gridRadios1">
        Поставщик
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value='Клиент' />
      <label className="form-check-label" for="gridRadios2">
        Клиент
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value='Клиент, поставщик' />
      <label className="form-check-label" for="gridRadios3">
        Клиент, поставщик
      </label>
    </div>
  </div>
  </div>
  
  <label for="inlineFormInputGroupUsername2">Страна</label>
  <div class="form-check mb-2 mr-sm-2">
  <select className="form-select" id="country_select">
          <option>Россия</option>
      </select>
  </div>

  <label for="inlineFormInputGroupUsername2">Специализация</label>
  <div class="form-check mb-2 mr-sm-2">
  <div className="col-sm-10">

          
      {specs.map((item, i)=>{
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

    <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Применить</button>
</form>
</div>




      <div>
    <table id="org_table" className="table">
    <thead>
      <tr>
        <th scope="col">
          <p>Наименование</p>
          <button onClick={this.onClickName} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
        <th scope="col">
          <p>Группа</p>
          <button onClick={this.onClickGroup} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
          <th scope="col">
          <p>Специализация</p>
          <button onClick={this.onClickSpec} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
          <th scope="col">
          <p>Страна</p>
          <button onClick={this.onClickCountry} type="button" className="btn btn-sm btn-outline-dark sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
        <th scope="col">Сайт</th>
        <th scope="col">Телефон</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      {this.state.data.map((item, i)=>{
        return (
      <tr>
        <td>
          <Link to={`/orgs/link/${item.o_id}`} >
            {item.name}
          </Link>
        </td>
        <td>{item.group}</td>
        <td>{item.spec}</td>
        <td>{item.country}</td>
        <td>{item.site}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
      </tr>)})}
    </tbody>
  </table> 
</div>
</div>
)
  }
}

export default Orgs;
/*<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>   - up

<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>  - down


<div className="row-sm-10">
      <div className="col-sm-10">
      <div>
        <h6>Название</h6>
      </div>
        <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {this.props.data.map((item, i)=>{
      return (
          <option value={item.name}>{item.name}</option>
      )})}
      </select>
      </div>
     


          <h6 className="col-form-label col-sm-2 pt-0">Группа</h6>
  <div className="col-sm-10">
    <div className="form-check">
      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value='Поставщик'/>
      <label className="form-check-label" for="gridRadios1">
        Поставщик
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value='Клиент' />
      <label className="form-check-label" for="gridRadios2">
        Клиент
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value='Клиент, поставщик' />
      <label className="form-check-label" for="gridRadios3">
        Клиент, поставщик
      </label>
    </div>
  </div>

<div className="col-sm-10">
        <h6>Страна</h6>
        <select className="form-select" id="country_select">
          <option>Россия</option>
      </select>
      </div>

      <div className="col-sm-10">
      <div>
        <h6>Специализация</h6>
      </div>
      <div className="form-check">
          
      {specs.map((item, i)=>{
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
    <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Применить</button>
  </div>
*/