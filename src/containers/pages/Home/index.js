import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionTitle,
  SectionJumbotron,
  SectionAboutClient,
  SectionComodityTrading,
  SectionReport,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Eleks Website | IXM";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
        </Header>
        <Main>
          <SectionTitle />
          <SectionJumbotron />
          <SectionAboutClient />
          <SectionComodityTrading />
          <SectionReport />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
