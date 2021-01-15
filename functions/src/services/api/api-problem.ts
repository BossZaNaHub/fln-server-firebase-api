export type GeneralApiProblem =
/**
 * Unable to find that resource.  This is a 404.
 */
 | {kind: "not-found"}
 /**
 * We don't have access to perform that request. This is 403.
 */
 | {kind: "forbidden"}
