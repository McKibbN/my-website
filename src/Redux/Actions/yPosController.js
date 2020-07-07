export function getContactOffset(data) {
  return {
    type: "getContactOffset",
    payload: data
  };
}

export function getSplashOffset(data) {
  return {
    type: "getSplashOffset",
    payload: data
  };
}

export function getProjectOffset(data) {
  return {
    type: "getProjectOffset",
    payload: data
  };
}

export function getSelectOffset(data) {
  return {
    type: "getSelectOffset",
    payload: data
  };
}

export function isSetToContact(data) {
  return {
    type: "isSetToContact",
    payload: data
  };
}

export function isSetToProject(data) {
  return {
    type: "isSetToProject",
    payload: data
  };
}
