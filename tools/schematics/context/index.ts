import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export default function(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.debug('debug');
    context.logger.info('info');
    context.logger.warn('warn');
    context.logger.error('error');

    return tree;
  };
}
