import {keys, map} from 'lodash';
import React, {useState} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import plugin from './motion.js';
import vp from '../vp.json';
import {Helmet} from 'react-helmet';
import Footer from './footer';
import {format} from 'date-fns';
import {formatNumber} from '../utils/commonfunctions';

function VideoPlayer({}) {
  const [highlightedDate, setHighlightedDate] = useState('2020-06-17');

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
        data: map(vp[highlightedDate].TT, (val, key) => {
          return {x: new Date(key), y: val.c};
        }),
        fullData: vp,
        name: 'Confirmed Cases',
        dataGrouping: {
          forced: true,
          units: [['month', [1]]],
        },
      },
    ],
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
      // labels:{
      //   formatter: function () {
      //     console.log("value", this.value)
      //     return Highcharts.dateFormat('%b', this.value);
      //   }
      // },
      type: 'datetime',
      tickInterval: 30 * 24 * 3600 * 1000,
      range: 12 * 30 * 24 * 3600 * 1000
    },
    yAxis: {
      title: {
        text: 'Daily Reported Cases',
      },
      max: 175000,
      min: 0,
      tickAmount: 10
    },
    motion: {
      enabled: true,
      axisLabel: 'date',
      labels: keys(vp),
      loop: false,
      updateInterval: 1000,
      magnet: {
        round: 'round',
        step: 1,
      },
    },
  };

  const [options, setOptions] = useState(chartOptions);

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
      <HighchartsReact
        options={options}
        highcharts={Highcharts}
      ></HighchartsReact>
      <Footer />
    </div>
  );
}

export default React.memo(VideoPlayer);
