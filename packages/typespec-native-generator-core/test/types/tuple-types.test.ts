import { ok, strictEqual } from "assert";
import { beforeEach, describe, it } from "vitest";
import { SdkTestRunner, createSdkTestRunner } from "../test-host.js";

describe("typespec-native-generator-core: tuple types", () => {
  let runner: SdkTestRunner;

  beforeEach(async () => {
    runner = await createSdkTestRunner({ emitterName: "@azure-tools/typespec-java" });
  });

  it("model with tupled properties", async function () {
    await runner.compileAndDiagnose(`
        @service({})
        namespace MyService;
        @usage(Usage.input | Usage.output)
        model MyFlow {
          scopes: ["https://security.microsoft.com/.default"];
          test: [int32, string]
        }
      `);

    const models = runner.context.sdkPackage.models;
    strictEqual(models.length, 1);
    const scopes = models[0].properties.find((x) => x.name === "scopes");
    ok(scopes);
    strictEqual(scopes.type.kind, "tuple");
    strictEqual(scopes.type.values[0].kind, "constant");
    strictEqual(scopes.type.values[0].valueType.kind, "string");
    strictEqual(scopes.type.values[0].value, "https://security.microsoft.com/.default");
    const test = models[0].properties.find((x) => x.name === "test");
    ok(test);
    strictEqual(test.type.kind, "tuple");
    strictEqual(test.type.values[0].kind, "int32");
    strictEqual(test.type.values[1].kind, "string");
  });
});
