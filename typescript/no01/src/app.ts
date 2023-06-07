function formatCommandLine(command: string[]|string): void{
  let line = "";
  if (typeof command === "string"){
    line = command.trim();
  }else {
    line = command.join(" ").trim();
  }

  console.log(line);
};

formatCommandLine("pwd");
formatCommandLine(["cd", "~"]);
