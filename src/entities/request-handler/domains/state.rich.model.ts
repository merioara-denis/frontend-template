import { StateAnemicModel } from './state.anemic.model';

export interface StateRichModel<
  RequestParams = void,
  ResponseData = null,
  Response = null,
> extends StateAnemicModel<RequestParams, ResponseData, Response> {
  /** Set handler function */
  setHandler(
    handler: NonNullable<
      StateAnemicModel<RequestParams, ResponseData, Response>['handler']
    >
  ): void;

  /** Set normalizing function */
  setNormalizing(
    normalizing: StateAnemicModel<
      RequestParams,
      ResponseData,
      Response
    >['normalizing']
  ): void;

  /** Set response instance */
  setData(
    data: StateAnemicModel<RequestParams, ResponseData, Response>['data']
  ): void;

  /** Set response instance */
  setResponse(
    response: StateAnemicModel<
      RequestParams,
      ResponseData,
      Response
    >['response']
  ): void;

  /** Set error instance */
  setError(
    error: StateAnemicModel<RequestParams, ResponseData, Response>['error']
  ): void;

  /** Set handler for fail execution handler */
  setSuccessHandler(
    successHandler: StateAnemicModel<
      RequestParams,
      ResponseData,
      Response
    >['successHandler']
  ): void;

  /** Set handler for fail execution handler */
  setFailHandler(
    failHandler: StateAnemicModel<
      RequestParams,
      ResponseData,
      Response
    >['failHandler']
  ): void;

  /** Get normalized data */
  getData(): ResponseData | null;

  /** Execution to handler */
  execution(params: RequestParams): void;
}
