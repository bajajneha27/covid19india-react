import {keys, transform, isEmpty} from 'lodash';
import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import {format} from 'date-fns';
import plugin from './motion.js';
import {Helmet} from 'react-helmet';
import Footer from './footer';
import {formatNumber} from '../utils/commonfunctions';
import {VIDEO_PLAYER} from '../constants'

function VideoPlayer({}) {
  const [options, setOptions] = useState({});

  const chartOptions = {
    title: {
      text: 'COVID-19 Predictions',
    },
    chart: {
      type: 'spline',
      height: 600
    },
    series: [
      {
        name: 'Confirmed Cases',
        dataGrouping: {
          forced: true,
          units: [['month', [1]]],
        },
        color: 'orange',
      },
      {
        name: 'Predicted Cases',
        dataGrouping: {
          forced: true,
          units: [['month', [1]]]
        },
        color: '#7cb5ec'
      }
    ],
    legend:{
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      x: -10,
      y: 50,
      floating: true
    },
    tooltip: {
      formatter: function () {
        return (
          '<b>' +
          formatNumber(this.y) +
          '</b><br/>' +
          format(this.x, 'dd MMM, yyyy')
        );
      },
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      tickInterval: 30 * 24 * 3600 * 1000,
      range: 12 * 30 * 24 * 3600 * 1000,
    },
    yAxis: {
      title: {
        text: 'Daily Reported Cases',
      },
      max: 175000,
      min: 0,
      tickAmount: 10,
    },
    motion: {
      enabled: true,
      axisLabel: 'date',
      loop: false,
      updateInterval: 1000,
      magnet: {
        round: 'round',
        step: 1,
      },
    },
  };

  useEffect(() => {
    axios.get('https://vics-core.github.io/covid-api/vp/1.1740.json')
      .then(res => {
        const data = res.data;
        const labels =  keys(data);
        chartOptions.series[0].fullData = data;
        chartOptions.motion.labels = labels;
        const highlightedDate = labels[labels.length - 1]
        chartOptions.series[0].data = (transform(res.data[highlightedDate].TT, function(res, v, k) {
          if(k<=highlightedDate){res.push({x: new Date(k), y: v.c})};
        }, []));
        if(VIDEO_PLAYER.showPredictions){
          chartOptions.series[1].fullData = data;
          chartOptions.series[1].data = (transform(res.data[highlightedDate].TT, function(res, v, k) {
            if(k>=highlightedDate){res.push({x: new Date(k), y: v.c})};
          }, []));
        }
        else{
          chartOptions.yAxis.max = 40000
        }
        setOptions(chartOptions);
    });
  },[]);

  return (
    <div className="VideoPlayer">
      <Helmet>
        <title>Video Player - seva.ml</title>
        <meta name="title" content={`Video Player - seva.ml`} />
        <meta
          name="description"
          content="A video to demonstrate how the predictions are changing per day."
        />
      </Helmet>

      <div className="header fadeInUp" style={{animationDelay: '0.3s'}}>
        <h1>Video Player</h1>
      </div>
      { !isEmpty(options) && <HighchartsReact
        options={options}
        highcharts={Highcharts}
      ></HighchartsReact>}
      <Footer />
    </div>
  );
}

export default React.memo(VideoPlayer);
