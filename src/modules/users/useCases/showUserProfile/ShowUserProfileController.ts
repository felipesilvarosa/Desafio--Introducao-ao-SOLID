import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const userFound = this.showUserProfileUseCase.execute({ user_id });

    return response.status(200).json(userFound);
  }
}

export { ShowUserProfileController };
