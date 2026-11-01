// Modified by Aryan Jaiswal (2026): added routes for QR place pages, scanner, passport and QR sheet.
// Original: ExhibitX (Apache-2.0).
import React from 'react';
import Firstpage from './Firstpage';
import PlacePage from './PlacePage';
import Scanner from './Scanner';
import Passport from './Passport';
import QrSheet from './QrSheet';

const App = () => {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const place = path.match(/^\/place\/([\w-]+)$/);
  if (place) return <PlacePage slug={place[1]} />;
  if (path === '/scan') return <Scanner />;
  if (path === '/passport') return <Passport />;
  if (path === '/qr') return <QrSheet />;
  return <Firstpage />;
};

export default App;
