interface Profile {
  avatar: string;
  name: string;
}

declare module "nuxt/schema" {
  interface AppConfigInput {
    profile: Profile;
  }
}

declare module "@nuxt/schema" {
  interface AppConfigInput {
    profile: Profile;
  }
}

export default defineAppConfig({
  profile: {
    avatar: "/avatar.png",
    name: "Alexander Thorwaldson",
  },
});
