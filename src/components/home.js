import {MAP_META} from '../constants';
import useStickySWR from '../hooks/usestickyswr';
import {fetcher} from '../utils/commonfunctions';

import axios from 'axios';
import {format} from 'date-fns';
import React, {useState, useRef, lazy, Suspense, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {useIsVisible} from 'react-is-visible';

import 'intersection-observer';

const TimeSeriesExplorer = lazy(() =>
  import('./timeseriesexplorer' /* webpackChunkName: "TimeSeriesExplorer" */)
);

const MapExplorer = lazy(() =>
  import('./mapexplorer' /* webpackChunkName: "MapExplorer" */)
);

const Actions = lazy(() =>
  import('./actions' /* webpackChunkName: "Actions" */)
);

const Table = lazy(() => import('./table' /* webpackChunkName: "Table" */));

const Minigraph = lazy(() =>
  import('./minigraph' /* webpackChunkName: "Minigraph" */)
);

const Footer = lazy(() => import('./footer' /* webpackChunkName: "Footer" */));

const Level = lazy(() => import('./level' /* webpackChunkName: "Level" */));

function Home(props) {
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: 'TT',
    districtName: null,
  });

  const [anchor, setAnchor] = useState(null);
  const [mapStatistic, setMapStatistic] = useState('active');
  const today = format(new Date(), 'yyyy-MM-dd');
  const [date, setDate] = useState(today);
  const [data, setData] = useState({});

  const {data: timeseries} = useStickySWR(
    'https://vics-core.github.io/covid-api/predictions.json',
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    let ret = {};
    if (date <= today) {
      const d = date === today ? '' : `-${date}`;
      axios
        .get(`https://api.covid19india.org/v3/min/data${d}.min.json`)
        .then((response) => {
          ret = response.data;
          setData(ret);
        });
      return;
    }
    for (const st in timeseries) {
      if (timeseries.hasOwnProperty(st)) {
        ret[st] = timeseries[st][date];
      }
    }
    setData(ret);
  }, [date, timeseries, today]);

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement, {once: true});

  const stateCodes = [
    'TT',
    ...[
      ...new Set([
        ...Object.keys(MAP_META).filter((stateCode) => stateCode !== 'TT'),
        ...Object.keys(data || {}).filter((stateCode) => stateCode !== 'TT'),
      ]),
    ].sort(),
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Coronavirus Outbreak in India - covid19india.org</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in India: Latest Map and Case Count"
        />
      </Helmet>

      <div className="Home">
        <div className="home-left">
          <div className="header">
            <Suspense fallback={<div />}></Suspense>

            {timeseries && (
              <Suspense fallback={<div style={{minHeight: '56px'}} />}>
                <Actions
                  {...{
                    setDate,
                    dates: Object.keys(timeseries['TT']).reverse(),
                    date,
                  }}
                />
              </Suspense>
            )}
          </div>

          {data['TT'] && (
            <Suspense fallback={<div />}>
              <Level data={data['TT']} />
            </Suspense>
          )}

          <Suspense fallback={<div />}>
            {timeseries && (
              <Minigraph timeseries={timeseries['TT']} {...{date}} />
            )}
          </Suspense>

          <Suspense fallback={<div />}>
            {data['TT'] && (
              <Table {...{data, regionHighlighted, setRegionHighlighted}} />
            )}
          </Suspense>
        </div>

        <div className="home-right" ref={homeRightElement}>
          {isVisible && (
            <React.Fragment>
              {data && (
                <Suspense fallback={<div />}>
                  <MapExplorer
                    stateCode="TT"
                    {...{data}}
                    {...{mapStatistic, setMapStatistic}}
                    {...{regionHighlighted, setRegionHighlighted}}
                    {...{anchor, setAnchor}}
                  />
                </Suspense>
              )}

              {timeseries && (
                <Suspense fallback={<div />}>
                  <TimeSeriesExplorer
                    timeseries={timeseries[regionHighlighted.stateCode]}
                    {...{date, stateCodes}}
                    {...{regionHighlighted, setRegionHighlighted}}
                    {...{anchor, setAnchor}}
                  />
                </Suspense>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
      {isVisible && (
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      )}
    </React.Fragment>
  );
}

export default Home;
