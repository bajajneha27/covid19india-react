import {keys, values} from 'lodash';
// eslint-disable-next-line
import * as Icon from 'react-feather';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {MDCSlider} from '@material/slider';
import plugin from "./motion.js";
import vp from '../vp.json';
import {Helmet} from 'react-helmet';
import Footer from './footer';

function VideoPlayer({
  timeseries,
  dates,
  chartType,
  isUniform,
  isLog,
  timelineDate,
}) {

  const [highlightedDate, setHighlightedDate] = useState("2020-06-17");

  const chartOptions = {
    title: {
      text: 'COVID-19 Predictions'
    },
    chart: {
      type: 'spline'
    },
    series: [
      {
        data: values(vp[highlightedDate].TT).map((e) => e.c),
        fullData: vp,
        name: "Confirmed Cases"
      }
    ],
    credits:{
      enabled: false
    },
    xAxis:{
      labels:{
        formatter: function () {
          return Highcharts.dateFormat('%b', new Date(this.value));
        }
      },
      type: 'datetime',
      pointStart: Date.UTC(2020, 0, 1),
      pointInterval: 12 * 30 * 24 * 3600 * 1000
    },
    yAxis: {
      title: {
        text: 'Number of cases'
      }
    },
    motion: {
      enabled: true,
      axisLabel: "date",
      labels: keys(vp),
      loop: false,
      updateInterval: 1000,
      magnet: {
        round: "round",
        step: 1
      }
    }
  };

  const [options, setOptions] = useState(chartOptions);
  const min = useState(0);
  const max = 8;

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
      <HighchartsReact options={options} highcharts={Highcharts} ></HighchartsReact>

      <Footer />
    </div>
  );
}

export default React.memo(VideoPlayer);