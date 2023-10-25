
'use client'

import styles from './Stack.module.css';

const getSizeClassName = (size?: string) => {
  let sizeClassName;
  
  switch (size) {
    case 'lg':
      sizeClassName = 'large';
      break;
    default:
      sizeClassName = null;
  }

  return sizeClassName;
};

export default function Stack(props: { size?: string, className?: string, children?: React.ReactNode  }) {
  const {
    size,
    className,
    children
  } = props;
  const sizeClassName = getSizeClassName(size);

  let stackClassNames = [styles.stack];
  if (sizeClassName) {
    stackClassNames.push(sizeClassName);
  }
  if (className) {
    stackClassNames.push(className);
  }

  return (
    <div className={stackClassNames.join(' ')}>
      {children}
    </div>
  );
}
