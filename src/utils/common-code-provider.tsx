'use client';

import { useCmnCode } from '#/hooks/use-common-code';
import { useVendorCodeStore } from '#/store/common/vendor-code';

export default function CommonCodeProviders({
  children,
}: React.PropsWithChildren) {
  const { data } = useCmnCode('B1');
  useVendorCodeStore.getState().setVendorCode(data || null);
  return <>{children}</>;
}
