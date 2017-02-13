import React from 'react';
import { Link } from 'react-router';

import LoadingBar from 'react-redux-loading-bar'

const navData = [
  {
    key: 'home',
    value: '首页'
  },
  {
    key: 'blog',
    value: '博客'
  },
  {
    key: 'about',
    value: '关于'
  },
  {
    key: 'contact',
    value: '联系我们'
  }
];

export default class App extends React.Component {

  isActive(pathname, key) {
    let isActiveStr = '';
    if (pathname === '/') {
      isActiveStr = key === 'home' ? ' is-active' : '';
    } else if (pathname.indexOf('post') !== -1) {
      isActiveStr = key==='blog'?' is-active':'';
    } else {
      isActiveStr = pathname.indexOf(key)!==-1 ? ' is-active' : ''
    }
    return isActiveStr;
  }

  render() {
    const { children, app, actions, location } = this.props;
    const { pathname } = location;
    const { currentRoute } = app;
    console.log(this.props);
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <LoadingBar style={{zIndex: 999, position: 'fixed', top: 0}}/>
        <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
            <div className="mdl-layout__header-row portfolio-logo-row">
                <span className="mdl-layout__title">
                    <div className="portfolio-logo"></div>
                    <span className="mdl-layout__title">Simple portfolio website</span>
                </span>
            </div>
            <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
                <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                  {
                    navData.map((nav, i)=>{
                      const { key, value } = nav;
                      return <a key={i} href={`#/${key==='home'?'':key}`} className={`mdl-navigation__link${this.isActive(pathname, key)}`} >{nav.value}</a>
                    })
                  }
                </nav>
            </div>
        </header>
        <div className="mdl-layout__drawer mdl-layout--small-screen-only">
            <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
              {
                navData.map((nav, i)=><a key={i} onClick={()=>this.onRouteChange(nav.key)} className={`mdl-navigation__link${currentRoute===nav.key?' is-active': ''}`} >{nav.value}</a>)
              }
            </nav>
        </div>
        <main className="mdl-layout__content">
          {children}
          <footer className="mdl-mini-footer">
              <div className="mdl-mini-footer__left-section">
                  <div className="mdl-logo">Simple portfolio website</div>
              </div>
              <div className="mdl-mini-footer__right-section">
                  <ul className="mdl-mini-footer__link-list">
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Privacy & Terms</a></li>
                  </ul>
              </div>
          </footer>
        </main>
      </div>
    )
  }
}
