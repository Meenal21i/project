export class NavigationNotImplementedError extends Error {
  constructor(pageName: string, methodName: string) {
    super(`${methodName}() not implemented for ${pageName}`);
    this.name = 'NavigationNotImplementedError';
  }
}

export class SubmoduleNotFoundError extends Error {
  constructor(subModule: string) {
    super(`Navigation failed: Submodule '${subModule}' is not found.`);
    this.name = 'SubmoduleNotFoundError';
  }
}

export class MissingNavBarLocatorError extends Error {
  constructor(locator: string) {
    super(`Missing locator for '${locator}' in NavBarLocators.`);
    this.name = 'MissingNavBarLocatorError';
  }
}

export class UnknownSocialMediaError extends Error {
    constructor(platform: string) {
        super(`Unknown social media platform '${platform}'`);
        this.name = 'UnknownSocialMediaError';
    }
}

export class HighlightedCalendarButtonNotFoundError extends Error {
  constructor(expectedStyle: string) {
    super(`Could not find the calendar button with exact expected style: "${expectedStyle}"`);
    this.name = 'HighlightedCalendarButtonNotFoundError';
  }
}

export class EmployeeNotFound extends Error {
  constructor() {
    super('Failed to extract employee name');
    this.name = 'EmployeeNotFound';
  }
}