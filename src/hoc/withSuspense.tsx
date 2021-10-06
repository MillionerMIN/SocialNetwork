import { ComponentType, Suspense } from 'react';

export function withSuspense<T>(ChildComp: ComponentType<T>) {
  return (props: any) => {
    return (
      <Suspense fallback={<div>...Loading</div>}>
        <ChildComp {...props} />
      </Suspense>
    );
  };
}
