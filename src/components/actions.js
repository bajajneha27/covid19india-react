import {fetcher} from '../utils/commonfunctions';

import {format} from 'date-fns';
import React, {useMemo, useState, useEffect, lazy, Suspense} from 'react';
import DatePicker from 'react-date-picker';
import * as Icon from 'react-feather';
import {useTranslation} from 'react-i18next';
import {FaHandPointLeft} from 'react-icons/fa';
import {useSpring, animated, useTrail, config} from 'react-spring';
import {useLocalStorage} from 'react-use';
import useSWR from 'swr';

const Updates = lazy(() =>
  import('./updates' /* webpackChunkName: "Updates" */)
);

const Actions = ({setDate, dates}) => {
  const [showUpdates, setShowUpdates] = useState(false);
  const [newUpdate, setNewUpdate] = useLocalStorage('newUpdate', false);
  const [lastViewedLog, setLastViewedLog] = useLocalStorage('lastViewedLog', 0);
  const [isTimelineMode, setIsTimelineMode] = useState(false);

  const {data: updates} = useSWR(
    'https://api.covid19india.org/updatelog/log.json',
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    if (updates !== undefined) {
      const lastTimestamp = updates.slice().reverse()[0].timestamp * 1000;
      if (lastTimestamp !== lastViewedLog) {
        setNewUpdate(true);
        setLastViewedLog(lastTimestamp);
      }
    }
  }, [lastViewedLog, updates, setLastViewedLog, setNewUpdate]);

  return (
    <React.Fragment>
      <ActionsPanel
        {...{
          lastViewedLog,
          newUpdate,
          isTimelineMode,
          setIsTimelineMode,
          showUpdates,
          setDate,
          dates,
          setNewUpdate,
          setShowUpdates,
        }}
      />

      {showUpdates && (
        <Suspense fallback={<div />}>
          <Updates {...{updates}} />
        </Suspense>
      )}
    </React.Fragment>
  );
};

const isEqual = (prevProps, currProps) => {
  return true;
};

export default React.memo(Actions, isEqual);

const ActionsPanel = ({
  lastViewedLog,
  newUpdate,
  isTimelineMode,
  setIsTimelineMode,
  showUpdates,
  setDate,
  dates,
  setNewUpdate,
  setShowUpdates,
}) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const minDate = new Date('26-MAR-2020');
  const maxDate = new Date('30-DEC-2020');
  const {t} = useTranslation();

  // const Bell = useMemo(
  //   () => (
  //     <Icon.Bell
  //       onClick={() => {
  //         setShowUpdates(!showUpdates);
  //         setNewUpdate(false);
  //       }}
  //     />
  //   ),
  //   [setNewUpdate, setShowUpdates, showUpdates]
  // );

  const BellOff = useMemo(
    () => (
      <Icon.BellOff
        onClick={() => {
          setShowUpdates(!showUpdates);
        }}
      />
    ),
    [setShowUpdates, showUpdates]
  );

  const {transform, opacity} = useSpring({
    opacity: isTimelineMode ? 1 : 0,
    transform: `perspective(600px) rotateX(${isTimelineMode ? 180 : 0}deg)`,
    config: {mass: 5, tension: 500, friction: 80},
  });

  const trail = useTrail(3, {
    from: {transform: 'translate3d(0, 10px, 0)', opacity: 0},
    to: {
      transform: 'translate3d(0, 0px, 0)',
      opacity: 1,
    },
    config: config.stiff,
  });

  return (
    <React.Fragment>
      <animated.div
        className="actions"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
          pointerEvents: isTimelineMode ? 'none' : '',
        }}
      >
        {showUpdates && BellOff}
        <animated.h5 style={trail[0]}>{t('Select a date')}:</animated.h5>
        <animated.div className="date-picker">
          <DatePicker
            value={selectedDate}
            minDate={minDate}
            maxDate={maxDate}
            calendarIcon={<Icon.Calendar size={18} />}
            clearIcon={<Icon.XCircle />}
            format="dd/MM/y"
            onChange={(date) => {
              setDate(format(date, 'yyyy-MM-dd'));
              setSelectedDate(date);
            }}
          />
        </animated.div>

        {/* {!showUpdates && (
          <animated.div className="bell-icon" style={trail[1]}>
            {Bell}
            {newUpdate && <div className="indicator"></div>}
          </animated.div>
        )} */}

        <animated.div>
          <FaHandPointLeft size={24} color="#ec3333" />
        </animated.div>
      </animated.div>
    </React.Fragment>
  );
};
