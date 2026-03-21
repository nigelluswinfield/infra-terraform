enum TerraformVersion {
  V0_12 = '0.12',
  V0_13 = '0.13',
  V0_14 = '0.14',
}

type TerraformConfig = {
  version: TerraformVersion,
  modules?: Module[],
  variables?: { [key: string]: any },
  output?: Output[],
}

type Module = {
  source: string,
  version?: string,
  inputs?: { [key: string]: any },
  outputs?: { [key: string]: any },
  dependsOn?: string[],
  lifecycle?: Lifecycle,
}

type Output = {
  name: string,
  value: any,
  sensitive?: boolean,
}

type Lifecycle = 'create' | 'update' | 'destroy'

enum ModuleDependencyType {
  REQUIRED = 'REQUIRE',
  OPTIONAL = 'OPTIONAL',
}

type ModuleDependency = {
  module: string,
  type: ModuleDependencyType,
  version?: string,
  versionConstraint?: string,
}

type ModuleCall = {
  module: string,
  modulePath?: string,
  name: string,
  inputs?: { [key: string]: any },
  dependsOn?: string[],
  lifecycle?: Lifecycle,
  dependencies?: ModuleDependency[],
}