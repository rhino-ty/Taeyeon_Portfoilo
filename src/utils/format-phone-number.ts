export default function formatPhoneNumber(
  phoneNumber: string | undefined | null,
): string {
  if (phoneNumber) {
    // 모든 숫자 제외하고 제거
    const cleaned = phoneNumber.replace(/[^0-9]/g, '');

    // 형식에 맞게 '-' 삽입
    let formatted = '';

    if (cleaned.length === 10) {
      formatted = cleaned.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    } else if (cleaned.length === 11) {
      formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    } else if (cleaned.length === 9) {
      formatted = cleaned.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
    } else {
      // 기타 길이의 번호는 그냥 반환
      formatted = cleaned;
    }

    return formatted;
  }

  return '-';
}
