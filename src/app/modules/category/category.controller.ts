import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CategoryService } from './category.service';

const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.createCategory(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category is created successfully',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
};
