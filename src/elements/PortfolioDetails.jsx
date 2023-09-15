import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { useHistory } from "react-router-dom";
import FooterTwo from "../component/footer/FooterTwo";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];

const project = [
  {
    role: "Senior Frontend Developer",
    company: "Lariat Data Inc.",
    website: "https://lariatdata.com",
    skills:
      "React , Redux , Redux Saga , Formik , Yup , D3.js , Lodash , Tailwind CSS , Data Visualization & Charting",
    description: (
      <ul>
        <li>
          Created highly performant dashboards and debugging tools to help track
          and improve data quality for data and ML pipelines.
        </li>
        <li>
          Redesigned the entire UI using new Figma designs that consist of
          graphs, charts, data tables, and various other components. Added unit
          tests, formatting, and lining tools.
        </li>
        <li>
          Architected re-usable patterns to use D3.js within the React
          framework.Performed componentization of data visualizations for use in
          other parts of the company.
        </li>
      </ul>
    ),
  },
  {
    role: "Full Stack Developer",
    company: "Allegis - Cruise",
    website: "https://getcruise.com",
    skills:
      "Next js , Redux , Nest Js, Jest , Puppeteer , Typescript , Twilio SDK and Testing",
    description: (
      <ul>
        <li>
          Automated the entire system with integrational testing and reduced the
          flakiness to less than 10% for the whole system.
        </li>
        <li>
          Wrote unit and end-to-end tests using Jest to ensure code quality and
          reliability in accordance with best practices.
        </li>
        <li>
          Added functionality to add multiple users to call thus creating a
          conference by integrating Twilio api . Fixed critical production bugs
          by investigating the issues with twilio voice calls and fixing the
          same.
        </li>
      </ul>
    ),
  },
  {
    role: "Full-stack Developer    ",
    company: "The Kraft Heinz Company",
    website: "https://www.kraftheinzcompany.com",
    skills:
      "Laravel , Livewire , Tailwind CSS , Azure , Laravel SPark , Stripe Js ,and AWS Textract",
    description: (
      <ul>
        <li>
          Created various MVPs using Livewire and Tailwind CSS. Also built a
          CI/CD pipeline for the automated testing and deployment of the PHP app
          using Azure.
        </li>
        <li>
          Integrated Laravel Spark and Stripe to build a billing solution in one
          of the MVPs. Integrated the subscription module and one-time payment
          module using the same.
        </li>
        <li>
          Managed the environment using AWS services and created different
          environments based on needs, including development, testing, staging,
          and live.
        </li>
        <li>
          Maintained the code quality by writing unit and browser test scripts
          using Laravel Dusk and maintained a good coding standard. Created a
          POC to extract text from receipts in PDF documents or images using
          Amazon Textract.{" "}
        </li>
      </ul>
    ),
  },
  {
    role: "Senior Frontend Developer",
    company: "Urgentem  (now acquired by ICE)",
    website:
      "https://www.ice.com/data-services/sustainable-finance-data/climate-data",
    skills:
      "React , Redux , Redux Thunk , Exress Js , Redux Form , React Highcharts, Lodash , Data Visualization & Charting",
    description: (
      <ul>
        <li>
          Built the climate and ESG risk platform from the ground up using React
          and Express.js. Implemented complex algorithms for inference and
          climate prediction models.
        </li>
        <li>
          Assisted with graph integration for visually appealing data using
          Highcharts. Worked on writing complex logic for calculations and
          statistics.
        </li>
        <li>
          Oversaw the launch process and fixed live production bugs in a limited
          timeframe. Optimized the components for maximum performance across
          various devices and browsers.
        </li>
      </ul>
    ),
  },
  {
    role: "Senior Frontend Developer",
    company: "Agewell Online",
    website: "-",
    projectUrl: "https://www.agewell.online",
    skills:
      "React , Redux , Twilio API , Stripe , React-Stripe , Laravel and MySQL",
    description: (
      <ul>
        <li>
          Build a twilio call conferencig system where people can have a dailiy
          checkin for old age relatives . In case if all the attempts for
          checkin are failed an emergency message / call will be delievred to
          the concerned people
        </li>
        <li>
          Integrated Stripe in React + Laravel app to build payment methods
          (Ideal and SEPA Direct Debit)
        </li>
        <li>
          Built twilio services for incoming as well as ougoing calls . Fixed
          bugs by connecting with the twilio customer support and finding out
          the root cause of issues with the integrated twilio call conferencing
          system
        </li>
      </ul>
    ),
  },
  {
    role: "Software Engineer",
    company: "Geekyants",
    website: "https://geekyants.com",
    skills:
      "React , Redux , Redux Thunk , Mapbox ,  React Full Calendar , Storybook , Tailwind CSS & Express Js  ",
    projectUrl: "https://simbex.geekydev.com",
    description: (
      <ul>
        <li>
          Assisted in building a large-scale web application for buying retail
          sports equipment that caters to 1,000+ concurrent users. Created
          extensive test coverage for all new features, reducing customer
          complaints by 10%.
        </li>
        <li>
          Integrated Twilio for one of the call center-based applications that
          manage incoming and outgoing calls along with other key
          functionalities.
        </li>
        <li>
          Architected re-usable patterns to use D3.js within the React
          framework.Performed componentization of data visualizations for use in
          other parts of the company.
        </li>
      </ul>
    ),
  },
];
class PortfolioDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.getPortfolioDetails = this.getPortfolioDetails.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  getPortfolioDetails = () => {
    const pathName = window.location.pathname;

    if (pathName) {
      const pathArray = pathName.split("/")[2];
      switch (pathArray) {
        case "sass-product":
          return 0;
        case "customer-portal":
          return 1;
        case "mvp-food-industry":
          return 2;
        case "emission-dashboard":
          return 3;
        case "elderly-app":
          return 4;
        case "training-tool":
          return 5;
        default:
          return 5;
      }
    }
  };

  render() {
    const index = this.getPortfolioDetails();
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Portfolio Details" />

        {/* Start Portfolio Details */}
        <div
          className="rn-portfolio-details ptb--120"
          style={{ background: "#191919" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner">
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <div
                            class="d-flex flex-row"
                            style={{ marginBottom: 12 }}
                          >
                            <div
                              class="font-weight-bold w-25"
                              style={{ marginRight: 12 }}
                            >
                              Role:{" "}
                            </div>
                            <div class="w-75"> {project[index]["role"]}</div>
                          </div>
                          <div
                            class="d-flex flex-row"
                            style={{ marginBottom: 12 }}
                          >
                            <div
                              class="font-weight-bold w-25"
                              style={{ marginRight: 12 }}
                            >
                              Company:{" "}
                            </div>
                            <div class="w-75"> {project[index]["company"]}</div>
                          </div>
                          <div
                            class="d-flex flex-row"
                            style={{ marginBottom: 12 }}
                          >
                            <div
                              class="font-weight-bold w-25"
                              style={{ marginRight: 12 }}
                            >
                              Company Website:{" "}
                            </div>
                            <a href={project[index]["website"]}>
                              {" "}
                              {project[index]["website"]}
                            </a>
                          </div>
                          <div
                            class="d-flex flex-row"
                            style={{ marginBottom: 12 }}
                          >
                            <div
                              class="font-weight-bold w-25"
                              style={{ marginRight: 12 }}
                            >
                              Tech:{" "}
                            </div>
                            <div class="w-75"> {project[index]["skills"]}</div>
                          </div>
                          {project[index]["projectUrl"] && <div
                            class="d-flex flex-row"
                            style={{ marginBottom: 12 }}
                          >
                            <div
                              class="font-weight-bold w-25"
                              style={{ marginRight: 12 }}
                            >
                              Project
                            </div>
                            <a class="w-75" href={project[index]["projectUrl"]} style={{color:'#823ffc'}}>
                              {" "}
                              {project[index]["projectUrl"]}
                            </a>
                          </div>}
                          <div
                            class="d-flex flex-row"
                            style={{ marginBottom: 12 }}
                          >
                            <div
                              class="font-weight-bold w-25"
                              style={{ marginRight: 12 }}
                            >
                              Description :{" "}
                            </div>
                            <div class="w-75">
                              {project[index]["description"]}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}

        <FooterTwo />
      </React.Fragment>
    );
  }
}
export default PortfolioDetails;
