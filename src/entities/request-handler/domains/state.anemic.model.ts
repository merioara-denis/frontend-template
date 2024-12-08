export interface StateAnemicModel<
  RequestParams = void,
  ResponseData = null,
  Response = null,
> {
  /** Handler function */
  handler: ((params?: RequestParams) => Promise<Response>) | null;

  /** Handler function */
  normalizing:
    | ((response: Response) => Promise<ResponseData>)
    | ((response: Response) => ResponseData)
    | null;

  /** Callback for success execution handler */
  successHandler: ((data: ResponseData | null) => void) | null;

  /** Callback for fail execution handler */
  failHandler: ((error: Error) => void) | null;

  /** Result for handler */
  response: Response | null;

  /** Data after normalizing */
  data: ResponseData | null;

  /** Flag indicate if has error */
  isError: boolean;

  /** Error details */
  error: null | Error;
}
