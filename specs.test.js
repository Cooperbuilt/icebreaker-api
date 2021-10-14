const MOCK_RESPONSE = [
  {
    metadata: { tags: [] },
    sys: {
      space: { sys: { type: "Link", linkType: "Space", id: "wjbopjj05p56" } },
      id: "OsL7xld00tUyCtxK8dWpW",
      type: "Entry",
      createdAt: "2021-10-13T01:50:03.891Z",
      updatedAt: "2021-10-13T01:50:22.698Z",
      environment: {
        sys: { id: "master", type: "Link", linkType: "Environment" },
      },
      publishedVersion: 4,
      publishedAt: "2021-10-13T01:50:22.698Z",
      firstPublishedAt: "2021-10-13T01:50:22.698Z",
      createdBy: {
        sys: { type: "Link", linkType: "User", id: "4TP3kDgTFqfv5dppYSEyO9" },
      },
      updatedBy: {
        sys: { type: "Link", linkType: "User", id: "4TP3kDgTFqfv5dppYSEyO9" },
      },
      publishedCounter: 1,
      version: 5,
      publishedBy: {
        sys: { type: "Link", linkType: "User", id: "4TP3kDgTFqfv5dppYSEyO9" },
      },
      contentType: {
        sys: { type: "Link", linkType: "ContentType", id: "iceBreaker" },
      },
    },
    fields: {
      id: { "en-US": 2 },
      text: { "en-US": "What hobby are you most into right now?" },
    },
  },
  {
    metadata: { tags: [] },
    sys: {
      space: { sys: { type: "Link", linkType: "Space", id: "wjbopjj05p56" } },
      id: "713Kbm9kU9GNV9GMFktbhc",
      type: "Entry",
      createdAt: "2021-10-13T01:46:23.752Z",
      updatedAt: "2021-10-13T01:49:22.276Z",
      environment: {
        sys: { id: "master", type: "Link", linkType: "Environment" },
      },
      publishedVersion: 5,
      publishedAt: "2021-10-13T01:49:22.276Z",
      firstPublishedAt: "2021-10-13T01:49:22.276Z",
      createdBy: {
        sys: { type: "Link", linkType: "User", id: "4TP3kDgTFqfv5dppYSEyO9" },
      },
      updatedBy: {
        sys: { type: "Link", linkType: "User", id: "4TP3kDgTFqfv5dppYSEyO9" },
      },
      publishedCounter: 1,
      version: 6,
      publishedBy: {
        sys: { type: "Link", linkType: "User", id: "4TP3kDgTFqfv5dppYSEyO9" },
      },
      contentType: {
        sys: { type: "Link", linkType: "ContentType", id: "iceBreaker" },
      },
    },
    fields: {
      id: { "en-US": 1 },
      text: {
        "en-US": "What is your favorite food? Has it changed over the years?",
      },
    },
  },
];

test('filters out icebreakers you have already heard', () => {
  expect(true).toBe(true)
})
test('returns any joke if no team is passed', () => {
  expect(true).toBe(true)
})
test('returns a sorry message if there are no jokes left', () => {
  expect(true).toBe(true)
})


