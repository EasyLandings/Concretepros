import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-X9XPSGXXTC'); // replace with your real ID
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};