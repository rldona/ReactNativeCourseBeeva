import { ACTIVATE_STATE, DEACTIVATE_STATE } from '../types';

export function activateState(comp) {
  return {
    type: ACTIVATE_STATE,
    comp: comp
  }
}

export function deactivateState(comp) {
  return {
    type: DEACTIVATE_STATE,
    comp: comp
  }
}
