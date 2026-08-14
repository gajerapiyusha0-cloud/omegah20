import { existsSync, cpSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);

try {
  const cesiumRoot = path.dirname(require.resolve("cesium/package.json"));
  const build = path.join(cesiumRoot, "Build", "Cesium");
  const dest = path.join(process.cwd(), "public", "cesium");
  if (existsSync(build)) {
    mkdirSync(dest, { recursive: true });
    for (const folder of ["Workers", "Assets", "Widgets", "ThirdParty"]) {
      const from = path.join(build, folder);
      if (existsSync(from)) {
        cpSync(from, path.join(dest, folder), { recursive: true });
      }
    }
    const cesiumJs = path.join(build, "Cesium.js");
    if (existsSync(cesiumJs)) {
      cpSync(cesiumJs, path.join(dest, "Cesium.js"));
    }
  }
} catch {
  // Cesium is optional at install time in stripped environments.
}
