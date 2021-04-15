import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Orgs extends Component {
  constructor(props) {
    super(props);
        this.state = {
          data: this.props.data, 
          nameFlag: true, 
          filterData: this.props.filterData
        };
  
        this.onClick = this.onClick.bind(this)
    }

  onClick = () => {
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
    console.log(arr[0].name)
  }

  render() {
    return(
      <div>
    <table id="org_table" className="table">
    <thead>
      <tr>
        <th scope="col">
          <p>Наименование</p>
          <button onClick={this.onClick} type="button" className="btn btn-sm btn-outline-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
          </th>
        <th scope="col">Группа</th>
        <th scope="col">Специализация</th>
        <th scope="col">Страна</th>
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

*/