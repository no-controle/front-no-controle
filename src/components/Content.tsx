import React from 'react';
import './Content.css';

const Content = () => {
  return <div className="ui container">

    <div className="periodSelector">
      <div className="ui selection dropdown">
        <i className="dropdown icon"></i>
        <div className="default text">Gender</div>
        <div className="menu">
          <div className="item" data-value="1">Male</div>
          <div className="item" data-value="0">Female</div>
        </div>
      </div>
    </div>

    <div className="ui grid">

      <div className="two column row">
        <div className="column">
          <h3 className="ui top attached header">
            Receitas
          </h3>
          <div className="ui placeholder attached segment">
            <div className="ui icon header">
              <i className="chart pie icon"></i>
              It will soon have a chart here
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="ui top attached header">
            Despesas
          </h3>
          <div className="ui placeholder attached segment">
            <div className="ui icon header">
              <i className="chart pie icon"></i>
              It will soon have a chart here
            </div>
          </div>
        </div>
      </div>

      <div className="three column row">
        <div className="column">
          <h3 className="ui top attached header">
            Fixas
          </h3>
          <div className="ui placeholder attached segment">
            <div className="ui icon header">
              <i className="chart pie icon"></i>
              It will soon have a chart here
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="ui top attached header">
            Variáveis
          </h3>
          <div className="ui placeholder attached segment">
            <div className="ui icon header">
              <i className="chart pie icon"></i>
              It will soon have a chart here
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="ui top attached header">
            Extras
          </h3>
          <div className="ui placeholder attached segment">
            <div className="ui icon header">
              <i className="chart pie icon"></i>
              It will soon have a chart here
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
}

export default Content;