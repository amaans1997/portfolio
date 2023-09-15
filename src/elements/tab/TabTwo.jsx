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
                          <a style={{fontWeight: "bold" }}>
                            Frontend Developer (React Js / Next Js){" "}
                            <span>
                              {" "}
                              - Convert figma into a nice and resposive UI
                            </span>
                          </a>
                          <div
                            style={{ display: "flex" , flexDirection : "row" }}
                          >
                            <div style={{  marginRight : 5  , width : 200 }}>
                              Tech Stack -   
                            </div>
                            <span>   React Js , Next Js , Redux , Redux thunk , React hooks , Typescript , Data Visualization , Tailwind Css , Material UI , Mapbox , React Highcharts & d3.js </span>
                          </div>
                        </li>
                        <li>
                          <a style={{fontWeight: "bold" }}>
                            Full Stack Developer
                            <span>
                              {" "}
                              - Create backend architecture , database and
                              integrating the API
                            </span>
                          </a>
                          <div
                            style={{ display: "flex" , flexDirection : "row" }}
                          >
                            <div style={{  marginRight : 5 }}>
                              Tech Stack -   
                            </div>
                            <span>   Node Js , Laravel , PHP , Twilio integration , Azure </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                 

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a style={{fontWeight: "bold" }}>
                            Software Engineer<span> - Geekyants</span>
                          </a>{" "}
                          2019 - 2019
                        </li>
                        <li>
                          <a style={{fontWeight: "bold" }}>
                            SDE-II<span> - Mobile Premier League</span>
                          </a>{" "}
                          2019 - 2021
                        </li>
                        <li>
                          <a style={{fontWeight: "bold" }}>
                            Senior Front-end Developer <span> - Urgentem </span>
                          </a>{" "}
                          2020 - 2021
                        </li>
                        <li>
                          <a style={{fontWeight: "bold" }}>
                            Full-stack Developer
                            <span> - The Kraft Heinz Company </span>
                          </a>{" "}
                          2021 - 2022
                        </li>
                        <li>
                          <a style={{fontWeight: "bold" }}>
                            Full-stack Engineer<span> - Allegis - Cruise </span>
                          </a>{" "}
                          2022 - 2023
                        </li>
                        <li>
                          <a style={{fontWeight: "bold" }}>
                            Senior Front-end Developer
                            <span> - Lariat Data </span>
                          </a>{" "}
                          2023 - 2023
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a style={{fontWeight: "bold" }}>
                          Bachelor's Degree(CSE)
                            <span> LDRP Institute of Technology and Research, Ahmedabad, India</span>
                          </a>{" "}
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
