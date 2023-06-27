export const getEnteredCommand = (line) => {
  const printedCommand = line.split(' ');
  return {
    operation: printedCommand[0],
    parameters: printedCommand.slice(1)
  };
}