export const ADD_BUNDLE = 'ADD_BUNDLE'

export function addBundle(version) {
  return {
    type: ADD_BUNDLE,
    version
  };
}
