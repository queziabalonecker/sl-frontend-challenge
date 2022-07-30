/**
 * @generated SignedSource<<112dfc1a22bdf9b4d35439c509386a01>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type usersRelayQuery$variables = {};
export type usersRelayQuery$data = {
  readonly users: ReadonlyArray<{
    readonly avatar: string;
    readonly email: string;
    readonly id: string | null;
    readonly name: string;
    readonly password: string;
    readonly phone: string;
  }>;
};
export type usersRelayQuery = {
  response: usersRelayQuery$data;
  variables: usersRelayQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "password",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avatar",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "usersRelayQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "usersRelayQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a7217c5b6024f247d8445bab741baae5",
    "id": null,
    "metadata": {},
    "name": "usersRelayQuery",
    "operationKind": "query",
    "text": "query usersRelayQuery {\n  users {\n    id\n    name\n    email\n    phone\n    password\n    avatar\n  }\n}\n"
  }
};
})();

(node as any).hash = "230d12c6406dc0636000112a84bc4726";

export default node;
