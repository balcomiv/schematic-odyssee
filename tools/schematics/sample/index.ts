import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  SchematicsException,
  apply,
  url,
  template,
  move
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
// import { getBase64Image } from './utils';
import { dasherize } from '@angular-devkit/core/src/utils/strings';

export default function(schema: any): Rule {
  return chain([
    // externalSchematic('@nrwl/workspace', 'lib', {
    //   name: schema.name
    // })
    (tree: Tree, context: SchematicContext) => {
      // todo: add a check for a missing name property
      if (!schema.name) {
        throw new SchematicsException('Entity name is required');
      }

      const path = `./apps/sandbox/src/app/components`;

      // todo: add debug statement
      context.logger.info(`adding files to ${path} dir`);

      // todo: use the getBase64Image function and override the browserType property on the _options object
      // schema.browserType = getBase64Image(_options.browserType);

      // todo: apply template and move rules to the source files
      return apply(url('./files'), [
        template({
          ...strings,
          ...schema
        }),
        move(path)
      ])(context);
    }
  ]);
}
