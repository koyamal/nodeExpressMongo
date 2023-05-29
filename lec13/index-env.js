const keys = Object.keys(process.env);

keys.map((key) => {
  console.log('key:', key, 'value: ', process.env[key]);
});
