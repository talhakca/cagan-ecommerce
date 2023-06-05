/* tslint:disable */
/* eslint-disable */
import { ProductWithRelations } from './product-with-relations';

/**
 * (tsType: CommentWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CommentWithRelations {
  commentOwner?: ProductWithRelations;
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  id: string;
  isDeleted?: boolean;
  message: string;
  productId?: string;
  rate: number;
  status: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;

  [key: string]: any;
}