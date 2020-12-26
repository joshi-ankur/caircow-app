import React, { Component } from "react";
import Navigation from "./navigation";
import Header from "./header";
import Features from "./features";
import About from "./about";
import Services from "./services";
import Gallery from "./gallery";
import Testimonials from "./testimonials";
import Team from "./Team";
import Contact from "./contact";
import $ from "jquery";
import Login from "./login";
import Loginhooks from "./Loginhooks";
import Flogin from "./Flogin";
import Linklogin from "./Linklogin";
import Grid from "@material-ui/core/Grid";
export class App extends Component {
  state = {
    resumeData: {},
  };
  getResumeData() {
    $.ajax({
      url: "/data.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            Logo
          </Grid>
          <Grid item xs={6}>
            <h1>Welcome ..</h1>
            <h3>Hire The Best Freelancers Online For Any Local Job</h3>
          </Grid>
          {/* <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Login />
            </Paper>
          </Grid> */}
        </Grid>
        {/* <Navigation />
        <Header data={this.state.resumeData.Header}/> */}
        <h3>----------- or -----------</h3>
        <Loginhooks></Loginhooks>
        <Flogin></Flogin>
        <Linklogin></Linklogin>
        <h3>
          New To Kierkou ?{" "}
          <a href="#" style={{ color: "#f06a3a" }}>
            Sign Up
          </a>
        </h3>
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
