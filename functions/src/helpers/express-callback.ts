import {Request, Response} from "express";
import {Controller, IControllerResponse} from "../controllers";

import {ClientError} from "../errors/client-error";

export interface IHttpRequest {
    body: Request["body"]
    query: Request["query"]
    params: Request["params"]
}

export const buildExpressCallback = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    try {
      const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
      };
      const httpResponse: IControllerResponse = await controller(httpRequest);
      res.json(httpResponse.body);
    } catch (error) {
      const errMsg = error instanceof ClientError ?
      error.message : "Server Error";

      res.json({
        success: false,
        statusCode: 500,
        body: {
          error: errMsg,
        },
      });
    }
  };
};
