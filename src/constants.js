export const ROUTES = {
  landingPage: "/",
  personalInfo: "/personal-info/*",
  mainPersonalInfo: "/",
  mainExperience: "/experience",
  mainEducation: "/education",
  mainResume: "/resume",
  resumeOnly: "/resume",

  _getMainPath(route) {
    return this.personalInfo.replace("/*", route);
  },

  getMainExperiencePath() {
    return this._getMainPath(this.mainExperience);
  },
  getMainEducationPath() {
    return this._getMainPath(this.mainEducation);
  },
  getMainResumePath() {
    return this._getMainPath(this.mainResume);
  },
};
