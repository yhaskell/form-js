import { formFieldClasses } from '../Util';
import { useService, useSingleLineTemplateEvaluation } from '../../hooks';

const type = 'button';

export function Button(props) {
  const { disabled, onFocus, onBlur, field, indexes } = props;

  const { action = 'submit' } = field;

  const form = useService('form');

  const evaluatedLabel = useSingleLineTemplateEvaluation(field.label || '', { debug: true });

  const isSignal = action === 'signal';

  const onClick = isSignal ? () => form._signal({ formField: field, indexes }) : undefined;

  return (
    <div class={formFieldClasses(type)}>
      <button
        class="fjs-button"
        type={isSignal ? 'button' : action}
        disabled={disabled}
        onClick={onClick}
        onFocus={() => onFocus && onFocus()}
        onBlur={() => onBlur && onBlur()}>
        {evaluatedLabel}
      </button>
    </div>
  );
}

Button.config = {
  type,
  keyed: false,
  name: 'Button',
  group: 'action',
  create: (options = {}) => ({
    label: 'Button',
    action: 'submit',
    ...options,
  }),
};
