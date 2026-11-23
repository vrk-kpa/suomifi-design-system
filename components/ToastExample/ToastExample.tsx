import { CSSProperties, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Block,
  Button,
  Toast,
  defaultSuomifiTheme,
  useToast,
  TOAST_CLOSING_CLASS_NAME,
  Paragraph,
} from 'suomifi-ui-components';
import { useTranslation } from 'next-export-i18n';

const toastIn = keyframes`
  from { translate: calc(100% + var(--toast-offset)) 0; }
`;

const toastOut = keyframes`
  to { translate: calc(100% + var(--toast-offset)) 0; }
`;

const ToastContainer = styled(Block)`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000; // whatever suits your case
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`;

const AnimatedToast = styled(Toast)`
  pointer-events: auto;
  width: 100%;

  @media (min-width: ${defaultSuomifiTheme.breakpoints.s}) {
    width: fit-content;
    min-width: 350px;
  }

  animation: ${toastIn} ${defaultSuomifiTheme.transitions.toastTime}
    ${defaultSuomifiTheme.transitions.toastTimingFunction} both;

  &.${TOAST_CLOSING_CLASS_NAME} {
    animation: ${toastOut} ${defaultSuomifiTheme.transitions.toastTime}
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
  const [top, setTop] = useState(10);
  const [right, setRight] = useState(10);

  useEffect(() => {
    if (!toast.isVisible) return;
    const updateTop = () => {
      const header = document.querySelector('header')?.getBoundingClientRect();
      setTop(Math.max(header?.bottom ?? 0, 0) + 10);
    };
    window.addEventListener('scroll', updateTop, { passive: true });
    return () => window.removeEventListener('scroll', updateTop);
  }, [toast.isVisible]);

  const showToast = () => {
    // 10px below the header if it's in view, otherwise 10px from the top of the main content area,
    // aligned with the right edge of the main content area with 10px margin
    const header = document.querySelector('header')?.getBoundingClientRect();
    const main = document.querySelector('main')?.getBoundingClientRect();
    const isMobile = window.matchMedia(
      `(max-width: ${defaultSuomifiTheme.breakpoints.s})`,
    ).matches;
    setRight(
      isMobile || !main
        ? 10
        : document.documentElement.clientWidth - main.right + 10,
    );
    setTop(Math.max(header?.bottom ?? 0, 0) + 10);
    toast.open();
  };

  return (
    <>
      <Paragraph mb="s">
        {t('toast.reference_implementation.instructions')}
      </Paragraph>
      <Button ref={triggerRef} onClick={showToast}>
        {t('toast.reference_implementation.show_toast_button_text')}
      </Button>
      <ToastContainer
        aria-live="polite"
        style={
          {
            top: top,
            paddingInline: right,
            '--toast-offset': `${right}px`,
          } as CSSProperties
        }
      >
        {toast.isVisible && (
          <AnimatedToast
            {...toast.toastProps}
            showCloseButton
            key={toast.openId}
            closeText={t('toast.reference_implementation.close_button_text')}
            onCloseButtonClick={toast.close}
          >
            {t('toast.reference_implementation.toast_text')}
          </AnimatedToast>
        )}
      </ToastContainer>
    </>
  );
};

export default ToastExample;
