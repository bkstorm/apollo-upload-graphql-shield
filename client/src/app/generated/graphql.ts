export type Maybe<T> = T | null;

export type Upload = any;

// ====================================================
// Documents
// ====================================================

export namespace UpdateUser {
  export type Variables = {
    email: string;
    avatarFile: Upload;
  };

  export type Mutation = {
    __typename?: "Mutation";

    updateUser: Maybe<UpdateUser>;
  };

  export type UpdateUser = {
    __typename?: "User";

    email: Maybe<string>;

    avatar: Maybe<string>;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class UpdateUserGQL extends Apollo.Mutation<
  UpdateUser.Mutation,
  UpdateUser.Variables
> {
  document: any = {
    kind: "Document",
    definitions: [
      {
        kind: "OperationDefinition",
        operation: "mutation",
        name: { kind: "Name", value: "updateUser" },
        variableDefinitions: [
          {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: { kind: "Name", value: "email" }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" }
              }
            },
            directives: []
          },
          {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: { kind: "Name", value: "avatarFile" }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Upload" }
              }
            },
            directives: []
          }
        ],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "Field",
              name: { kind: "Name", value: "updateUser" },
              arguments: [
                {
                  kind: "Argument",
                  name: { kind: "Name", value: "email" },
                  value: {
                    kind: "Variable",
                    name: { kind: "Name", value: "email" }
                  }
                },
                {
                  kind: "Argument",
                  name: { kind: "Name", value: "avatarFile" },
                  value: {
                    kind: "Variable",
                    name: { kind: "Name", value: "avatarFile" }
                  }
                }
              ],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "email" },
                    arguments: [],
                    directives: []
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "avatar" },
                    arguments: [],
                    directives: []
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    loc: { start: 0, end: 167 }
  };
}

// ====================================================
// END: Apollo Angular template
// ====================================================
