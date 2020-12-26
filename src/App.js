import React, { Component } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Features from "./components/features";
import About from "./components/about";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Team from "./components/Team";
import Contact from "./components/contact";
import JsonData from "./data/data.json";
import Login from "./components/login";
import Loginhooks from "./components/Loginhooks";
import Flogin from "./components/Flogin";
import Linklogin from "./components/Linklogin";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export class App extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            Logo
          </Grid>
          <Grid item xs={6}>
            <h1>Welcome ..</h1>
            <h3>Hire The Best Freelancers Online For Any Local Job</h3>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Login />
              <h3 style={{textAlign: "center"}}>-------------------------------------- or --------------------------------------</h3>
              <Loginhooks></Loginhooks>
              <Flogin></Flogin>
              <Linklogin></Linklogin>
              <h3 style={{textAlign: "center"}}>
                New To Kierkou ?{" "}
                <a href="#" style={{ color: "#f06a3a" }}>
                  Sign Up
                </a>
              </h3>
            </Paper>
          </Grid>
        </Grid>
        {/* <Navigation />
        <Header data={this.state.resumeData.Header}/> */}
        {/* <Features data={this.state.resumeData.Features}/>
        <About  data={this.state.resumeData.About}/>
        <Services  data={this.state.resumeData.Services}/>
        <Gallery />
        <Testimonials  data={this.state.resumeData.Testimonials}/>
        <Team  data={this.state.resumeData.Team}/>
        <Contact  data={this.state.resumeData.Contact}/> */}
      </div>
    );
  }
}

export default App;
