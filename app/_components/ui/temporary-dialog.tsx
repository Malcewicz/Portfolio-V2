"use client";

import { useRef } from "react";
import styles from "@/app/_styles/ui/temporary-dialog.module.css";
import { IconX } from "@tabler/icons-react";

const TemporaryDialog = () => {
  const dialog = useRef<HTMLDivElement>(null);

  // check if device is mobile
  const window = globalThis.window;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 810;
  if (isMobile) {
    return <MobileDialog />;
  }

  // Close dialog
  const closeDialog = () => {
    if (dialog.current) {
      dialog.current.style.display = "none";
    }
  };

  return (
    <div id="temporary-dialog" className={styles.dialog} ref={dialog}>
      <div className={styles.header}>
        <h4>Temporary Notice</h4>
        <IconX onClick={closeDialog} size={22} stroke={2} />
      </div>
      <p className={styles.subtitle}>
        This website is currently under construction. Some features are not yet
        implemented or may not work as expected. Thank you for your
        understanding.
      </p>
    </div>
  );
};

const MobileDialog = () => {
  const dialog = useRef<HTMLDivElement>(null);

  // Close dialog
  const closeDialog = () => {
    if (dialog.current) {
      dialog.current.style.display = "none";
    }
  };

  return (
    <div id="mobile-dialog" className={styles.mobileDialog} ref={dialog}>
      <div className={styles.header}>
        <h4>Navigation Menu unavailable</h4>
        <IconX onClick={closeDialog} size={22} stroke={2} />
      </div>
      <p className={styles.subtitle}>
        Sorry, this website is currently under construction. Some features are
        not yet implemented or may not work as expected. Thank you for your
        understanding.
      </p>
    </div>
  );
};

export default TemporaryDialog;
