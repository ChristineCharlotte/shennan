import { Breadcrumb } from 'antd';

import './App.css';

export default function App() {
  return (
    <div>
      <div className="sn-header">
        <div className="sn-left-menu">
          <img src="./login_logo.png" alt="" id="sn-logo" />
          <img className="sn-welcome" src="./homeTitle.png" alt="" />
        </div>
        <div className="sn-right-menu">
          <a className="sn-link" href="www.abc.com">
            管理台
          </a>
          <a className="sn-link" href="www.def.com">
            李海军
          </a>
        </div>
      </div>
      <div className="sn-body">
        <div className="sn-bread">
          <Breadcrumb
            items={[
              {
                title: <a href="">首页</a>,
              },
              {
                title: <a href="">合同创建</a>,
              },
              {
                title: <a href="">外委合同</a>,
              },
            ]}
          />
        </div>
        <div className="sn-content"></div>
      </div>
    </div>
  );
}
