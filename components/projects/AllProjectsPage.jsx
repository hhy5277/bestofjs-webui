var React = require('react');
var MainContent = require('../common/MainContent');
var ProjectGrid = require('../projects/ProjectGrid');
var ProjectList = require('../projects/ProjectList');

var AllProjectsPage = React.createClass({

  render: function() {
    var projects = this.props.allProjects;
    return (
      <MainContent>
        <h1>All projects ({ projects.length })</h1>
        <ProjectList
          projects = { projects }
          maxStars={ this.props.maxStars }
        />
    </MainContent>
    );
  }

});

module.exports = AllProjectsPage;
