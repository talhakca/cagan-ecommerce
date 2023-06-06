import { inject, Getter } from '@loopback/core';
import { DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { ELearningDataSource } from '../datasources';
import { Order, OrderRelations, Cart, User, Address } from '../models';
import { CartRepository } from './cart.repository';
import { UserRepository } from './user.repository';
import { AddressRepository } from './address.repository';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {

  public readonly orderedProducts: HasManyRepositoryFactory<Cart, typeof Order.prototype.id>;

  public readonly user: BelongsToAccessor<User, typeof Order.prototype.id>;

  public readonly address: BelongsToAccessor<Address, typeof Order.prototype.id>;

  constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,
    @repository.getter('CartRepository') protected cartRepositoryGetter: Getter<CartRepository>, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('AddressRepository') protected addressRepositoryGetter: Getter<AddressRepository>,
  ) {
    super(Order, dataSource);
    this.address = this.createBelongsToAccessorFor('address', addressRepositoryGetter,);
    this.registerInclusionResolver('address', this.address.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
    this.orderedProducts = this.createHasManyRepositoryFactoryFor('orderedProducts', cartRepositoryGetter,);
    this.registerInclusionResolver('orderedProducts', this.orderedProducts.inclusionResolver);
  }
  async createPaymentIntent(amount: number) {
    const stripe = require('stripe')('sk_test_51NFvUxKhHK35k6aqMr2mf7OuZkRlV55GNWXdpDL9kZDPEZvZfOS01rnmNSjZknDmoqlnCyB5yvufVIC1CBeeT8I200Hywq3bYF');

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
      statement_descriptor: 'Custom descriptor',
    });
    return paymentIntent as string;
  }
}