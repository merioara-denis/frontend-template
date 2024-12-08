import { makeObservable, observable, action } from 'mobx';
import { StateRichImplement, StateRichModel } from './domains';
export class RequestHandler<
  RequestParams extends void,
  ResponseData = null,
  Response = null,
> extends StateRichImplement<RequestParams, ResponseData, Response> {
  constructor() {
    super();

    makeObservable<StateRichModel>(this as StateRichImplement, {
      handler: observable,
      normalizing: observable,
      successHandler: observable,
      failHandler: observable,
      response: observable,
      data: observable,
      isError: observable,
      error: observable,
      setHandler: action,
      setNormalizing: action,
      setData: action,
      setResponse: action,
      setError: action,
      setSuccessHandler: action,
      setFailHandler: action,
      getData: action,
      execution: action,
    });
  }
}
