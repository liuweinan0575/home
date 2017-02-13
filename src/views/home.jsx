
import React, { Component, PropTypes } from 'react';
import { Card } from '../components';

const softIntro = [
  {
    img: 'images/example-work01.jpg',
    title: '网站开发',
    text: '响应式或非响应式'
  },
  {
    img: 'images/example-work02.jpg',
    title: '手机app',
    text: '响应式或非响应式'
  },
  {
    img: 'images/example-work03.jpg',
    title: '高效办公',
    text: '响应式或非响应式'
  },
  {
    img: 'images/example-work04.jpg',
    title: '电脑自动化',
    text: '响应式或非响应式'
  },
  {
    img: 'images/example-work05.jpg',
    title: '科研助手',
    text: '响应式或非响应式'
  },
  {
    img: 'images/example-work06.jpg',
    title: '为了对齐',
    text: '响应式或非响应式'
  }
];

const consultIntro = [
  {
    img: 'images/example-work01.jpg',
    title: '网络营销',
    text: '响应式或非响应式'
  },
  {
    img: 'images/example-work02.jpg',
    title: '管理咨询',
    text: '响应式或非响应式'
  },
  {
    img: 'images/example-work03.jpg',
    title: '为了对齐',
    text: '响应式或非响应式'
  },
  {
    img: 'images/example-work03.jpg',
    title: '为了对齐',
    text: '响应式或非响应式'
  },
  {
    img: 'images/example-work03.jpg',
    title: '为了对齐',
    text: '响应式或非响应式'
  },
  {
    img: 'images/example-work03.jpg',
    title: '为了对齐',
    text: '响应式或非响应式'
  },
];

class HomeView extends Component {

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        console.log('dddd', anchorElement);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
  }

  render() {

    return (
      <div>
        <a name="top"></a>
        <div className="android-be-together-section mdl-typography--text-center">
          <div className="logo-font android-slogan">be together. not the same.</div>
          <div className="logo-font android-sub-slogan">welcome to android... be yourself. do your thing. see what's going on.</div>
          <div className="logo-font android-create-character">
            <a href=""><img src="images/andy.png" /> create your android character</a>
          </div>

          <a onClick={()=>this.scrollToAnchor('screens')}>
            <button className="android-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect">
              <i className="material-icons">expand_more</i>
            </button>
          </a>
        </div>
        <div className="mdl-grid">
          <a id="screens"></a>
          <div className="portfolio-max-width">
            <div className="android-section-title mdl-typography--display-1-color-contrast">软件开发</div>
            {
              softIntro.map((soft, i) => {
                const { img, title, text } = soft;
                return <Card key={i} img={img} title={title} text={text} >
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#/contact">联系我们</a>
                  </Card>
              })
            }
          </div>
        </div>
        <div className="mdl-grid" style={{backgroundColor: '#f3f3f3'}}>
          <div className="portfolio-max-width">
            <div className="android-section-title mdl-typography--display-1-color-contrast">信息咨询</div>
            {
              consultIntro.map((soft, i) => {
                const { img, title, text } = soft;
                return <Card key={i} img={img} title={title} text={text} >
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#/contact">联系我们</a>
                  </Card>
              })
            }
          </div>
        </div>
      </div>
    );
  }


}

export default HomeView;
