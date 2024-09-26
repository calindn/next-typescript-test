
'use client'

import styles from './Button.module.css';

const getButtonVariant = (variant: string | undefined) => {
  let className;
  switch (variant) {
    case 'primary': 
      className = 'primary';
      break;
    case 'secondary': 
      className = 'secondary';
      break;
    default:
      className = 'primary';
  }
  return className;
};

export default function Button(props: { variant?: string, onClick: () => void, children: React.ReactNode  }) {
  const {
    children,
    onClick,
    variant
  } = props;
  const variantClassName = getButtonVariant(variant);

  return (
    <button
      onClick={onClick}
      className={[styles.base, styles[variantClassName]].join(' ')}
    >
      {children}
    </button>
  );
}
