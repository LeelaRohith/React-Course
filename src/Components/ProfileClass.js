import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "Dummy data",
      count: 0,
      count2: 1,
    };
    console.log("Child Constructor called " + this.props.name);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/LeelaRohith");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Child componentdidmount (API Called) " + this.props.name);
  }
  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    console.log("Child render called " + this.props.name);
    return (
      <div>
        <h1>Profile class component</h1>
        <h1>{this.state?.userInfo?.name}</h1>
        <h2>Name : {this.props.name}</h2>
        <h3>Count : {this.state.count}</h3>
        <button
          onClick={() => {
            //Do not write this.state.count = something
            this.setState({ count: 1 });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}
export default Profile;
