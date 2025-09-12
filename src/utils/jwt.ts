export function fakeJWT(payload: object) {
  const header = { alg: "HS256", typ: "JWT" };
  const base64 = (obj: object) => btoa(JSON.stringify(obj));
  return `${base64(header)}.${base64(payload)}.signature`;
}
