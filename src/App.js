import React, { useState } from "react";

const App = () => {
  const [fruit, setFruit] = useState([]);
  const [vegetable, setVegetable] = useState([]);
  const [todoList, setTodoList] = useState([
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ]);

  const handleClickTodoList = (data) => {
    //กรองข้อมูลตามชื่อที่เลือก
    const newTodoListType = filterNameTodoList(todoList, data);
    //เช็คประเภทว่าเป็นผลไม้ หรือ ผัก แล้วนำไปใส่ที่ชื่อตามประเภท
    checkTypePushToColumn(newTodoListType, data);
    //ลบรายการตามที่เลือกออก
    setTodoList(deleteTodoList(todoList, data));
    //หน่วงเวลาเพื่อให้ค่าที่เลือกไว้กลับคืนที่รายการ
    restoreTodoList(data);
  };

  const filterNameTodoList = (arr, data) => {
    return arr.filter((item) => item.name === data.name);
  };

  const checkTypePushToColumn = (arr, data) => {
    if (data.type === "Fruit") {
      setFruit([...fruit, ...arr]);
    } else if (data.type === "Vegetable") {
      setVegetable([...vegetable, ...arr]);
    }
  };

  const deleteTodoList = (arr, data) => {
    return arr.filter((item) => item.name !== data.name);
  };

  const restoreTodoList = (data) => {
    setTimeout(function () {
      //ลบรายการที่เลือกตามประเภทต่างๆ
      setFruit((fruit) => [...deleteTodoList(fruit, data)]);
      setVegetable((vegetable) => [...deleteTodoList(vegetable, data)]);
      //คืนค่าที่เคยเลือกไว้กลับที่รายการให้เลือก
      setTodoList((todoList) => [...todoList, data]);
    }, 5000);
  };

  return (
    <div className="container">
      <div className="container-list">
        {todoList.map((item, index) => {
          return (
            <div
              className="to-do-list"
              key={index}
              onClick={() => handleClickTodoList(item)}
            >
              {item.name}
            </div>
          );
        })}
      </div>

      <div className="container-type">
        <div className="type-header">Fruit</div>
        {fruit.map((item, index) => {
          return (
            <div className="type-item" key={index}>
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="container-type">
        <div className="type-header">Vegetable</div>
        {vegetable.map((item, index) => {
          return (
            <div className="type-item" key={index}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
