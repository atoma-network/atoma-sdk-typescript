/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NodesCreateResponse = {
  /**
   * The message of the response
   */
  message: string;
};

/** @internal */
export const NodesCreateResponse$inboundSchema: z.ZodType<
  NodesCreateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type NodesCreateResponse$Outbound = {
  message: string;
};

/** @internal */
export const NodesCreateResponse$outboundSchema: z.ZodType<
  NodesCreateResponse$Outbound,
  z.ZodTypeDef,
  NodesCreateResponse
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NodesCreateResponse$ {
  /** @deprecated use `NodesCreateResponse$inboundSchema` instead. */
  export const inboundSchema = NodesCreateResponse$inboundSchema;
  /** @deprecated use `NodesCreateResponse$outboundSchema` instead. */
  export const outboundSchema = NodesCreateResponse$outboundSchema;
  /** @deprecated use `NodesCreateResponse$Outbound` instead. */
  export type Outbound = NodesCreateResponse$Outbound;
}

export function nodesCreateResponseToJSON(
  nodesCreateResponse: NodesCreateResponse,
): string {
  return JSON.stringify(
    NodesCreateResponse$outboundSchema.parse(nodesCreateResponse),
  );
}

export function nodesCreateResponseFromJSON(
  jsonString: string,
): SafeParseResult<NodesCreateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NodesCreateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NodesCreateResponse' from JSON`,
  );
}
