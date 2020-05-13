import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

interface HelloWorldOptions {
  name: string;
  fileExtension: string;
}

export default function(_options: HelloWorldOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree.create(
      `${_options.name}.${_options.fileExtension}`,
      `<p>Hi, ${_options.name}!<p>`
    );
  };
}
