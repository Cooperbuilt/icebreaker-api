const dotenv = require("dotenv");
const contentful = require("contentful-management");

dotenv.config();
const SPACE_ID = "wjbopjj05p56";

const client = contentful.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: process.env.CONTENTFUL,
});

function getArrayRandomElement(arr) {
  if (arr && arr.length) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

async function getSpace(spaceId, contentfulApi = client) {
  return contentfulApi.getSpace(spaceId);
}

async function getEnvironment(envId, contentfulApi) {
  return contentfulApi.getEnvironment(envId);
}

async function getEntries(contentfulApi) {
  return contentfulApi.getEntries();
}

async function getEntry(entryId, contentfulApi) {
  return contentfulApi.getEntry(entryId);
}

async function updateIcebreaker({ id, teamName }) {
  return getSpace(SPACE_ID)
    .then((space) => {
      return getEnvironment("master", space);
    })
    .then((environment) => {
      return getEntry(id, environment);
    })
    .then((entry) => {
      if (!entry.fields.team) {
        entry.fields.team = { "en-US": [teamName] };
      } else {
        entry.fields.team["en-US"] = [...entry.fields.team["en-US"], teamName];
      }

      return entry.update();
    })
    .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
    .catch(console.error);
}

async function getIcebreakers(teamName = "") {
  return getSpace(SPACE_ID)
    .then((space) => {
      return getEnvironment("master", space);
    })
    .then((environment) => {
      return getEntries(environment);
    })
    .then(({ items }) => {
      // return the first iceBreaker that doesnt have a team value that matches the teamName passed in
      const validIceBreakers = items.filter((item) => {
        if (!item.fields.team) {
          return true;
        }
        return !item.fields.team["en-US"].includes(teamName);
      });

      if (Array.isArray(validIceBreakers) && validIceBreakers.length === 0) {
        return "I'm sorry, there are no more icebreakers for your team";
      }

      const {
        fields: { text },
        sys: { id },
      } = getArrayRandomElement(validIceBreakers);

      if (teamName) {
        updateIcebreaker({ id, teamName });
      }

      return { text, id };
    })
    .catch(console.error);
}

module.exports = {
  updateIcebreaker,
  getIcebreakers,
};
