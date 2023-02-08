export const ROUTES = {
  landingPage: "/",
  personalInfo: "/personal-info/*",
  mainPersonalInfo: "/",
  mainExperience: "/experience",

  getMainExperiencePath() {
    return this.personalInfo.replace("/*", this.mainExperience);
  },
};
