import React from 'react';
import { observer } from 'mobx-react-lite';
import * as Entities from '../entities';

type RootProps = {
  requestHandler: Entities.RequestHandler<void, ResponseData, Response>;
};

export const Root = observer((props: RootProps) => {
  const { requestHandler } = props;

  const { setHandler, setNormalizing, setSuccessHandler } = requestHandler;
  const { data, error, execution } = requestHandler;
  // const dataFromGet = getData();
  const [, setIndex] = React.useState(Symbol());

  React.useEffect(() => {
    console.log('call useEffect');
    setSuccessHandler(() => setIndex(() => Symbol()));
    setHandler(() => fetch('https://jsonplaceholder.typicode.com/posts/1'));
    setNormalizing(async (response) => await response.json());
    execution();
  }, [setHandler, setNormalizing, setSuccessHandler, execution]);

  console.debug('error', error);
  console.debug('data', data);

  return (
    <div>
      <div>Root:</div>
      <div>data: {JSON.stringify(data)}</div>
      {/* <div>dataFromGet: {JSON.stringify(dataFromGet)}</div> */}
    </div>
  );
});
