try {
  console.log("hello");
  throw new Error();
} catch(e) {
  console.error(e);
} finally {
  console.log("bye");
}
