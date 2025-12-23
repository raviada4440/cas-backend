// pnpmfile.cjs
module.exports = {
  hooks: {
    readPackage(pkg) {
      // Only override if the package already references zeptomatch somewhere
      // (prevents injecting file deps into random workspace packages)
      const wantsZepto =
        (pkg.dependencies && pkg.dependencies.zeptomatch) ||
        (pkg.devDependencies && pkg.devDependencies.zeptomatch) ||
        (pkg.optionalDependencies && pkg.optionalDependencies.zeptomatch);

      if (process.env.USE_LOCAL_ZEPTOMATCH === "1" && wantsZepto) {
        // Prefer optionalDependencies so prod installs don’t explode if not needed
        pkg.optionalDependencies = pkg.optionalDependencies || {};
        pkg.optionalDependencies.zeptomatch = "file:external/zeptomatch";
      }

      return pkg;
    },
  },
};
