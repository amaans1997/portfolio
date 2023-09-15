import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <div style={{fontWeight: "bold" }}>
                            Frontend Developer (React Js / Next Js){" "}
                            <span>
                            </span>
                          </div>
                          <div
                            style={{ display: "flex" , flexDirection : "row" }}
                          >
                            <div style={{  marginRight : 5  , width : 200 }}>
                              Tech Stack -   
                            </div>
                            <span style={{fontWeight: "normal" }}>   React Js , Next Js , Redux , Redux thunk , React hooks , Typescript , Data Visualization , Tailwind Css , Material UI , Mapbox , React Highcharts & d3.js </span>
                          </div>
                        </li>
                        <li>
                          <div style={{fontWeight: "bold" }}>
                            Full Stack Developer
                            <span >
                         
                            </span>
                          </div>
                          <div
                            style={{ display: "flex" , flexDirection : "row" }}
                          >
                            <div style={{  marginRight : 5 }}>
                              Tech Stack -   
                            </div>
                            <span style={{fontWeight: "normal" }}>   Node Js , Laravel , PHP , Twilio integration , Azure </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                 

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <div style={{fontWeight: "bold" }}>
                            Software Engineer<span style={{fontWeight: "normal" }}> - Geekyants</span>
                          </div>{" "}
                          2019 - 2019
                        </li>
                        <li>
                          <div style={{fontWeight: "bold" }}>
                            SDE-II<span style={{fontWeight: "normal" }}> - Mobile Premier League</span>
                          </div>{" "}
                          2019 - 2021
                        </li>
                        <li>
                          <div style={{fontWeight: "bold" }}>
                            Senior Front-end Developer <span style={{fontWeight: "normal" }}> - Urgentem </span>
                          </div>{" "}
                          2020 - 2021
                        </li>
                        <li>
                          <div style={{fontWeight: "bold" }}>
                            Full-stack Developer
                            <span style={{fontWeight: "normal" }}> - The Kraft Heinz Company </span>
                          </div>{" "}
                          2021 - 2022
                        </li>
                        <li>
                          <div style={{fontWeight: "bold" }}>
                            Full-stack Engineer<span style={{fontWeight: "normal" }}> - Allegis - Cruise </span>
                          </div>{" "}
                          2022 - 2023
                        </li>
                        <li>
                          <div style={{fontWeight: "bold" }}>
                            Senior Front-end Developer
                            <span style={{fontWeight: "normal" }}> - Lariat Data </span>
                          </div>{" "}
                          2023 - 2023
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <div style={{fontWeight: "bold" }}>
                          Bachelor's Degree(CSE) - 
                            <span style={{fontWeight: "normal" }}> LDRP Institute of Technology and Research, Ahmedabad, India</span>
                          </div>{" "}
                          2015 - 2019
                        </li>
                       
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
