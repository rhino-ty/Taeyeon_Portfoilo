export default function cdnPlus(fileName: string | undefined) {
  if (fileName) {
    return `https://cdn.platpharm.co.kr/${fileName}`;
  }
  // https://png-pixel.com/
  // return 'data:image/pgn;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  return '/images/logo/other-color.svg';
}
