import React from "react";
import  ReactDOM  from "react-dom";

const AppHeader = () => {
  return(
    <h1>React</h1>
  );
}

const Article = () => {
  return(
  <p>React — это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов. В отличие от других библиотек JavaScript, предоставляющих полноценную платформу приложений, React ориентируется исключительно на создание представлений приложений через инкапсулированные единицы (называются компонентами), которые сохраняют состояние и генерируют элементы пользовательского интерфейса.</p>
  );
}

const ListTittle = () => {
  return(
  <h3>Почему веб-разработчики выбирают React?</h3>
  );
}

const List = () => {
  return(
    <ul>
      <li>Декларативный подход к описанию интерфейсов</li>
      <li>Чёткий синтаксис</li>
      <li>Правильная кривая обучения</li>
      <li>Особенности механизма привязки данных</li>
      <li>Функциональный подход к разработке</li>
    </ul>
  );
}

const AppHead = () => {
  return(
  <div>
    <AppHeader/>
    <Article/>
  </div>
  );
}

const AppFoot = () => {
  return(
  <div>
    <ListTittle/>
    <List/>
  </div>
  );
}

ReactDOM.render(<AppHead/>, document.getElementById("ReactApp1"));
ReactDOM.render(<AppFoot/>, document.getElementById("ReactApp2"));
