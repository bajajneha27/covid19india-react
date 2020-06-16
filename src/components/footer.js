import React from 'react';
import * as Icon from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer(props) {
  const {t} = useTranslation();

  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>{t('Based on Covid19India Tracker')}</h5>

      <div className="link">
        <a
          href="https://indiacovid.seva.ml"
          target="_blank"
          rel="noopener noreferrer"
        >
          blog
        </a>
      </div>

      <a
        href="https://github.com/vics-core/"
        className="button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.GitHub />
        <span>{t('Open Sourced on GitHub')}</span>
      </a>

      {/* <a
        className="button excel"
        href="http://patientdb.covid19india.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Database />
        <span>{t('Crowdsourced Patient Database')}</span>
      </a>

      <a
        href="https://twitter.com/covid19indiaorg"
        target="_blank"
        rel="noopener noreferrer"
        className="button twitter"
        style={{justifyContent: 'center'}}
      >
        <Icon.Twitter />
        <span>{t('View updates on Twitter')}</span>
      </a>

      <a
        href="https://bit.ly/covid19crowd"
        className="button telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.MessageCircle />
        <span>{t('Join Telegram to Collaborate!')}</span>
      </a> */}
    </footer>
  );
}

export default React.memo(Footer);
