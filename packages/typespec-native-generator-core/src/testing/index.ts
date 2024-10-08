import {
  createTestLibrary,
  findTestPackageRoot,
  TypeSpecTestLibrary,
} from "@typespec/compiler/testing";

export const SdkTestLibrary: TypeSpecTestLibrary = createTestLibrary({
  name: "@azure-tools/typespec-native-generator-core",
  packageRoot: await findTestPackageRoot(import.meta.url),
});
