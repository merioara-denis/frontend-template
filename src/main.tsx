// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reactLogo from './assets/react.svg';
import { Root } from './root';
import * as Entities from './entities';

const requestHandler = new Entities.RequestHandler<
  void,
  ResponseData,
  Response
>();

createRoot(document.getElementById('root')!).render(
  <>
    <p>Check spell checker</p>
    <img src={reactLogo} className="logo react" alt="React logo" />
    <Root requestHandler={requestHandler} />
  </>
);
