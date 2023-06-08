/* angular */
import { createAction, props } from '@ngrx/store';
import { CartWithRelations, Category, CommentWithRelations, Distributor, DistributorWithRelations, NewComment, NewOrder, Order, OrderWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';

/* action types */
export enum ActionTypes {
  InitApp = '[APP] InitApp',
  GetProducts = '[APP] GetProducts',
  GetProductsSuccessful = '[APP] GetProductsSuccessful',
  GetCategoriesSuccessful = '[APP] GetCategoriesSuccessful',
  GetDistributorsSuccessful = '[APP] GetDistributorsSuccessful',
  AddToCart = '[APP] AddToCart',
  GetCart = '[APP] GetCart',
  GetCartSuccessful = '[APP] GetCartSuccessful',
  AddToCartSuccessful = '[APP] AddToCartSuccessful',
  CreateOrder = '[APP] CreateOrder',
  CreateOrderSuccessful = '[APP] CreateOrderSuccessful',
  GetOrdersSuccessful = '[APP] GetOrdersSuccessful',
  GetOrders = '[APP] GetOrders',
  UpdateProductRate = '[APP] UpdateProductRate',
  UpdateProduct = '[APP] UpdateProduct',
  UpdateProductSuccessful = '[APP] UpdateProductSuccessful',
  UpdateProductRateSuccessful = '[APP] UpdateProductRateSuccessful',
  CreateComment = '[APP] CreateComment',
  CreateCommentSuccessful = '[APP] CreateCommentSuccessful',
  UpdateComment = '[APP] UpdateComment',
  UpdateCommentSuccessful = '[APP] UpdateCommentSuccessful',
}

/* actions */

export const InitApp = createAction(ActionTypes.InitApp);

export const GetProducts = createAction(ActionTypes.GetProducts)

export const GetProductsSuccessful = createAction(ActionTypes.GetProductsSuccessful, props<{ payload: { products: ProductWithRelations[] } }>());
export const UpdateComment = createAction(ActionTypes.UpdateComment, props<{ payload: { id: string, comment: Partial<CommentWithRelations>, productId: string } }>());
export const UpdateCommentSuccessful = createAction(ActionTypes.UpdateCommentSuccessful, props<{ payload: { id: string, comment: CommentWithRelations, productId: string } }>());
export const CreateComment = createAction(ActionTypes.CreateComment, props<{ payload: { comment: NewComment } }>());
export const CreateCommentSuccessful = createAction(ActionTypes.CreateCommentSuccessful, props<{ payload: { comment: CommentWithRelations } }>());
export const UpdateProductRate = createAction(ActionTypes.UpdateProductRate, props<{ payload: { productId: string, rating: number } }>());
export const UpdateProduct = createAction(ActionTypes.UpdateProduct, props<{ payload: { id: string, updatedProduct: Partial<ProductWithRelations> } }>());
export const UpdateProductSuccessful = createAction(ActionTypes.UpdateProductSuccessful, props<{ payload: { id: string, updatedProduct: Partial<Product> } }>());
export const UpdateProductRateSuccessful = createAction(ActionTypes.UpdateProductRateSuccessful);
export const CreateOrder = createAction(ActionTypes.CreateOrder, props<{ payload: { order: NewOrder } }>());
export const CreateOrderSuccessful = createAction(ActionTypes.CreateOrderSuccessful, props<{ payload: { order: Order } }>());
export const GetOrdersSuccessful = createAction(ActionTypes.GetOrdersSuccessful, props<{ payload: { orders: Order[] } }>());
export const GetOrders = createAction(ActionTypes.GetOrders);
export const GetCategoriesSuccessful = createAction(ActionTypes.GetCategoriesSuccessful, props<{ payload: { categories: Category[] } }>());
export const GetDistributorsSuccessful = createAction(ActionTypes.GetDistributorsSuccessful, props<{ payload: { distributors: DistributorWithRelations[] } }>());
export const AddToCart = createAction(ActionTypes.AddToCart, props<{ payload: { productId: string } }>());
export const GetCart = createAction(ActionTypes.GetCart);
export const GetCartSuccessful = createAction(ActionTypes.GetCartSuccessful, props<{ payload: { cart: CartWithRelations[] } }>());
export const AddToCartSuccessful = createAction(ActionTypes.AddToCartSuccessful, props<{ payload: { cart: CartWithRelations } }>());
