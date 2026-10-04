'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const ARRAY_WITH_STATES = [];
  let stateCopy = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      stateCopy = { ...stateCopy, ...action.extraData };
      ARRAY_WITH_STATES.push({ ...stateCopy });
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete stateCopy[key];
      }
      ARRAY_WITH_STATES.push({ ...stateCopy });
    }

    if (action.type === 'clear') {
      stateCopy = {};
      ARRAY_WITH_STATES.push({ ...stateCopy });
    }
  }

  return ARRAY_WITH_STATES;
}

module.exports = transformStateWithClones;
