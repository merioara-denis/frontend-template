import { StateAnemicModel } from './state.anemic.model';

export class StateAnemicImplement<
  RequestParams = void,
  ResponseData = null,
  Response = null,
> implements StateAnemicModel<RequestParams, ResponseData, Response>
{
  public handler: StateAnemicModel<
    RequestParams,
    ResponseData,
    Response
  >['handler'] = null;

  public normalizing: StateAnemicModel<
    RequestParams,
    ResponseData,
    Response
  >['normalizing'] = null;

  public successHandler: StateAnemicModel<
    RequestParams,
    ResponseData,
    Response
  >['successHandler'] = null;

  public failHandler: StateAnemicModel<
    RequestParams,
    ResponseData,
    Response
  >['failHandler'] = null;

  public response: StateAnemicModel<
    RequestParams,
    ResponseData,
    Response
  >['response'] = null;

  public data: StateAnemicModel<RequestParams, ResponseData, Response>['data'] =
    null;

  public isError: StateAnemicModel<
    RequestParams,
    ResponseData,
    Response
  >['isError'] = false;

  public error: StateAnemicModel<
    RequestParams,
    ResponseData,
    Response
  >['error'] = null;
}
