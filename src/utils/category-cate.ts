/**
 * 공통 코드 배열에서 이름 배열 추출
 *
 * @param {CmnCodeItem[]} cmnCodeItems - 공통 코드 배열
 * @returns {string[]} - 이름 배열
 */
export const mapToNameFromCmnCode = (
  cmnCodeItems: CmnCodeItem[] | null | undefined,
): string[] => {
  if (!cmnCodeItems) return [];
  return cmnCodeItems.map((item) => item.name);
};

/**
 * 이름에 해당하는 코드 가져오기
 *
 * @param {CmnCodeItem[]} cmnCodeItems - 공통 코드 배열
 * @param {string} name - 찾을 이름
 * @returns {string | null} - 찾은 코드 또는 null
 */
export const getCodeByName = (
  cmnCodeItems: CmnCodeItem[] | null | undefined,
  name: string,
): string | null => {
  if (!cmnCodeItems) return null;
  const foundItem = cmnCodeItems.find((item) => item.name === name);
  return foundItem ? foundItem.code : null;
};

/**
 * 코드에 해당하는 이름 가져오기
 *
 * @param {CmnCodeItem[]} cmnCodeItems - 공통 코드 배열
 * @param {string} code - 찾을 코드
 * @returns {string | null} - 찾은 이름 또는 null
 */
export const getNameByCode = (
  cmnCodeItems: CmnCodeItem[] | null | undefined,
  code: string,
): string | null => {
  if (!cmnCodeItems) return null;
  const foundItem = cmnCodeItems.find((item) => item.code === code);
  return foundItem ? foundItem.name : null;
};
