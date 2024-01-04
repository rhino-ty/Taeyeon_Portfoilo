export default function formatNumberWithCommas(number: number | undefined) {
  if (!number || !/^[0-9,]/.test(String(number))) {
    return 0;
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
