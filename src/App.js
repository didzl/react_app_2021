import React from "react";

function Food({name, image}) {//food.fav와 같다
  return <div><h1>I like {name}</h1>
      <img src={image} />
  </div>
}

const foodILike = [
  {
  name: "kimchi",
  image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png"
  },
  {
    name : "ramen",
    image: "https://resources.matcha-jp.com/resize/720x2000/2018/04/05-51698.jpeg"
  },
  {
    name:"samgiopsal",
    image:"https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  },
  {
    name:"chukumi",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2019/03/12/d794c05c68d7abf0a763bf48157beb6a1.jpg"
  }]

function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      {foodILike.map(dish => 
      <Food name ={dish.name} image={dish.image} />)}
    </div>
  );
}

export default App;
