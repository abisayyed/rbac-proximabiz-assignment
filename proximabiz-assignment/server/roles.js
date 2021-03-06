const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("basic").readOwn("profile").updateOwn("profile");

  ac.grant("admin")
    .extend("basic", "editor")
    .createAny("subject")
    .readAny("profile")
    .updateAny("profile")
    .deleteAny("profile");

  return ac;
})();
