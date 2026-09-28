// Returns true if the requested laptop model is on the approved standard list.
function isStandardModel(model, approvedList) {
  return approvedList.some(function (m) { return m.model === model; });
}
module.exports = { isStandardModel };
