/** An error here would mean that the decorator is not exported or doesn't have the right name. */
import { $decorators } from "@azure-tools/typespec-native-generator-core";
import type { AzureClientGeneratorCoreDecorators } from "./Azure.ClientGenerator.Core.js";
/** An error here would mean that the exported decorator is not using the same signature. Make sure to have export const $decName: DecNameDecorator = (...) => ... */
const _: AzureClientGeneratorCoreDecorators = $decorators["Azure.ClientGenerator.Core"];
