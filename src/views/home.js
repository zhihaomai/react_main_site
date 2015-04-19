/* Home Page
 * ---------
 * Initial page of website
 */

var React = require('react');

var Header = require('./header');
var Footer = require('./footer');

var Home = React.createClass({
  
  componentWillMount: function() {
    !function(d,s,id) {
      var js, fjs=d.getElementsByTagName(s)[0];
      var p=/^http:/.test(d.location)?'http':'https';
      if(d.getElementById(id)) return;
      js=d.createElement(s);
      js.id=id;
      js.src=p+"://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js,fjs);
    }(document,"script","twitter-wjs");
  },

  componentWillUnmount: function() {
    !function(d,s,id) {
      var js = d.getElementById(id);
      if (js.parentNode) {
        js.parentNode.removeChild(js);
      }
    }(document,"script","twitter-wjs");
  },
  
  _renderBanner: function() {
    return (
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-1 bannerContainer">
          <img className="banner" src="../pictures/temp_banner.jpg"/>
          <div className="bannerText">
            <div style={{display: 'block'}} className="fa fa-play-circle"></div>
            <div>ZHI FILMS</div>
            <div className="bannerDesc">
              Internship Vlogs, GoPro Adventures, Life Moments
            </div>
            <a 
              className="pure-button bannerButton" 
              href="http://www.facebook.com/zhifilms">
              View Now
            </a>
          </div>
        </div>
      </div>
    );
  },

  _renderNews: function() {
    return (
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-2-3 container">
          <div className="contentContainer">
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=zfj9ky2F58qs.k7ZI_xWEzm8k" 
              width="100%" 
              height="100%"
              style={{border:0}}></iframe>
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-1-3 container">
          <a className="twitter-timeline" data-widget-id="589509406125006848"></a>
        </div>
      </div>
    );
  },

  _renderBlobs: function() {
    return (
      <div className="blob pure-g">
        <div className="blobContainer pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
          <i className="fa fa-plane fa-4x"></i><div className="blobTitle">TRAVEL</div> 
          <div className="blobDesc">
            We travel to feel alive, to become less ignorant about
            the world around us, to find a better self.
          </div>
        </div>
        <div className="blobContainer pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
          <i className="fa fa-camera-retro fa-4x"></i><div className="blobTitle">RECORD</div>          
          <div className="blobDesc">
            We record the memories we want to remember forever, to relive the
            greatest moments of our lives.
          </div>
        </div>
        <div className="blobContainer pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
          <i className="fa fa-wrench fa-4x"></i><div className="blobTitle">CREATE</div>
          <div className="blobDesc">
            We create to communicate and express ideas to others, to inspire
            activity and change.
          </div>
        </div>
        <div className="blobContainer pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
          <i className="fa fa-users fa-4x"></i><div className="blobTitle">UNITE</div>          
          <div className="blobDesc">
            We travel, record, and create to unite
            people with similar desires and experiences.
          </div>
        </div>        
      </div>
    );
  },

  render: function() {
    return (
      <div className="homePage">
        <Header />
        <div className="content">
          {this._renderBanner()}
          {this._renderBlobs()}
          {this._renderNews()}
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Home;
