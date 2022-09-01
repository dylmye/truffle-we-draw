export default {
  name: "@early-access-dlyme/dylme-we-draw",
  version: "0.5.1",
  apiUrl: "https://mycelium.staging.bio/graphql",
  requestedPermissions: [
    {
      filters: { formResponse: { isAll: true, rank: 0 } },
      action: "create",
      value: true,
    },
    {
      filters: { form: { isAll: true, rank: 0 } },
      action: "create",
      value: true,
    },
  ],
  installActionRel: {},
};
