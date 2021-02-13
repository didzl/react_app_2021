import React from "react";
import { HashRouter, Route, Router } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="movie/:id" component={Detail} />
  </HashRouter>
  
  );
}

export default App;

// import PropTypes from "prop-types";

// function Food({name, image, rating}) {//food.fav와 같다
//   return <div><h1>I like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={image} alt={name} />
//   </div>
// }

// const foodILike = [
//   {
//     id:1,
//     name: "kimchi",
//     image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
//     rating:5.0
//   },
//   {
//     id:2,
//     name : "ramen",
//     image: "https://resources.matcha-jp.com/resize/720x2000/2018/04/05-51698.jpeg",
//     rating:4.2
//   },
//   {
//     id:3,
//     name:"samgiopsal",
//     image:"https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
//     rating:3.6
//   },
//   {
//     id:4,
//     name:"chukumi",
//     image:"https://recipe1.ezmember.co.kr/cache/recipe/2019/03/12/d794c05c68d7abf0a763bf48157beb6a1.jpg",
//     rating:4.6
//   }];

//   function renderFood(dish) {
//     console.log(dish);
//     return <Food key ={dish.id}name={dish.name} picture = {dish.image} />
//   }

// // function App() {
// //   return (
// //     <div>
// //     {foodILike.map(renderFood)}
// //     </div>
// //     );
// // }

// Food.propTypes = {
//   name : PropTypes.string.isRequired,
//   picture : PropTypes.string.isRequired,
//   rating : PropTypes.number.isRequired
// };

// function App() {
//   return(
//     <div>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating ={dish.rating} />
//       ))}
//     </div>
//   );
// }

  // state = {
  //   count: 0
  // }
  // add = () => {
  //   this.setState(current =>({count: current.count +1}));//마이너스와 같은 형식
  // };
  // minus = () => {
  //   this.setState({count:this.state.count-1});//스테이트를 바꾸려하면 직접 입력이 아닌 스테이트가 렌더를 다시 호출하게 만들어야 한다.=>use setState
  // };
  // render(){
  //   return (
  //     <div>
  //     <h1>The number is : {this.state.count}</h1>
  //     <button onClick={this.add }>Add</button>
  //     <button onClick={this.minus}>Minus</button>
  //     </div>
  //     )
  // }
  

  // componentDidMount(){
  //   setTimeout(() =>{
  //     this.setState({isLoading: false});
  //   }, 6000);
  // }
  