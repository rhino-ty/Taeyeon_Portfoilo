interface SortOptions<T> {
  data: T[];
  dateField?: keyof T;
  idField?: keyof T;
  firField?: keyof T;
  secField?: keyof T;
}
/**
 * 제네릭을 사용하여 데이터 배열을 주어진 날짜 필드(dateField)를 기준으로 내림차순으로 정렬하며,
 * 날짜가 동일한 경우 id 필드(idField)를 기준으로 정렬.
 *
 * @param data 정렬할 데이터 배열
 * @param dateField Optional, 기본값으론 'createdAt'이 들어가며 정렬 기준이 될 날짜 필드의 이름
 * @param idField Optional, 기본값으론 'orderId'가 들어가며 날짜가 동일한 경우 정렬할 id 필드의 이름
 *
 * @returns 내림차순으로 정렬된 데이터 배열
 */
export default function sortByDateDesc<T>({
  data,
  dateField = 'createdAt' as keyof T, // 실제 필드 타입으로 변환
  idField = 'orderId' as keyof T,
}: SortOptions<T>) {
  return (
    data?.sort((a, b) => {
      const dateA = new Date(a[dateField] as string);
      const dateB = new Date(b[dateField] as string);

      if (dateB.getTime() === dateA.getTime()) {
        // 날짜가 같을 경우 id를 기준으로 정렬
        return (b[idField] as string).localeCompare(a[idField] as string);
      } else {
        // 날짜가 다를 경우 날짜를 기준으로 내림차순 정렬
        return dateB.getTime() - dateA.getTime();
      }
    }) || []
  );
}

/**
 * 주어진 데이터 배열을 지정된 두 필드(firField와 secField)를 기준으로 오름차순으로 정렬.
 * 두 필드가 동일한 경우 두 번째 필드(secField)로 정렬.
 *
 * @param data 정렬할 데이터 배열
 * @param firField 첫 번째 필드의 이름
 * @param secField 두 번째 필드의 이름
 * @returns 오름차순으로 정렬된 데이터 배열
 */
export function sortListAsc<T>({ data, firField, secField }: SortOptions<T>) {
  if (firField && secField)
    return (
      data?.sort((a, b) => {
        // 우선적으로 첫 번째 필드(firField)를 비교하고, 동일한 경우 두 번째 필드(secField)를 비교
        const valueA = a[firField] as string;
        const valueB = b[firField] as string;

        if (valueA === valueB) {
          // 첫 번째 필드가 동일한 경우, 두 번째 필드를 비교
          const secondValueA = a[secField] as string;
          const secondValueB = b[secField] as string;

          return secondValueA.localeCompare(secondValueB);
        } else {
          // 첫 번째 필드를 기준으로 오름차순 정렬
          return valueA.localeCompare(valueB);
        }
      }) || []
    );
}
