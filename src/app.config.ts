interface Profile {
  avatar: string;
  name: string;
  socials: Partial<{
    // TODO add more social options
    github: string;
    instagram: string;
    x: string;
    discord: string;
    youtube: string;
    mastodon: string;
  }>;
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
    socials: {
      github: "https://github.com/zoobzio",
    },
  },
});
