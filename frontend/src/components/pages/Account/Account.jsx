import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getUserJobsSaga } from "../../../redux/action";
import Statistic from "./StatisticCompanents/Statistic";

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <h2>Личный кабинет</h2>
        </div>
        <div>
          <Link to="/crm">Сохраненные вакансии</Link>
          <br></br>
          <b> Первый график</b>
          <br />
          <Statistic />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userJobs: state.userJobs,
  email: state.email
});

const mapDispatchToProps = {
  getUserJobsSaga
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Account)
);
