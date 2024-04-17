function szamolas(a, b) {
  if (a === undefined || b === undefined)
    return "Két paraméter megadása szükséges!";
  if (isNaN(a) || isNaN(b))
    return "Szám legyen mindkét paraméter!";
  return Number(a) + Number(b);
}
