/*
 * @LastEditors: Please set LastEditors
 * @Descripttion: 
 * @version: 
 * @Author: wurong
 * @Date: 2020-06-30 17:31:01
 * @LastEditTime: 2020-06-30 18:53:45
 */
import React, { useEffect } from 'react';

const styles = {
  display: 'inline-block',
  background: '#ff6607',
  width: '50px',
  textAlign: 'center',
}
export default () => {
  (function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
        window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
    }
  }());

  let test = '';
  const animation = () => {
    if (test) {
      const width = parseInt(test.style.width);
      test.style.width = `${width + 1}px`;

      if (width > 200) {
        test.style.width = '50px';
      }
      requestAnimationFrame(animation);
    }
  };

  useEffect(() => {
    console.log(1111); requestAnimationFrame(animation);
  }, []);
  return (<div>
    <span className="test-dom" style={styles} ref={dom => { return test = dom; }}>test</span>
    <style jsx>
      {`
        .test-dom {
          display: 'inline-block';
          background: '#ff6607';
          width: '50px';
          text-align: 'center';
        }
      `}
    </style>
  </div>);
}
