import express from "express";

class UserController {
  // async registration(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) {
  //   try {
  //   } catch (e) {}
  // }
  //
  // async login(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) {
  //   try {
  //   } catch (e) {}
  // }
  //
  // async logout(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) {
  //   try {
  //   } catch (e) {}
  // }
  //
  // async activate(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) {
  //   try {
  //   } catch (e) {}
  // }
  //
  // async refresh(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) {
  //   try {
  //   } catch (e) {}
  // }

  // eslint-disable-next-line class-methods-use-this
  async getUsers(
    req: express.Request,
    res: express.Response
    // next: express.NextFunction
  ) {
    try {
      res.json(["123", "456"]);
    } catch (e) {
      // ignore
    }
  }
}

export default new UserController();
