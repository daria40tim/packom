import React, { Component } from 'react';
import { Link } from 'react-router';

let data = [
    {"o_id": "0", 
      "name": "ЗАО МИФ Мебель", 
      "group":"Поставщик", 
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

class Org extends Component {
  render() {
    return(
        <div>
        <h4 id="name" className="text-center">{data[this.props.match.params.o_id].name}</h4>
        <h5>Общие данные</h5>
        <div className="wrapper">
        <table className="table w-50">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td scope="col">Название</td>
              <td scope="col">{data[this.props.match.params.o_id].name}</td>
            </tr>
            <tr>
              <td scope="col">Группа</td>
              <td scope="col">Поставщик</td>
            </tr>
            <tr>
              <td scope="col">Страна</td>
              <td scope="col">{data[this.props.match.params.o_id].country}</td>
            </tr>
            <tr>
              <td scope="col">Адрес</td>
              <td scope="col">{data[this.props.match.params.o_id].adress}</td>
            </tr>
            <tr>
              <td scope="col">Телефон</td>
              <td scope="col">{data[this.props.match.params.o_id].phone}</td>
            </tr>
            <tr>
              <td scope="col">Email</td>
              <td scope="col">{data[this.props.match.params.o_id].email}</td>
            </tr>
            <tr>
              <td scope="col">Сайт</td>
              <td scope="col">{data[this.props.match.params.o_id].site}</td>
            </tr>
            <tr>
              <td scope="col">Специализация</td>
              <td scope="col">{data[this.props.match.params.o_id].spec}</td>
            </tr>
          </tbody>
        </table>
        </div>
          <h5 id="name" className="text-justify">Документация</h5>
</div>
)
  }
}

export default Org;