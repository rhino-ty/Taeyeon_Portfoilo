import formatPhoneNumber from './format-phone-number';

export function maskPhoneNumber(phoneNumber: string | undefined): string {
  if (typeof phoneNumber === 'string') {
    return formatPhoneNumber(phoneNumber)
      .split('-')
      .map((part, index) => {
        if (index === 1) {
          // 두 번째 부분 (가운데 숫자)를 모두 마스킹
          return '*'.repeat(part.length);
        } else {
          return part;
        }
      })
      .join('-');
  } else {
    return '-';
  }
}
