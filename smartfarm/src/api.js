export async function getMessage() {
  const res = await fetch("http://127.0.0.1:5000/api/hello");
  return res.json();
}
