import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export default function(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree.create('foo.html', '<h1>Hello World!</h1>');
  };
}
