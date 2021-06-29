let tableHeaderMap = new Map();

tableHeaderMap.set("sensor", ["ID", "Rack", "Hersteller", "Maximale Temperatur"]);
tableHeaderMap.set("user", ["ID", "Name", "Nickname", "Telefonnummer", "Admin"]);
tableHeaderMap.set("temperature", ["ID", "Wert", "Zeit", "SensorenID"]);


export {tableHeaderMap};