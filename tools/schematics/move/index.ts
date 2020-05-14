import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply,
  template,
  move
} from '@angular-devkit/schematics';

import { strings } from '@angular-devkit/core';

interface AddFilesInterface {
  name: string;
}

export default function(_options: AddFilesInterface): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rules: Rule[] = [
      template({ ...strings, ..._options }),
      move('sandbox/src/components')
    ];

    // todo: use the url() function to retrieve the source from the './files' directory
    const source = url('./files');

    // todo: use the apply() function to apply rules (empty for now) and invoke it with the context
    return apply(source, rules)(context);
  };
}
