import React from "react";

class Detail extends React.Component {

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }


  render() {
    const { location } = this.props;
    console.log(location.state);

    return <span>hello{location.state.genre}</span>
    // if (location.state) {
    //   return (
    //     <span>
    //       {location.state.title}
    //     </span>
    //   );
    // } else {
    //   return <h1>null</h1>;
    // }
  }
}


export default Detail;