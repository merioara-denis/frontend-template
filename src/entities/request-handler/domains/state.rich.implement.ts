import { StateRichModel } from './state.rich.model';
import { StateAnemicImplement } from './state.anemic.implement';

export class StateRichImplement<
    RequestParams = void,
    ResponseData = null,
    Response = null,
  >
  extends StateAnemicImplement<RequestParams, ResponseData, Response>
  implements StateRichModel<RequestParams, ResponseData, Response>
{
  public setHandler: StateRichModel<
    RequestParams,
    ResponseData,
    Response
  >['setHandler'] = (handler) => {
    this.handler = handler;
  };

  public setNormalizing: StateRichModel<
    RequestParams,
    ResponseData,
    Response
  >['setNormalizing'] = (normalizing) => {
    this.normalizing = normalizing;
  };

  public setData: StateRichModel<
    RequestParams,
    ResponseData,
    Response
  >['setData'] = (data) => {
    this.data = data;
  };

  public setResponse: StateRichModel<
    RequestParams,
    ResponseData,
    Response
  >['setResponse'] = (response) => {
    this.response = response;
  };

  public setError: StateRichModel<
    RequestParams,
    ResponseData,
    Response
  >['setError'] = (error) => {
    this.error = error;
  };

  public setSuccessHandler: StateRichModel<
    RequestParams,
    ResponseData,
    Response
  >['setSuccessHandler'] = (successHandler) => {
    this.successHandler = successHandler;
  };

  public setFailHandler: StateRichModel<
    RequestParams,
    ResponseData,
    Response
  >['setFailHandler'] = (failHandler) => {
    this.failHandler = failHandler;
  };

  public getData: StateRichModel<
    RequestParams,
    ResponseData,
    Response
  >['getData'] = () => {
    if (!this.response) {
      return null;
    }

    // Return from cache
    if (this.data) {
      return this.data;
    }

    const normalizing = this.normalizing?.(this.response) ?? null;

    if (normalizing instanceof Promise) {
      normalizing
        .then((data: ResponseData) => {
          this.setData(data);
          this.setError(null);
        })
        .catch((error) => {
          this.setData(null);
          this.setError(error);
        });
    } else {
      this.setData(normalizing);
      this.setError(null);
    }

    return this.data;
  };

  public execution: StateRichModel<
    RequestParams,
    ResponseData,
    Response
  >['execution'] = (params) => {
    if (!this.handler) {
      this.response = null;
      this.data = null;

      return this;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = this.handler?.call(this, params as any);

    result
      .then((response) => {
        this.response = response;
        this.setError(null);
        this.successHandler?.(this.getData());
      })
      .catch((error) => {
        this.response = null;
        this.setError(error);
        this.failHandler?.(error);
      });

    return this;
  };
}
