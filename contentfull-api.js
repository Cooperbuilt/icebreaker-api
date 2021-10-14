const dotenv = require("dotenv");
const contentful = require("contentful-management");

dotenv.config();
const SPACE_ID = "wjbopjj05p56";

const client = contentful.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: process.env.CONTENTFUL,
});

/**
 *
 * @param {Object} object
 */
const updateIcebreaker = async function ({ itemID, teamName }) {
  client
    .getSpace("<space_id>")
    .then((space) => space.getEnvironment("<environment_id>"))
    .then((environment) => environment.getEntry("<entry_id>"))
    .then((entry) => {
      entry.fields.title["en-US"] = "New entry title";
      return entry.update();
    })
    .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
    .catch(console.error);
};

const getIcebreakers = async function () {
  return client.getSpace(SPACE_ID).then((space) => {
    // This API call will request an environment with the specified ID
    return space.getEnvironment("master").then((environment) => {
      // Now that we have an environment, we can get entries from that space
      return environment.getEntries().then((entries) => {
        return entries.items.map((replies) => {
          return replies.fields.text["en-US"];
        });
      });
    });
  });
};

module.exports = {
  updateIcebreaker,
  getIcebreakers,
};
