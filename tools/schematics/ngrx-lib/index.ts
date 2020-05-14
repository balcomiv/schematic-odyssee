import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import * as path from 'path';

/**
 * Build a new custom Nx library with ngrx files.
 * Using Nx workspace conventions, these custom libraries are 'state' libraries since
 *  they will manage ngrx state, REST endpoints, etc.
 */
export default function(schema: any): Rule {
  const PREFIX = 'state-';
  if (!schema.name.startsWith('state-') && schema.name != 'state') {
    // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
    schema.name = PREFIX + schema.name;
  }

  const name = schema.name.substring(PREFIX.length);
  const libPath = schema.directory
    ? path.join(schema.directory, schema.name)
    : schema.name;
  const moduleName = schema.directory
    ? `${schema.directory}-${schema.name}`
    : schema.name;
  const module = path.join(
    'libs',
    libPath,
    'src/lib',
    `${moduleName}.module.ts`
  );
  return chain([
    externalSchematic('@nrwl/schematics', 'lib', {
      name: schema.name,
      directory: schema.directory,
      tags: schema.directory ? `state, ${schema.directory}` : 'state, aero'
    }),
    externalSchematic('@nrwl/schematics', 'ngrx', {
      name,
      module,
      directory: '+state',
      facade: true
    })
  ]);
}
