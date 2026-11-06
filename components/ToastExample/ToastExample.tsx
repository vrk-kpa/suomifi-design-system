import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Block,
  Button,
  Toast,
  defaultSuomifiTheme,
  useToast,
  TOAST_CLOSING_CLASS_NAME,
} from 'suomifi-ui-components';
// import { useToast, TOAST_CLOSING_CLASS_NAME } from './useToast';
import { useTranslation } from 'next-export-i18n';

// Adjust positioning so that the toast's right edge aligns with the right side of main content area
const toastEntryTransition = keyframes`
  from { translate: calc(100% + 3rem); }
  to { translate: 0; }
`;
/* 
Make sure to move the toast far enough to prevent the 
slight "bounce" in animation to become visible when the toast is closed 
*/
const toastExitTransition = keyframes`
  from { translate: 0 0; }
  to { translate: calc(100% + 3rem); }
`;

const AnimatedToast = styled(Toast)`
  animation: ${toastEntryTransition} 0.6s
    ${defaultSuomifiTheme.transitions.toastTimingFunction} both;

  &.${TOAST_CLOSING_CLASS_NAME} {
    animation: ${toastExitTransition} 0.6s
      ${defaultSuomifiTheme.transitions.toastTimingFunction} both;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    &.${TOAST_CLOSING_CLASS_NAME} {
      animation-duration: 1ms;
    }
  }
`;

const ToastExample = () => {
  const { t } = useTranslation();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const toast = useToast({ returnFocusRef: triggerRef });

  return (
    <>
      <Block
        aria-live="polite"
        style={{
          overflowX: 'clip',
          padding: '0 30px',
        }}
      >
        {toast.isVisible && (
          <AnimatedToast
            {...toast.toastProps}
            showCloseButton
            closeText={t('toast.reference_implementation.close_button_text')}
            onCloseButtonClick={toast.close}
            my="l"
          >
            {t('toast.reference_implementation.toast_text')}
          </AnimatedToast>
        )}
      </Block>
      <Button ref={triggerRef} onClick={toast.open}>
        {t('toast.reference_implementation.show_toast_button_text')}
      </Button>
    </>
  );
};

export default ToastExample;
