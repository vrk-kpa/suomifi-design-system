import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Block,
  Button,
  Toast,
  defaultSuomifiTheme,
  useToast,
  TOAST_CLOSING_CLASS_NAME,
} from 'suomifi-ui-components';
import { useTranslation } from 'next-export-i18n';

const toastEntryTransition = keyframes`
  from { translate: calc(100vw); }
  to { translate: 0; }
`;
// Move the toast far enough to prevent bounce in animation when the toast is closed
const toastExitTransition = keyframes`
  from { translate: 0 0; }
  to { translate: calc(100vw); }
`;

const AnimatedToast = styled(Toast)<{
  $toastTop: number;
  $toastMargin: number;
}>`
  // Position the toast relative to the main content area
  position: absolute;
  top: ${({ $toastTop }) => $toastTop}px;
  left: ${({ $toastMargin }) => $toastMargin}px;
  right: ${({ $toastMargin }) => $toastMargin}px;
  width: auto;

  // For small screens, make the toast take the full width
  @media (min-width: 601px) {
    width: fit-content;
    left: auto;
    margin-left: ${({ $toastMargin }) => $toastMargin}px;
  }

  animation: ${toastEntryTransition}
    ${defaultSuomifiTheme.transitions.toastTime}
    ${defaultSuomifiTheme.transitions.toastTimingFunction} both;

  &.${TOAST_CLOSING_CLASS_NAME} {
    animation: ${toastExitTransition}
      ${defaultSuomifiTheme.transitions.toastTime}
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
  const toast = useToast({ returnFocusRef: triggerRef, duration: 100000 });
  const [toastTop, setToastTop] = useState(0);
  const [toastMargin, setToastMargin] = useState(0);

  const handleShowToast = () => {
    // Calculate position for the toast relative to the main content area and header
    const scrollY = window.scrollY;
    const header = document?.getElementsByTagName('header')[0];
    const marginX = window.innerWidth - header.getBoundingClientRect().right;
    setToastMargin(marginX);

    if (!header) {
      setToastTop(scrollY + 10);
    } else {
      const bounds = header.getBoundingClientRect();
      const headerInViewport =
        bounds.bottom > 0 && bounds.top < window.innerHeight;
      setToastTop(
        headerInViewport ? scrollY + bounds.bottom + 20 : scrollY + 10,
      );
    }

    toast.open();
  };

  return (
    <>
      <Button ref={triggerRef} onClick={handleShowToast}>
        {t('toast.reference_implementation.show_toast_button_text')}
      </Button>
      {
        // Toast container may need overflowX clipped to prevent
        // entry animation causing overflow on small screens
      }
      <Block
        aria-live="polite"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          width: '100%',
          overflowX: 'clip',
        }}
        className="container"
      >
        {toast.isVisible && (
          <AnimatedToast
            {...toast.toastProps}
            $toastTop={toastTop}
            $toastMargin={toastMargin}
            showCloseButton
            closeText={t('toast.reference_implementation.close_button_text')}
            onCloseButtonClick={toast.close}
          >
            {t('toast.reference_implementation.toast_text')}
          </AnimatedToast>
        )}
      </Block>
    </>
  );
};

export default ToastExample;
