import { createReducer, on } from '@ngrx/store';
import { Address } from 'src/app/features/shared/sdk/models';
import * as AddressActions from './address-data-store.actions';

export const featureKey = 'addressKey';

export interface AddressState {
    addresses: Address[];
    isLoading: boolean;
    error: any
}

export const initialState: AddressState = {
    addresses: [],
    isLoading: false,
    error: ''
};

export const reducer = createReducer(
    initialState,
    on(AddressActions.GetAddresses, (state, action) => ({
        ...state,
        isLoading: true
    })),
    on(AddressActions.GetAddressesSuccessful, (state, action) => ({
        ...state,
        addresses: action.payload.addresses,
        isLoading: false
    })),
    on(AddressActions.GetAddressesFailure, (state, action) => {
        return {
            ...state,
            error: action.error,
            isLoading: false
        }
    })

)