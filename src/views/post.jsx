
import React, { Component, PropTypes } from 'react';

class PostView extends Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.asyncAddName();
    console.log('actions', actions);
  }

  render() {

    return (
      <div className="mdl-grid portfolio-max-width">
          <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
              <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">Blog template</h2>
              </div>
              <div className="mdl-card__media">
                  <img className="article-image" src=" images/portfolio-example-01.jpg" alt="" />
              </div>
              <div className="mdl-card__supporting-text">
                  <strong>Includes</strong>
                  <span>Design, UX and Frontend Development</span>
              </div>
              <div className="mdl-grid portfolio-copy">
                  <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Introduction</h3>
                  <div className="mdl-cell mdl-cell--6-col mdl-card__supporting-text no-padding">
                      <p>
                          Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.
                      </p>
                  </div>
                  <div className="mdl-cell mdl-cell--6-col">
                      <img className="article-image" src=" images/portfolio-example-02.jpg" alt="" />
                  </div>
                  <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Initial Ideas</h3>
                  <div className="mdl-cell mdl-cell--6-col">
                      <img className="article-image" src=" images/portfolio-example-03.jpg" alt="" />
                  </div>
                  <div className="mdl-cell mdl-cell--6-col mdl-card__supporting-text no-padding ">
                      <p>
                          Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.
                      </p>
                  </div>
                  <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Final Concept</h3>
                  <div className="mdl-cell mdl-cell--6-col">
                      <img className="article-image" src=" images/portfolio-example-05.jpg" alt="" />
                  </div>
                  <div className="mdl-cell mdl-cell--6-col">
                      <img className="article-image" src=" images/portfolio-example-06.jpg" alt="" />
                  </div>
                  <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                      <p>
                          Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.
                      </p>
                  </div>
              </div>
              <div className="mdl-card__actions mdl-card--border">
                  <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#/blog">返回</a>
                  <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#/blog">分享</a>
              </div>
          </div>
      </div>
    );
  }


}

export default PostView;
