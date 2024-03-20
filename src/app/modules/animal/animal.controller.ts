import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AnimalService } from './animal.service';

const createAnimal = catchAsync(async (req, res) => {
  const result = await AnimalService.createAnimal(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Animal is created successfully',
    data: result,
  });
});

export const AnimalController = {
  createAnimal,
};
