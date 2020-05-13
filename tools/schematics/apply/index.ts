import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply
} from '@angular-devkit/schematics';

export default function(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rules: Rule[] = [];

    // todo: use the url() function to retrieve the source from the './files' directory
    const source = url('./files');
    context.logger.info(source.toString());

    // todo: use the apply() function to apply rules (empty for now) and invoke it with the context
    return apply(source, rules)(context);
  };
}
