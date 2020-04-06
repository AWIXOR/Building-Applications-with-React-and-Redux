import React from "react";
import { connect } from "react-redux";

import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;

    if (courses.length === 0) {
      loadCourses().catch((err) => {
        alert("Loading courses Failed" + err);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch((err) => {
        alert("Loading authors Failed" + err);
      });
    }
  }
  render() {
    return (
      <div>
        <h1>Manage Courses</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);