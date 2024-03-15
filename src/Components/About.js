import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { Component } from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>This is a about us page</h1>
//       <Outlet></Outlet>
//       <Profile name="Akshay Class" />
//     </div>
//   );
// };
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }
  componentDidMount() {
    console.log("Parent - componentdidmount");
  }
  render() {
    console.log("Parent render called");
    return (
      <div>
        <h1>This is a about us page</h1>
        <Outlet></Outlet>
        <Profile name="First child" />
        {/* <Profile name="Second child" /> */}
      </div>
    );
  }
}
export default About;
