import type { ReactNode } from 'react';

const SuccessStatus = ({ children }: { children: ReactNode }) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        marginTop: '15px',
        padding: '12px',
        background: '#C6F6D5',
        color: '#22543D',
        borderRadius: '4px',
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
};

export default SuccessStatus;
