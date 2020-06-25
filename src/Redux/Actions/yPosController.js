export function getContactOffset(data) {
  return {
    type: "getContactOffset",
    payload: data
  };
}

export function getHeaderHeight(data) {
  return {
    type: "getHeaderHeight",
    payload: data
  };
}

export function isSetToContact(data) {
  return {
    type: "isSetToContact",
    payload: data
  };
}
