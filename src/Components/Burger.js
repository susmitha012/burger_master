import React, { Component } from "react";

export default class Burger extends Component {
  state = {
    cutlet: 0,
    tomato: 0,
    mayo: 0,
    onion: 0,
    tomato1: 0,
    cucumber: 0,
    cheese: 0,
    salad: 0,
    bun: 0,
  };

  constructor() {
    super();
    this.state = {
      count: 0,
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0,
      count6: 0,
      count7: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.increment1 = this.increment1.bind(this);
    this.decrement1 = this.decrement1.bind(this);

    this.increment2 = this.increment2.bind(this);
    this.decrement2 = this.decrement2.bind(this);

    this.increment3 = this.increment3.bind(this);
    this.decrement3 = this.decrement3.bind(this);

    this.increment4 = this.increment4.bind(this);
    this.decrement4 = this.decrement4.bind(this);

    this.increment5 = this.increment5.bind(this);
    this.decrement5 = this.decrement5.bind(this);

    this.increment6 = this.increment6.bind(this);
    this.decrement6 = this.decrement6.bind(this);

    this.increment7 = this.increment7.bind(this);
    this.decrement7 = this.decrement7.bind(this);
  }

  addRemoveIngredient = (action, ingredient) => {
    let { cutlet, tomato, cheese, bun, mayo, onion, tomato1, cucumber, salad } =
      this.state;

    let stateValue;
    switch (ingredient) {
      case "cutlet": {
        stateValue = cutlet;
        break;
      }
      case "tomato": {
        stateValue = tomato;
        break;
      }
      case "cheese": {
        stateValue = cheese;
        break;
      }
      case "bun": {
        stateValue = bun;
        break;
      }

      case "mayo": {
        stateValue = mayo;
        break;
      }
      case "onion": {
        stateValue = onion;
        break;
      }
      case "tomato1": {
        stateValue = tomato1;
        break;
      }
      case "cucumber": {
        stateValue = cucumber;
        break;
      }

      case "salad": {
        stateValue = salad;
        break;
      }

      default:
        break;
    }
    if (action === "add") {
      stateValue = stateValue + 1;
    } else {
      stateValue = stateValue - 1;
    }
    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0,
    });
  };

  burgerContent = () => {
    let { cutlet, tomato, cheese, bun, mayo, onion, cucumber, salad } =
      this.state;
    let burger = [];

    // outputting the bun
    for (let i = 0; i < bun; i++) {
      burger.push(<div key={burger.length} className="bunSide"></div>);
    }

    // outputting the cutlet
    for (let i = 0; i < cutlet; i++) {
      burger.push(<div key={burger.length} className="lettuseSide"></div>);
    }

    // outputting the Mayo
    for (let i = 0; i < mayo; i++) {
      burger.push(<div key={burger.length} className="mayoSide"></div>);
    }

    // outputting the Onion
    for (let i = 0; i < onion; i++) {
      burger.push(<div key={burger.length} className="onionSide"></div>);
    }

    // outputting the tomato
    for (let i = 0; i < tomato; i++) {
      burger.push(<div key={burger.length} className="tomatoSide"></div>);
    }

    // outputting the cucumber
    for (let i = 0; i < cucumber; i++) {
      burger.push(<div key={burger.length} className="cucumberSide"></div>);
    }

    // outputting the cheese
    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }

    // outputting the Salad
    for (let i = 0; i < salad; i++) {
      burger.push(<div key={burger.length} className="saladSide"></div>);
    }

    if (burger.length === 0)
      burger.push(<p key="0">Please start adding ingredients!</p>);
    return burger;
  };

  increment() {
    this.setState((previousValue) => ({
      count: previousValue.count + 1,
    }));
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState((previousValue) => ({
        count: previousValue.count - 1,
      }));
    } else {
      this.setState(() => ({
        count: 0,
      }));
      alert("no item to delete");
    }
  }

  increment1() {
    this.setState((previousValue) => ({
      count1: previousValue.count1 + 1,
    }));
  }

  decrement1() {
    if (this.state.count1 > 0) {
      this.setState((previousValue) => ({
        count1: previousValue.count1 - 1,
      }));
    } else {
      this.setState(() => ({
        count1: 0,
      }));
      alert("no item to delete");
    }
  }

  increment2() {
    this.setState((previousValue) => ({
      count2: previousValue.count2 + 1,
    }));
  }

  decrement2() {
    if (this.state.count2 > 0) {
      this.setState((previousValue) => ({
        count2: previousValue.count2 - 1,
      }));
    } else {
      this.setState(() => ({
        count2: 0,
      }));
      alert("no item to delete");
    }
  }

  increment3() {
    this.setState((previousValue) => ({
      count3: previousValue.count3 + 1,
    }));
  }

  decrement3() {
    if (this.state.count3 > 0) {
      this.setState((previousValue) => ({
        count3: previousValue.count3 - 1,
      }));
    } else {
      this.setState(() => ({
        count3: 0,
      }));
      alert("no item to delete");
    }
  }

  increment4() {
    this.setState((previousValue) => ({
      count4: previousValue.count4 + 1,
    }));
  }

  decrement4() {
    if (this.state.count4 > 0) {
      this.setState((previousValue) => ({
        count4: previousValue.count4 - 1,
      }));
    } else {
      this.setState(() => ({
        count4: 0,
      }));
      alert("no item to delete");
    }
  }

  increment5() {
    this.setState((previousValue) => ({
      count5: previousValue.count5 + 1,
    }));
  }

  decrement5() {
    if (this.state.count5 > 0) {
      this.setState((previousValue) => ({
        count5: previousValue.count5 - 1,
      }));
    } else {
      this.setState(() => ({
        count5: 0,
      }));
      alert("no item to delete");
    }
  }

  increment6() {
    this.setState((previousValue) => ({
      count6: previousValue.count6 + 1,
    }));
  }

  decrement6() {
    if (this.state.count6 > 0) {
      this.setState((previousValue) => ({
        count6: previousValue.count6 - 1,
      }));
    } else {
      this.setState(() => ({
        count6: 0,
      }));
      alert("no item to delete");
    }
  }

  increment7() {
    this.setState((previousValue) => ({
      count7: previousValue.count7 + 1,
    }));
  }

  decrement7() {
    if (this.state.count7 > 0) {
      this.setState((previousValue) => ({
        count7: previousValue.count7 - 1,
      }));
    } else {
      this.setState(() => ({
        count7: 0,
      }));
      alert("no item to delete");
    }
  }


  render() {
    return (
      <>
        <div className="container">
          <div className="burgerIngredients">
            <div className="topSide"></div>
            {this.burgerContent()}
            <div className="bottomSide"></div>
          </div>
        </div>

        <div className="container" style={{ marginTop: "50px" }}>
          <div className="burger_div ">
            <div className=" text-center burger_ingradient">
              <img src="/images/cutlet.png" alt="" />
              <p>Cutlet</p>
              <div className="d-inline-block">
                <button
                  onClick={(e) => {
                    this.addRemoveIngredient("remove", "cutlet", e);
                    this.decrement(e);
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {this.state.count}
                </span>
                <button
                  onClick={(e) => {
                    this.addRemoveIngredient("add", "cutlet");
                    this.increment(e);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className=" text-center burger_ingradient">
              <img src="/images/mayo.png" alt="" />
              <p>Mayo</p>
              <div className="d-inline-block">
                <button
                  onClick={() => {
                    this.addRemoveIngredient("remove", "mayo");
                    this.decrement1();
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {this.state.count1}
                </span>
                <button
                  onClick={() => {
                    this.addRemoveIngredient("add", "mayo");
                    this.increment1();
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className=" text-center burger_ingradient">
              <img src="/images/onion.png" alt="" />
              <p>Onion</p>
              <div className="d-inline-block">
                <button
                  onClick={(e) => {
                    this.addRemoveIngredient("remove", "onion", e);
                    this.decrement2();
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {this.state.count2}
                </span>
                <button
                  onClick={(e) => {
                    this.addRemoveIngredient("add", "onion", e);
                    this.increment2();
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className=" text-center burger_ingradient">
              <img src="/images/tamato.png" alt="" />
              <p>Tomato</p>
              <div className="d-inline-block">
                <button
                  onClick={() => {this.addRemoveIngredient("remove", "tomato");this.decrement3()}}
                >
                  -
                </button>
                <span
                  style={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {this.state.count3}
                </span>
                <button
                  onClick={(e) => {this.addRemoveIngredient("add", "tomato",e);this.increment3(e)}}
                >
                  +
                </button>
              </div>
            </div>

            <div className=" text-center burger_ingradient">
              <img src="/images/cucumber.png" alt="" />
              <p>Cucumber</p>
              <div className="d-inline-block">
                <button
                  onClick={() => {this.addRemoveIngredient("remove", "cucumber");this.decrement4()}}
                >
                  -
                </button>
                <span
                  style={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {this.state.count4}
                </span>
                <button
                  onClick={(e) => {this.addRemoveIngredient("add", "cucumber",e);this.increment4(e)}}
                >
                  +
                </button>
              </div>
            </div>

            <div className=" text-center burger_ingradient">
              <img src="/images/cheese.png" alt="" />
              <p>Cheese</p>
              <div className="d-inline-block">
                <button
                  onClick={() => {this.addRemoveIngredient("remove", "cheese");this.decrement5()}}
                >
                  -
                </button>
                <span
                  style={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {this.state.count5}
                </span>
                <button
                  onClick={() => {this.addRemoveIngredient("add", "cheese");this.increment5()}}
                >
                  +
                </button>
              </div>
            </div>

            <div className=" text-center burger_ingradient">
              <img src="/images/salad.png" alt="" />
              <p>Salad</p>
              <div className="d-inline-block">
                <button
                  onClick={() => {this.addRemoveIngredient("remove", "salad");this.decrement6()}}
                >
                  -
                </button>
                <span
                  style={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {this.state.count6}
                </span>
                <button
                  onClick={() => {this.addRemoveIngredient("add", "salad");this.increment6()}}
                >
                  +
                </button>
              </div>
            </div>

            <div className=" text-center burger_ingradient">
              <img src="/images/bun.png" alt="" />
              <p>Bun</p>
              <div className="d-inline-block">
                <button
                  onClick={() => {this.addRemoveIngredient("remove", "bun");this.decrement7()}}
                >
                  -
                </button>
                <span
                  style={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {this.state.count7}
                </span>
                <button onClick={() => {this.addRemoveIngredient("add", "bun");this.increment7()}}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
