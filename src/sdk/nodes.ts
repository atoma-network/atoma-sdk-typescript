/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { nodesNodesCreate } from "../funcs/nodesNodesCreate.js";
import { nodesNodesModelsRetrieve } from "../funcs/nodesNodesModelsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Nodes extends ClientSDK {
  /**
   * Create node
   *
   * @remarks
   * This endpoint allows nodes to register or update their public address in the system.
   * When a node comes online or changes its address, it can use this endpoint to ensure
   * the system has its current address for routing requests.
   *
   * ## Errors
   *
   * Returns various `AtomaProxyError` variants:
   * * `MissingHeader` - If the signature header is missing
   * * `InvalidHeader` - If the signature header is malformed
   * * `InvalidBody` - If:
   *   - The request body cannot be read
   *   - The signature is invalid
   *   - The body cannot be parsed
   *   - The sui address doesn't match the signature
   * * `InternalError` - If:
   *   - The state manager channel is closed
   *   - The registration event cannot be sent
   *   - Node Sui address lookup fails
   */
  async nodesCreate(
    request: components.NodesCreateRequest,
    options?: RequestOptions,
  ): Promise<components.NodesCreateResponse> {
    return unwrapAsync(nodesNodesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve node for a given model
   *
   * @remarks
   * This endpoint attempts to find a suitable node and retrieve its public key for encryption
   * through a two-step process:
   *
   * 1. First, it tries to select an existing node with a public key directly.
   * 2. If no node is immediately available, it falls back to finding the cheapest compatible node
   *    and acquiring a new stack entry for it.
   *
   * This endpoint is specifically designed for confidential compute scenarios where
   * requests need to be encrypted before being processed by nodes.
   *
   * ## Errors
   *   - `INTERNAL_SERVER_ERROR` - Communication errors or missing node public keys
   *   - `SERVICE_UNAVAILABLE` - No nodes available for confidential compute
   */
  async nodesModelsRetrieve(
    request: operations.NodesModelsRetrieveRequest,
    options?: RequestOptions,
  ): Promise<components.NodesModelsRetrieveResponse> {
    return unwrapAsync(nodesNodesModelsRetrieve(
      this,
      request,
      options,
    ));
  }
}
