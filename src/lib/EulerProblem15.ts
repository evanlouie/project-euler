import { AbstractEulerProblem, IEulerProblem } from "./EulerProblem";

export default class EulerProblem15 extends AbstractEulerProblem {
  public problemNumber = 15;
  public question = `
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?`;

  public answer = () => {
    const numRoutes: number[][] = [];
    const getNumRoutes = (sizeX: number, sizeY: number): number => {
      numRoutes[sizeX] = numRoutes[sizeX] || [];

      if (numRoutes[sizeX][sizeY]) {
        return numRoutes[sizeX][sizeY];
      }

      if (sizeX == 0 || sizeY == 0) {
        return 1;
      }

      let routes = getNumRoutes(sizeX - 1, sizeY);
      routes += getNumRoutes(sizeX, sizeY - 1);

      numRoutes[sizeX][sizeY] = routes;

      return routes;
    };

    return getNumRoutes(20, 20).toString();
  };
}
