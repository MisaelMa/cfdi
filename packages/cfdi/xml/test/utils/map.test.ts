import { describe, it, expect } from "vitest";
import { sortObject } from "../../src/utils/map";

describe("sortObject", () => {
  it("ordena correctamente según el orden dado", () => {
    const obj = { name: "a", lastname: "b", age: 30 };
    const order = ["lastname", "name"];
    const result = sortObject(obj, order);

    expect(result).toEqual({
      lastname: "b",
      name: "a",
      age: 30, // `age` aparece después ya que no está en `order`
    });
  });

  it("conserva las claves adicionales que no están en el orden dado", () => {
    const obj = { name: "a", lastname: "b", city: "NY", country: "USA" };
    const order = ["lastname"];
    const result = sortObject(obj, order);

    expect(result).toEqual({
      lastname: "b",
      name: "a",
      city: "NY",
      country: "USA",
    });
  });

  it("retorna un objeto vacío si `obj` está vacío", () => {
    const obj = {};
    const order = ["name", "lastname"];
    const result = sortObject(obj, order);

    expect(result).toEqual({});
  });

  it("retorna el objeto original si `order` está vacío", () => {
    const obj = { name: "a", lastname: "b" };
    const order: string[] = [];
    const result = sortObject(obj, order);

    expect(result).toEqual(obj);
  });

  it("ignora claves en `order` que no existen en `obj`", () => {
    const obj = { name: "a", lastname: "b" };
    const order = ["lastname", "age", "name"]; // `age` no existe en `obj`
    const result = sortObject(obj, order);

    expect(result).toEqual({
      lastname: "b",
      name: "a",
    });
  });

  it("ordena correctamente cuando el objeto tiene una sola clave", () => {
    const obj = { name: "a" };
    const order = ["name"];
    const result = sortObject(obj, order);

    expect(result).toEqual({ name: "a" });
  });
});
