QUnit.module("szamolas", function () {
  QUnit.test("Létezik-e?", (assert) => {
    assert.ok(szamolas);
  });
});
//alap vizsgálatok
QUnit.test("Függvény-e?", (assert) => {
  assert.ok(typeof (szamolas === "function"));
});

//alap esetek
QUnit.test("Pozitiv egéswz számok", (assert) => {
  kapott = szamolas(3, 5);
  vart = 8;
  assert.equal(kapott, vart);
});

QUnit.test("Negatív egéswz számok", (assert) => {
  assert.equal(szamolas(-3, -5), -8);
});

QUnit.test("Vegyes előjelü egész számok", (assert) => {
    assert.equal(szamolas(-3, 5), 2);
});

QUnit.test("Tört számok", (assert) => {
    assert.equal(szamolas(3.2, 1.5), 4.7);
});

//speciális esetek
QUnit.test("Egész szám szövegként megadva", (assert) => {
    assert.equal(szamolas(3, "2"), 5);
});


QUnit.test("Szöveg az egyik paraméter", (assert) => {
    assert.equal(szamolas(3, "kugya"), "Szám legyen mindkét paraméter!");
});

QUnit.test("Logikai az egyik paraméter", (assert) => {
    assert.equal(szamolas(3, false), 3);
});

QUnit.test("Speciális karakter az egyik paraméter", (assert) => {
    assert.equal(szamolas('!', false), "Szám legyen mindkét paraméter!");
});

QUnit.test("PI az egyik paraméter", (assert) => {
    assert.equal(szamolas(Math.PI, 2), Math.PI + 2);
});

QUnit.test("Egy paraméter van megadva", (assert) => {
    assert.equal(szamolas(2), "Két paraméter megadása szükséges!");
});

QUnit.test("0 paraméter van megadva", (assert) => {
    assert.equal(szamolas(), "Két paraméter megadása szükséges!");
});

QUnit.test("3 vagy több paraméter van megadva", (assert) => {
    assert.equal(szamolas(2, 4, 5), "Két paraméter megadása szükséges!");
});