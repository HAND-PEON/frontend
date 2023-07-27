import { ComponentType, memo } from 'react';

import sequentialArray from './sequentialArray';

export default function WithRepeatComponent(Component: ComponentType) {
  const RepeatedComponent = memo(({ length }: { length: number }) => (
    <>
      {sequentialArray(length).map((idx) => (
        <Component key={idx} />
      ))}
    </>
  ));
  RepeatedComponent.displayName = `Repeated${
    Component.displayName ?? Component.name
  }`;

  return RepeatedComponent;
}
