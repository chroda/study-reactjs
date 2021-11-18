import data from "../../data/courses.json";

const numItems = data.length;

test("Number of items = 12", () => {
  expect(numItems).toBe(12);
});

test("Number of items to be greater than 12", () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test("There is a JS in the title", () => {
  expect(dataTest).toMatch(/JS/);
});

test("The title contains React", () => {
  expect(dataTest).toContain("React");
});

// Arrays
const data2 = ["React Native", "React"];

test("The list of courses contains React Nastive and React", () => {
  expect(["React Native", "React", "Meteor"]).toEqual(
    expect.arrayContaining(data2)
  );
});

// Object
test("The first course to have a proprerty title", () => {
  expect(data[0]).toHaveProperty("title");
});

test("The first course to have a proprerty views and value of 31,266", () => {
  expect(data[0]).toHaveProperty("views", "31,266");
});
