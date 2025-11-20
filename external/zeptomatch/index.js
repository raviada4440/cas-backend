"use strict";

function toRegExp(pattern) {
  const escaped = pattern.replace(/[-/\\^$+?.()|[\]{}]/g, "\\$&");
  const regexSource = "^" + escaped.replace(/\*/g, ".*").replace(/\?/g, ".") + "$";
  return new RegExp(regexSource);
}

function normalizePatterns(patterns) {
  if (!Array.isArray(patterns)) {
    return [patterns];
  }

  return patterns;
}

function match(patterns, value) {
  if (value == null) {
    return false;
  }

  return normalizePatterns(patterns).some((pattern) => {
    if (typeof pattern !== "string") {
      return false;
    }

    return toRegExp(pattern).test(String(value));
  });
}

match.filter = function filter(patterns, values) {
  return (Array.isArray(values) ? values : [values]).filter((value) =>
    match(patterns, value),
  );
};

match.isMatch = match;
match.default = match;

module.exports = match;

