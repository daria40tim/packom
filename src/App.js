import './App.css';
import React, {Component} from 'react';
import Orgs from './components/Orgs'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import Org from './components/Org'
import Filters from './components/Filters'


let data = [
  {"o_id": "0", 
    "name": "ЗАО МИФ Мебель", 
    "group": "Поставщик", 
    "spec": "Металлоконтейнеры", 
    "country": "Россия", 
    "site": "info.ru", 
    "phone": "+7(495)545-42-59", 
    "email": "sales@mif-mebel.ru",
    "adress": "г. Москва ул. Автозаводская 23, стр. 82",
    "info":`С 2008 года нами было полностью освоено производство многооборотной металической тары для транспортировки кузовных элементов автомобилей и их различных узлов. По настоящее время мы выпустили более двадцати тысяч единиц подобной тары.
    Наша тара может оснащаться различными пластиковыми и деревянными элементами, обработанными с помощью 3D-технологий, а также тканевыми вставками. Специально для Вас мы предлагаем спектр услуг: порошковая окраска металлоконструкций (широкая цветовая гамма), гибка круглых и профильных труб, гибка листового металла, резка, холодная штамповка изделий из металла, 3D-фрезеровка, пошив чехлов и тентов и многое другое. Применение новейших технологий и современного оборудования позволило нам добиться высокого качества продукции."
    `
  }, 
  {"o_id": "1", 
    "name": `ООО "ПК" ТИСО"`, 
    "group": "Поставщик", 
    "spec": "Металлоконтейнеры", 
    "country": "Россия", 
    "site": "https://pk-tiso.ru/", 
    "phone": "+7(812) 336-90-95",
    "adress": "194044 г. Санкт-Петербург, ул. Боткинская 15, корп. 1", 
    "email": "info@pk-tiso.ru"
  }, 
  {"o_id": "2", 
    "name": `Та-Пласт`, 
    "group": "Поставщик", 
    "spec": "Уп.материалы", 
    "country": "Россия", 
    "site": "", 
    "phone": "7 982 422 22 60", 
    "adress": "Казань", 
    "email": "utkuzov.a@gmail.com"
  }, 
  
  ]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fname: '',
      fgroup: '', 
      fcountry: '', 
      fspec: [],
      data: data
    };
    this.handler = this.handler.bind(this)
    this.onClick = this.onClick.bind(this)
  }


  handler(name, group, country, spec) {
    this.setState({
      fname: name,
      fcountry: country, 
      fgroup: group, 
      fspec: spec 
    })
    

  }

  render(){
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
          <Route exact path="/orgs">
            <table>
              <tr>
            <td className='filters'><Filters data={data} handler={this.handler}/></td>    
            <td className='org_table'><Orgs data={this.state.data}/></td>
            </tr>
            </table>
          </Route>
          <Route exact path="/orgs/link/:o_id" component={ Org }/>
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
