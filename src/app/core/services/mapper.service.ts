import { Injectable } from '@angular/core';
import { Investment } from '../models/investments.model';
import { Card } from 'src/app/shared/card/card.model';
import { List } from 'src/app/shared/list/list.model';
import { Apartment } from '../models/apartments.model';

@Injectable({
    providedIn: 'root',
})
export class MapperService {

    mapInvestmentToCard(investment: Investment): Card {
        const card: Card = {
            id: investment?.objectId,
            image: investment?.image,
            title: investment?.name,
            subtitle: investment?.location,
            properties: [
                {
                    key: 'Total apartments:',
                    value: investment?.apartments?.toString(),
                },
                {
                    key: 'Reserved:',
                    value: investment?.reserved?.toString(),
                },
                {
                    key: 'Average m2 price:',
                    value: investment?.price?.toString() + ' PLN',
                },
                {
                    key: 'Number of parkings:',
                    value: investment?.parking?.toString(),
                },
                {
                    key: 'Number of garage:',
                    value: investment?.garage?.toString(),
                },
            ],
            actionText: 'Show list',
            actionUrl: '/apartments/',
        };
        return card;
    }

    mapInvestmentToList(investment: Investment): List {
        const list: List = {
            id: investment?.objectId,
            image: investment?.image,
            title: investment?.name,
            subtitle: investment?.location,
            properties: [
                {
                    key: 'Total apartments:',
                    value: investment?.apartments?.toString(),
                },
                {
                    key: 'Reserved:',
                    value: investment?.reserved?.toString(),
                },
                {
                    key: 'Average m2 price:',
                    value: investment?.price?.toString() + ' PLN',
                },
            ],
            actionText: 'Show list',
            actionUrl: '/apartments/',
        };
        return list;
    }

    mapApartmentToCard(apartment: Apartment): Card {
        const card: Card = {
            id: apartment.objectId,
            image: apartment.image,
            title: apartment.number.toString(),
            subtitle: apartment.location,
            properties: [
                {
                    key: 'living area',
                    value: apartment?.area?.toString(),
                },
                {
                    key: 'Bedrooms:',
                    value: apartment?.bedrooms?.toString(),
                },
                {
                    key: 'Floor:',
                    value: apartment?.floor?.toString(),
                },
                {
                    key: 'Garage:',
                    value: apartment?.garage?.toString(),
                },
                {
                    key: 'Price:',
                    value: apartment?.price?.toString(),
                },
                {
                    key: 'Terrace:',
                    value: apartment?.terrace?.toString(),
                },
            ],
            actionText: 'Show apartment',
            actionUrl: '/single-apartment/',
        };
        return card;
    }

    mapApartmentToList(apartment: Apartment): List {
        const list: List = {
            id: apartment.objectId,
            image: apartment.image,
            title: apartment.number.toString(),
            subtitle: apartment.location,
            properties: [
                {
                    key: 'living area',
                    value: apartment?.area?.toString(),
                },
                {
                    key: 'Bedrooms:',
                    value: apartment?.bedrooms?.toString(),
                },
                {
                    key: 'Floor:',
                    value: apartment?.floor?.toString(),
                },
                {
                    key: 'Price:',
                    value: apartment?.price?.toString() + ' PLN',
                },
            ],
            actionText: 'Show apartment',
            actionUrl: '/single-apartment/',
        };
        return list;
    }

}
