import { get, isString, isUndefined } from 'min-dash';
import { useCallback } from 'preact/hooks';

import {
  TextFieldEntry,
  ToggleSwitchEntry,
  isTextFieldEntryEdited,
  isToggleSwitchEntryEdited,
} from '@bpmn-io/properties-panel';

import { useService } from '../hooks';

export function SignalEntry(props) {
  const { editField, field } = props;

  const isDefaultVisible = (field) => field.type === 'button' && field.action === 'signal';

  return [
    {
      id: 'signal-name',
      component: SignalName,
      editField,
      field,
      isEdited: isTextFieldEntryEdited,
      isDefaultVisible,
    },
    {
      id: 'signal-validate',
      component: SignalValidate,
      editField,
      field,
      isEdited: isToggleSwitchEntryEdited,
      isDefaultVisible,
    },
  ];
}

function SignalName(props) {
  const { editField, field, id } = props;

  const debounce = useService('debounce');
  const translate = useService('translate');

  const getValue = () => {
    return get(field, ['signal', 'name'], '');
  };

  const setValue = (value, error) => {
    if (error) {
      return;
    }

    editSignal(editField, field, 'name', value);
  };

  const validate = useCallback(
    (value) => {
      if (!isString(value) || value.length === 0) {
        return translate('Must not be empty.');
      }

      return null;
    },
    [translate],
  );

  return TextFieldEntry({
    debounce,
    description: translate('Passed to the application listening to the form'),
    element: field,
    getValue,
    id,
    label: translate('Signal name'),
    setValue,
    validate,
  });
}

function SignalValidate(props) {
  const { editField, field, id } = props;

  const translate = useService('translate');

  const getValue = () => {
    return get(field, ['signal', 'validate'], false);
  };

  const setValue = (value) => {
    editSignal(editField, field, 'validate', value || undefined);
  };

  return ToggleSwitchEntry({
    element: field,
    getValue,
    id,
    inline: true,
    label: translate('Validate form'),
    tooltip: translate('An invalid form shows its errors and sends no signal.'),
    setValue,
  });
}

function editSignal(editField, field, key, value) {
  const signal = { ...get(field, ['signal'], {}), [key]: value };

  if (isUndefined(value)) {
    delete signal[key];
  }

  editField(field, ['signal'], signal);
}
