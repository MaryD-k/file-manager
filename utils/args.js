export const getCommandArgs = (args) => {
  return args.reduce((acc, value) => {
    const argument = value.split('=');
    return {
      ...acc,
      [argument[0]]: argument[1]
    };
  }, {});
}