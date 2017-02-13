
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class BlogView extends Component {

  render() {

    return (
      <div className="mdl-grid portfolio-max-width">
          <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
              <div className="mdl-card__media">
                  <img className="article-image" src=" images/example-work01.jpg" alt="" />
              </div>
              <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">Blog template</h2>
              </div>
              <div className="mdl-card__supporting-text">
                  Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                  <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" to="post/post1">Read more</Link>
              </div>
          </div>
      </div>
    );
  }


}

export default BlogView;
